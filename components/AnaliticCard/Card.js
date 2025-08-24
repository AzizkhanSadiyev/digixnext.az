'use client';

import styles from './card.module.css';

export default function Card({
    title,
    info,
    image,
    layout = 'default',   // 'default' | 'reverse'
    className = '',
    style
}) {
    const rootClass = [
        'formats_item',
        styles.formats_item,
        layout === 'reverse' ? styles.card_revers : '',
        className
    ].join(' ').trim();


    return (
        <div className={rootClass} style={style}>
            <div className={`${styles.format_img}`}>
                <img src={image} alt="Monitor" />
            </div>
            <div className={`${styles.format_content}`}>
                <h6 className={`${styles.fomrat_title}`}>{title}</h6>
                <p className={`${styles.fomrat_info}`}>{info}</p>
            </div>
        </div>
    );
}
