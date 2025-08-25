'use client';

import styles from './card.module.css';

export default function AdformatCrd({
    title,
    value
}) {

    return (
        <div className={`${styles.stats_item}`} >
            <div className={`${styles.stat_content}`}>
                <p className={`${styles.stat_info}`}>{value}</p>
                <div className={`${styles.stat_title}`}>{title}</div>
            </div>
        </div>
    );
}
