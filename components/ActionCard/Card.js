'use client';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import styles from './card.module.css';

export default function Card({
    cover,
    category,
    title,
    subtitle,
    description,
    button_1,
    button_2,
    metric,
    layout = 'default',   // 'default' | 'reverse'
    tone = 'light',       // 'light' | 'brand' | 'dark'
    padding = false,     // true | false
    className = '',
    style
}) {
    const rootClass = [
        'card_item',
        styles.card_item,
        layout === 'reverse' ? styles.card_revers : '',
        tone === 'white' ? styles.card_white : '',
        tone === 'dark' ? styles.card_dark : '',
        padding ? styles.pad96 : '',
        className
    ].join(' ').trim();

    const { t } = useTranslation();

    return (
        <div className={rootClass} style={style}>
            <div className={`item_content ${styles.item_content}`}>
                {category && <div className={`sect_title_category ${styles.sect_title_category}`}>{category}</div>}
                <h4 className={styles.item_title}>
                    {title}
                </h4>
                {subtitle && <div className={styles.item_info}>{subtitle}</div>}
                <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                />
                <div className={`${styles.btn_sect} btn_sect`}>
                    {button_1 && <a href="#" className={`${styles.btn_item} btn_item primary`}>
                        <span>{button_1}</span>
                    </a>}
                    {button_2 && <a href="#" className={`${styles.btn_item} btn_item text_default`}>
                        <span>{button_2}</span>
                    </a>}

                </div>
            </div>

            <div className={styles.item_img}>
                <img src={cover} alt="Card" />
                {metric && metric.value && (
                    <div className={styles.metric_card}>
                        <div className={styles.metric_head}>
                            <span className={styles.metric_label}>{metric.label}</span>
                            {metric.delta && (
                                <span className={`${styles.metric_delta} ${metric.deltaType === 'down' ? styles.is_down :
                                    metric.deltaType === 'neutral' ? styles.is_neutral : styles.is_up
                                    }`}>{metric.delta}</span>
                            )}
                        </div>
                        <div className={styles.metric_value}>{metric.value}</div>
                    </div>
                )}
            </div >
        </div >
    );
}
