'use client';

import styles from './card.module.css';

export default function AdformatCrd({
    title,
    info,
    link,
    image
}) {


    return (
        <a href={link} className={`${styles.formats_item}`} target='_blank'>
            <div className={`${styles.format_img}`}>
                <img src={image} alt="Formats" />
            </div>
            <div className={`${styles.format_content}`}>
                <h6 className={`${styles.fomrat_title}`}>{title}</h6>
                <p className={`${styles.fomrat_info}`}>{info}</p>
            </div>
        </a>
    );
}
