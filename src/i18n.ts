import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/messages/en.json';
import viTranslation from './locales/messages/vi.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallbackLng: 'vi',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;