'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const initI18n = () => {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'az',
      supportedLngs: ['az', 'en', 'ru'],
      backend: {
        loadPath: '/locales/{{lng}}/common.json',
      },
      detection: {
        order: ['localStorage', 'htmlTag'],
        caches: ['localStorage'],
      },
      react: {
        useSuspense: false,
      },
    });
};

initI18n();

export default i18n;