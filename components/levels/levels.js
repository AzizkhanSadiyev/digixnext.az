'use client';

import Image from 'next/image';
import styles from './levels.module.css';
import { useTranslation } from 'react-i18next';

export default function Levels() {
    const { t } = useTranslation();

    const levels = t('levels_section.levels', { returnObjects: true });

    if(!Array.isArray(levels)) {
        return <div>Xəta: Tərcümə JSON `levels_section.levels` array formatında deyil.</div>;
    }


    const icons = [
        "/assets/icons/level_1.svg",
        "/assets/icons/level_2.svg",
        "/assets/icons/level_3.svg",
        "/assets/icons/level_4.svg"
    ];

    return (
        <div className={`section_wrap ${styles.wrap_levels}`} id="courses">
            <div className={`main_center`}>
                <div className={`sect_body`}>
                    <div className={`card_item ${styles.card_item}`}>
                        <div className={styles.item_left}>
                            <div className={styles.level_img_sect}>
                                <div className={styles.level_hash}>{t('levels_section.hash')}</div>
                                <div className={styles.level_title}>{t('levels_section.title')}</div>
                            </div>
                        </div>
                        <div className={styles.item_right}>
                            {levels.map((level, index) => (
                                <div className={styles.item_level} key={index}>
                                    <div className={`item_img ${styles.item_img}`}>
                                        <Image
                                            src={icons[index]}
                                            alt={`Level ${index + 1}`}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className={`item_content ${styles.item_content}`}>
                                        <div className={`item_title ${styles.item_title}`}>{level.title}</div>
                                        <div className={`item_info ${styles.item_info}`}>{level.text}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
