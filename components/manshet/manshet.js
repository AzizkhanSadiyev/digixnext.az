'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './manshet.module.css';

export default function Manshet() {
    const { t } = useTranslation();

    return (
        <div className={`card_item ${styles.card_item}`}>
            <div className={`item_content ${styles.item_content}`}>
                <h1 className={styles.item_title}>
                    {t('manshet.title')}
                </h1>
                <div className={styles.item_info}>
                    {t('manshet.subtitle')}
                </div>
                <div className={`${styles.btn_sect} btn_sect`}>
                    <a href="#" className={`${styles.btn_item} btn_item secondary`}>
                        <span>{t('manshet.button_1')}</span>
                    </a>
                    <a href="#" className={`${styles.btn_item} btn_item text`}>
                        <span>{t('manshet.button_2')}</span>
                    </a>
                </div>
            </div>

            <div
                className={styles.item_img}
            >
                <img src="/assets/images/main.png" alt="Manshet" />
                {/* <Image src="/assets/images/main.png" alt="Manshet" width={580} height={580} /> */}
            </div>
        </div>
    );
}
