'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import styles from './corps.module.css';

export default function Corps() {
    const { t } = useTranslation();
    const branches = t('corps_section.branches', { returnObjects: true });
    if(!Array.isArray(branches)) {
        return <div>Xəta: Tərcümə JSON `levels_section.levels` array formatında deyil.</div>;
    }

    return (
        <div className="section_wrap pad_top_80 pad_bottom_80">
            <div className="main_center">
                <div className={`section_wrap ${styles.wrap_corps}`}>
                    <div className="sect_header">
                        <h2 className="sect_title">{t('corps_section.title')}</h2>
                        <p className="sect_info">{t('corps_section.description')}</p>
                    </div>
                    <div className="sect_body">
                        <div className="row_item gap_24">
                            {branches.map((branch, index) => (
                                <div className={`col_in ${styles.col_item}`} key={index}>
                                    <a href="#" className={`card_item ${styles.card_item}`}>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <h4 className={`item_title ${styles.item_title}`}>{branch.title}</h4>
                                            <div className={`item_info ${styles.item_info}`}>
                                                <span>{branch.address}</span>
                                            </div>
                                        </div>
                                        <div className={`item_img ${styles.item_img}`}>
                                            <Image
                                                src={branch.image}
                                                alt={branch.title}
                                                width={530}
                                                height={branch.title === 'Mərdəkan' ? 180 : 530}
                                            />
                                        </div>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <div className={`item_info_second ${styles.item_info_second}`}>
                                                {branch.features}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
