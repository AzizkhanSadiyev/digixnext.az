'use client';

import { useTranslation } from 'react-i18next';
import styles from './how.module.css';

export default function How() {
    const { t } = useTranslation();
    const steps = t('how_apply_card.steps', { returnObjects: true });

    if(!Array.isArray(steps)) {
        return <div>Xəta: Tərcümə JSON `levels_section.levels` array formatında deyil.</div>;
    }

    return (
        <div className={`section_wrap`} id="apply">
            <div className={`section_wrap ${styles.wrap_how}`}>
                <div className={`main_center`}>
                    <div className={`sect_header`}>
                        <h2 className={`sect_title`}>
                            {t('how_apply_card.title')}
                        </h2>
                        <p className={`sect_info`}>
                            {t('how_apply_card.description')}
                        </p>
                    </div>
                    <div className={`sect_body`}>
                        <div className={`card_item ${styles.card_item}`}>
                            <div className={`${styles.item_left}`}>
                                {steps.map((step, index) => (
                                    <div className={`${styles.item_level} ${styles.active}`} key={index}>
                                        <div className={`item_content ${styles.item_content}`}>
                                            <div className={`item_title ${styles.item_title}`}>{step.title}</div>
                                            <div className={`${styles.hide_block_default}`}>
                                                <div className={`item_info ${styles.item_info}`}>{step.text}</div>
                                                <div className={`btn_item white`}>{step.label}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={`${styles.item_right}`}>
                                <div className={`item_img ${styles.item_img}`}>
                                    {/* Optional image placeholder */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
