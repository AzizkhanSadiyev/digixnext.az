'use client';

import Image from 'next/image';
import styles from './why.module.css';
import { useTranslation } from 'react-i18next';

export default function Why() {
    const { t } = useTranslation();

    const cards = [
        {
            icon: '/assets/icons/w_summer.svg',
            titleKey: 'why_cards.why_title_1',
            textKey: 'why_cards.why_text_1',
            subKey: 'why_cards.why_sub_1'
        },
        {
            icon: '/assets/icons/w_reading.svg',
            titleKey: 'why_cards.why_title_2',
            textKey: 'why_cards.why_text_2',
            subKey: 'why_cards.why_sub_2'
        },
        {
            icon: '/assets/icons/w_teatrical-lesson.svg',
            titleKey: 'why_cards.why_title_3',
            textKey: 'why_cards.why_text_3',
            subKey: 'why_cards.why_sub_3'
        },
        {
            icon: '/assets/icons/w_palette.svg',
            titleKey: 'why_cards.why_title_4',
            textKey: 'why_cards.why_text_4',
            subKey: 'why_cards.why_sub_4'
        },
        {
            icon: '/assets/icons/w_season.svg',
            titleKey: 'why_cards.why_title_5',
            textKey: 'why_cards.why_text_5',
            subKey: 'why_cards.why_sub_5'
        },
        {
            icon: '/assets/icons/w_language.svg',
            titleKey: 'why_cards.why_title_6',
            textKey: 'why_cards.why_text_6',
            subKey: 'why_cards.why_sub_6'
        }
    ];

    return (
        <div className={`section_wrap pad_top_80 ${styles.wrap_why}`} id="about">
            <div className={`main_center`}>
                <div className={`sect_header`}>
                    <h2 className={`sect_title`}>
                        {t('why_cards.section_title')}
                    </h2>
                    <p className={`sect_info`}>
                        {t('why_cards.section_description')}
                    </p>
                </div>
                <div className={`sect_body`}>
                    <div className={`row_item gap_24`}>
                        {cards.map((card, index) => (
                            <div className={`col_item ${styles.col_item}`} key={index}>
                                <div className={`col_in`}>
                                    <div className={`card_item ${styles.card_item}`}>
                                        <div className={`item_img ${styles.item_img}`}>
                                            <Image src={card.icon} alt="Card icon" width={32} height={32} />
                                        </div>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <div className="item_title_second">{t(card.subKey)}</div>
                                            <h4 className="item_title">{t(card.titleKey)}</h4>
                                            <div className={`item_info ${styles.item_info}`}>
                                                {t(card.textKey)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
