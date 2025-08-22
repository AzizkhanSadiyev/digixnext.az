'use client';

import { useTranslation } from 'react-i18next';
// import { notFound } from 'next/navigation';

export default function AboutPage() {
    const { t } = useTranslation();
    //   const valid = false;

    //   if(!valid) {
    //     notFound(); // bu sənin not-found.js səhifəni göstərir
    //   }

    return (
        <div>
            <h1>{t('about')}</h1>
            <p>Mil-Lyceum haqqında məlumat...</p>
        </div>
    );
}
