'use client';

import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { useRef } from 'react';

export default function I18nProvider({ lng, resources, children }) {
    const i18nRef = useRef();

    if(!i18nRef.current) {
        const instance = i18next.createInstance();
        instance.use(initReactI18next).init({
            lng,
            fallbackLng: lng,
            interpolation: { escapeValue: false },
            defaultNS: 'common',
            resources: { [lng]: resources }, // SSR’den gelen snapshot
        });
        i18nRef.current = instance;
    } else {
        i18nRef.current.changeLanguage(lng);
        Object.keys(resources).forEach((ns) => {
            i18nRef.current.addResources(lng, ns, resources[ns]);
        });
    }

    return <I18nextProvider i18n={i18nRef.current}>{children}</I18nextProvider>;
}
