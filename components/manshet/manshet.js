'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './manshet.module.css';

export default function Manshet() {
    const { t } = useTranslation();

    return (
        <div className={`section_wrap ${styles.wrap_main}`}>
            <div className="main_center">
                <div className="sect_body">

                    <div className={`card_item ${styles.card_item}`}>
                        <div
                            className={`item_content ${styles.item_content}`}
                            data-aos="fade-right"
                            data-aos-offset="50"
                            data-aos-duration="1000"
                        >
                            <div className={styles.update_notif_sect}>
                                <div className={styles.update_item}>
                                    <div className={styles.update_icon}>{t('manshet.update')}</div>
                                    <div className={styles.update_date}>{t('manshet.update_text')}</div>
                                </div>
                            </div>

                            <h1 className={styles.item_title}>
                                {t('manshet.title')}
                            </h1>

                            <div className={styles.item_info}>
                                {t('manshet.subtitle')}
                            </div>

                            <div className={styles.main_info_sect}>
                                <div className={styles.main_info_item}>{t('manshet.item1')}</div>
                                <div className={styles.main_info_item}>{t('manshet.item2')}</div>
                                <div className={styles.main_info_item}>{t('manshet.item3')}</div>
                            </div>

                            <div className={styles.main_star_items}>
                                <div className={styles.main_star}></div>
                                <div className={styles.main_star}></div>
                                <div className={styles.main_star}></div>
                            </div>
                        </div>

                        <div
                            className={styles.item_img}
                            data-aos="fade-left"
                            data-aos-offset="50"
                            data-aos-duration="1000"
                        >
                            <Image src="/assets/images/main.png" alt="Manshet" width={520} height={520} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
