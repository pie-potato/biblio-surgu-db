import type { StrapiApp } from '@strapi/strapi/admin';
import ru from '../translations/ru.json';

export default {
  config: {
    locales: [
      'ru'
    ],
    translations: {
      ru: {
        ...ru
      }
    },
    languageNativeNames: {
      ru: 'Русский',
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};