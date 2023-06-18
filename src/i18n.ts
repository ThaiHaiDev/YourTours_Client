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

const geti18nFromLocalStorage = (): any => {
  return localStorage.getItem('i18n') || 'vi';
};

i18n.use(initReactI18next).init({
  resources,
  lng: geti18nFromLocalStorage(),
  fallbackLng: geti18nFromLocalStorage(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;