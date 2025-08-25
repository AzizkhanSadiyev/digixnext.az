'use client';

import Image from 'next/image';
import styles from './card.module.css';
import { useTranslation } from 'react-i18next';

export default function Services({
    title,
    description,
    icon
}) {
    const { t } = useTranslation();

    return (
        <div className={`card_item ${styles.card_item}`}>
            <div className={`item_img ${styles.item_img}`}>
                <img src={icon} alt="Services" />
            </div>
            <div className={`item_content ${styles.item_content}`}>
                <h4 className="item_title">{title}</h4>
                <div className={`item_info ${styles.item_info}`}>
                    {description}
                </div>
            </div>
        </div>
    );
}
