// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Import translations for different languages
import enTranslation from './locals/en/translation.json';
import arTranslation from './locals/ar/translation.json';
import kuTranslation from './locals/ku/translation.json';
const storedLang = localStorage.getItem("i18nextLng");
const defaultLanguage = storedLang || 'en';
const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
  ku: {
    translation: kuTranslation,
  },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
if (typeof window !== "undefined" && !storedLang) {
  localStorage.setItem("i18nextLng", defaultLanguage);
}
export default i18n;
