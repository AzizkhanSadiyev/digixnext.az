'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import "@/styles/form.css";
import styles from './form.module.css';

export default function Form() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Real tətbiqdə buranı API çağırışı ilə əvəz et
    };

    return (
        <div className={`section_wrap pad_top_80 pad_bottom_80 ${styles.wrap_contact_items}`} id="contact">
            <div className={`main_center ${styles.main_center}`}>
                <div className={`sect_body`}>
                    <div className={`${styles.contact_gap}`}>

                        <div className={styles.contact_social_block}>
                            <div className={`sect_header ${styles.sect_header}`}>
                                <h2 className="sect_title_second">{t('form_section.title')}</h2>
                            </div>
                            <p className={styles.contact_info}>{t('form_section.description')}</p>
                            <div className={styles.contact_title}>{t('form_section.subtitle')}</div>

                            <div className={styles.contact_items}>
                                <div className={styles.cnt_item}>
                                    <div className={styles.contact_mini_title}>{t('form_section.contact_info')}</div>
                                </div>
                                <div className={styles.cnt_item}>
                                    <a href="mailto:support@cloudo.com" className={styles.cnt_item_link}>
                                        <div className={styles.cnt_itm_text}>
                                            <div className={styles.cnt_itm_name}>{t('form_section.email')}</div>
                                            <div className={styles.cnt_itm_value}>support@cloudo.com</div>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.cnt_item}>
                                    <a href="tel:(123)1231546" className={styles.cnt_item_link}>
                                        <div className={styles.cnt_itm_text}>
                                            <div className={styles.cnt_itm_name}>{t('form_section.phone')}</div>
                                            <div className={styles.cnt_itm_value}>(123) 123-1546</div>
                                        </div>
                                    </a>
                                </div>
                                <div className={styles.cnt_item}>
                                    <div className={styles.contact_social}>
                                        <ul className={styles.socials}>
                                            <li><a href="#"><Image src="/assets/icons/fb.svg" alt="Facebook" width={40} height={40} /></a></li>
                                            <li><a href="#"><Image src="/assets/icons/tlg.svg" alt="Telegram" width={40} height={40} /></a></li>
                                            <li><a href="#"><Image src="/assets/icons/lnkd.svg" alt="LinkedIn" width={40} height={40} /></a></li>
                                            <li><a href="#"><Image src="/assets/icons/x.svg" alt="Twitter" width={40} height={40} /></a></li>
                                            <li><a href="#"><Image src="/assets/icons/pinterest.svg" alt="Pinterest" width={40} height={40} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contact_form_block}>
                            <form onSubmit={handleSubmit}>
                                <div className="form_item">
                                    <label className="itm_inp_label">{t('form_section.fields.fullName')}</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder={t('form_section.fields.placeholder_fullName')}
                                        className="item_input"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_item">
                                    <label className="itm_inp_label">{t('form_section.fields.email')}</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={t('form_section.fields.placeholder_email')}
                                        className="item_input"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {!formData.email.includes('@') && formData.email.length > 0 && (
                                        <div className={styles.error_type}>{t('form_section.error_email')}</div>
                                    )}
                                </div>

                                <div className="form_item">
                                    <label className="itm_inp_label">{t('form_section.fields.subject')}</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder={t('form_section.fields.placeholder_subject')}
                                        className="item_input"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_item">
                                    <label className="itm_inp_label">{t('form_section.fields.message')}</label>
                                    <textarea
                                        name="message"
                                        className="item_input"
                                        placeholder={t('form_section.fields.placeholder_message')}
                                        style={{ minHeight: '120px' }}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form_item">
                                    <button type="submit" className="btn_item secondary">
                                        {t('form_section.button')}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
