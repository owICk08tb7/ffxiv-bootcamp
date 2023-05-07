const path = require('path');

const {
  addPlugins,
  getLoaders,
  getPlugin,
  loaderByName,
  pluginByName,
} = require('@craco/craco');

const { defaultGetLocalIdent } = require('css-loader/dist/utils');
const lodash = require('lodash');
const { DefinePlugin } = require('webpack');

const { version } = require('./package.json');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      setWebpackCachePath(webpackConfig, '.cache/webpack');
      setBabelCachePath(webpackConfig, '.cache/babel');
      setEslintCachePath(webpackConfig, '.cache/eslint.json');

      removeEslintBaseConfig(webpackConfig);

      generateCssModuleClassNames(webpackConfig, (modulePath, className, hash) => {
        const moduleName = path.basename(modulePath, '.module.scss');
        const smallHash = hash.slice(0, 5).replaceAll('_', 'x');
        return `${moduleName}-${className}-${smallHash}`;
      });

      provideEnvironmentVariables(webpackConfig, {
        VERSION: version,
      });

      return webpackConfig;
    },
  },
};

function setWebpackCachePath(webpackConfig, cachePath) {
  webpackConfig.cache.cacheDirectory = path.resolve(__dirname, cachePath);
}

function setBabelCachePath(webpackConfig, cachePath) {
  const babelLoaderMatches = getLoaders(webpackConfig, loaderByName('babel-loader')).matches;
  babelLoaderMatches.forEach((match) => {
    match.loader.options.cacheDirectory = cachePath;
  });
}

function setEslintCachePath(webpackConfig, cachePath) {
  const eslintPluginMatch = getPlugin(webpackConfig, pluginByName('ESLintWebpackPlugin')).match;
  eslintPluginMatch.options.cacheLocation = cachePath;
}

function removeEslintBaseConfig(webpackConfig, cacheLocation) {
  const eslintPluginMatch = getPlugin(webpackConfig, pluginByName('ESLintWebpackPlugin')).match;
  eslintPluginMatch.options.baseConfig = {};
}

function generateCssModuleClassNames(webpackConfig, generator) {
  const cssLoaderMatches = getLoaders(webpackConfig, loaderByName('css-loader')).matches;
  cssLoaderMatches.forEach((match) => {
    const moduleOptions = match.loader.options.modules;
    if (moduleOptions.getLocalIdent) {
      moduleOptions.getLocalIdent = (
        loaderContext,
        localIdentName,
        localName,
        options
      ) => {
        const hash = defaultGetLocalIdent(
          loaderContext,
          localIdentName,
          localName,
          options
        );
        return generator(loaderContext.resourcePath, localName, hash);
      };
    }
  });
}

function provideEnvironmentVariables(webpackConfig, variables) {
  addPlugins(webpackConfig, [
    new DefinePlugin(
      lodash(variables)
        .mapKeys((value, key) => `process.env.${key}`)
        .mapValues(JSON.stringify)
        .value()
    ),
  ]);
}
