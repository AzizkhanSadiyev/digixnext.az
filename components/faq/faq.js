'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Accordion from './Accordion';
import styles from './faq.module.css';

export default function AccordionGroup() {
    const { t } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = t('faq_section.faqs', { returnObjects: true });

    return (
        <div className={`section_wrap pad_top_80 pad_bottom_80 ${styles.wrap_faq}`} id="faq">
            <div className={`main_center ${styles.main_center}`}>
                <div className={`${styles.faq_body}`}>
                    <div className={`sect_header ${styles.sect_header}`}>
                        <h2 className="sect_title">{t('faq_section.title')}</h2>
                        <p className="sect_info">{t('faq_section.description')}</p>
                    </div>
                    <div className={`sect_body`}>
                        <div className={styles.faq_items}>
                            {Array.isArray(faqs) &&
                                faqs.map((faq, index) => (
                                    <Accordion
                                        key={index}
                                        title={faq.title}
                                        content={faq.content}
                                        isOpen={activeIndex === index}
                                        onClick={() => setActiveIndex(index === activeIndex ? null : index)}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
