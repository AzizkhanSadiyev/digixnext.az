'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Card from '@/components/AdformatCard/Card';

export default function Page() {


    const { t, i18n } = useTranslation();
    const [ready, setReady] = useState(false);

    const formats = t('formats', { returnObjects: true });

    return (
        <div className="section_wrap wrap_container">
            <div className={`wrap_page_head `}>
                <div className={`main_center `}>
                    <div className={`sect_header`}>
                        <div className="sect_title_category text_center">Digix</div>
                        <h1 className="sect_title text_center font_48">Reklam formatları</h1>
                        <p className="sect_info text_center">
                            Unlock the power of scalability with our plans tailored to accommodate teams of any size, providing the flexibility you need to grow and succeed
                        </p>
                    </div>
                </div>
            </div>

            <div className={`section_wrap ${styles.wrap_formats}`}>
                <div className={`main_center`}>

                    <div className={`${styles.row} row`}>

                        {Array.isArray(formats) &&
                            formats.map((format, index) => (
                                <div className={`${styles.col} col`} key={index}>
                                    <div className={`col_in`}>
                                        <Card key={index}
                                            title={format.title}
                                            info={format.info}
                                            link={format.link}
                                            image={format.img}
                                        />

                                    </div>
                                </div>
                            ))}

                    </div>
                </div>
            </div>

        </div>
    );
}
