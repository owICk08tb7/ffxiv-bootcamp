module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: 'airbnb',
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'arrow-body-style': 'off',
    'import/order': ['error', {
      groups: [
        ['builtin', 'external'],
        'internal',
      ],
      pathGroups: [
        {
          pattern: 'src/**',
          group: 'internal',
          position: 'after',
        },
      ],
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      'newlines-between': 'always',
    }],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-bitwise': 'off',
    'no-console': 'off',
    'no-restricted-imports': ['error', {
      patterns: [{
        group: ['./*', '../*'],
        message: 'Relative imports are not allowed, please use absolute imports.',
      }],
    }],
    'no-unused-vars': 'warn',
    'no-use-before-define': ['error', { functions: false }],
    'quote-props': ['error', 'as-needed'],
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  },
};
