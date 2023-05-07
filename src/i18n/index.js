import i18n from 'i18next';
import { mapValues } from 'lodash';
import { initReactI18next } from 'react-i18next';

import { translations } from 'src/i18n/translations';

const resources = mapValues(translations, (translation) => ({ translation }));

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    pluralSeparator: '-',
  });

export { i18n };
