'use client';

import Image from 'next/image';
import styles from './services.module.css';
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation();

    return (
        <div className={`section_wrap pad_top_80`} id="services">
            <div className={`section_wrap ${styles.wrap_services}`}>
                <div className={`main_center`}>
                    <div className={`sect_body`}>
                        <div className={`row_item gap_24`}>

                            <div className={`col_item ${styles.col_item}`}>
                                <div className={`col_in`}>
                                    <div className={`card_item ${styles.card_item}`}>
                                        <div className={`item_img ${styles.item_img}`}>
                                            <Image src="/assets/icons/service_mission.svg" alt="Services" width={32} height={32} />
                                        </div>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <h4 className="item_title">{t('services_cards.services_title_1')}</h4>
                                            <div className={`item_info ${styles.item_info}`}>
                                                {t('services_cards.services_text_1')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`col_item ${styles.col_item}`}>
                                <div className={`col_in`}>
                                    <div className={`card_item ${styles.card_item}`}>
                                        <div className={`item_img ${styles.item_img}`}>
                                            <Image src="/assets/icons/service_tehsil.svg" alt="Services" width={32} height={32} />
                                        </div>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <h4 className="item_title">{t('services_cards.services_title_2')}</h4>
                                            <div className={`item_info ${styles.item_info}`}>
                                                {t('services_cards.services_text_2')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`col_item ${styles.col_item}`}>
                                <div className={`col_in`}>
                                    <div className={`card_item ${styles.card_item}`}>
                                        <div className={`item_img ${styles.item_img}`}>
                                            <Image src="/assets/icons/service_lang.svg" alt="Services" width={32} height={32} />
                                        </div>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <h4 className="item_title">{t('services_cards.services_title_3')}</h4>
                                            <div className={`item_info ${styles.item_info}`}>
                                                {t('services_cards.services_text_3')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
