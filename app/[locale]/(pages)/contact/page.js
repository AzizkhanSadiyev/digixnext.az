'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

import Form from '@/components/form/form';

export default function Page() {


    const { t, i18n } = useTranslation();
    const [ready, setReady] = useState(false);


    return (
        <div className={`${styles.wrap_contact} section_wrap wrap_container`}>
            <div className={`wrap_page_head `}>
                <div className={`main_center `}>
                    <div className={`${styles.sect_header} sect_header`}>
                        <div className="sect_title_category ">Bizimlə əlaqə</div>
                        <h1 className="sect_title  font_48">Bizimlə əlaqə saxla</h1>
                        <p className="sect_info ">Sualların və ya əməkdaşlıq təkliflərin üçün bizimlə rahatlıqla əlaqə saxlaya bilərsən.</p>
                    </div>
                    <div className={`${styles.row} row`}>
                    {[
                        {
                            title: 'Ünvan',
                            value: '123 Main Street, City, Country',
                            href: 'https://maps.google.com/?q=123 Main Street, City, Country',
                            icon: '/assets/icons/loc_cnt.svg',
                            alt: 'Location'
                        },
                        {
                            title: 'Telefon',
                            value: '+994 51 201 69 26',
                            href: 'tel:+994512016926',
                            icon: '/assets/icons/phone_cnt.svg',
                            alt: 'Phone'
                        },
                        {
                            title: 'E-poçt',
                            value: 'info@digix.az',
                            href: 'mailto:info@digix.az',
                            icon: '/assets/icons/mail_cnt.svg',
                            alt: 'E-mail'
                        }
                    ].map((it, i) => (
                        <div key={i} className={`${styles.col} col`}>
                            <div className={`${styles.col_in} col_in`}>
                                <div className={styles.card}>
                                    <div className={styles.iconWrap}>
                                        <Image
                                            src={it.icon}
                                            alt={it.alt}
                                            width={24}
                                            height={24}
                                            className={styles.icon}
                                        />
                                    </div>

                                    <h3 className={styles.title}>{it.title}</h3>

                                    {it.href ? (
                                        <a  href={it.href}
                                            className={styles.value}
                                            target={it.href.startsWith('http') ? '_blank' : undefined}
                                            rel={it.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        >
                                            {it.value}
                                        </a>
                                    ) : (
                                        <div className={styles.value}>{it.value}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>

            <div className="sect_body">
                <div className={`main_center `}>
                    <div className={`${styles.contact_body}`}>
                        <div className={`${styles.contact_side}`}>
                            <div className={`${styles.sect_header} sect_header`}>
                                <h2 className={`${styles.sect_title} sect_title`}>Bizə müraciət edin</h2>
                                <p className="sect_info text_left">Sualların, rəyin və ya sorğun varsa, aşağıdakı formu doldur.</p>
                            </div>
                            <Form />
                        </div>
                        <div className={styles.contact_side}>
                            <div className={styles.map}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97236.44637536081!2d49.772559262375786!3d40.394693997423566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1756122240977!5m2!1str!2saz"
                                    title="Xəritə — Bakı"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
