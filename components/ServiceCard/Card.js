'use client';

import Image from 'next/image';
import styles from './card.module.css';
import { useTranslation } from 'react-i18next';

export default function Card({
    title,
    info
}) {
    const { t } = useTranslation();

    return (
        <div className={styles.item_level}>
            <div className={`item_title ${styles.item_title}`}>{title}</div>
            <div className={`item_info ${styles.item_info}`}>{info}</div>
        </div>
    );
}
