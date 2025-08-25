'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

import FAQ from '@/components/faq/faq';

export default function Page() {


    const { t, i18n } = useTranslation();
    const [ready, setReady] = useState(false);


    return (
        <div className="section_wrap wrap_container">
            <div className={`wrap_page_head `}>
                <div className={`main_center `}>
                    <div className={`sect_header`}>
                        <div className="sect_title_category text_center">FAQ</div>
                        <h1 className="sect_title text_center font_48">{t('faq_section.title')}</h1>
                        <p className="sect_info text_center">{t('faq_section.description')}</p>
                    </div>
                </div>
            </div>

            <FAQ title="Digix" />
            <FAQ title="Reklamçı" />
            <FAQ title="Yayınçı" />

        </div>
    );
}
