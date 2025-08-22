'use client';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './footer.module.css';


export default function Footer() {
    const { t } = useTranslation();
    const pathname = usePathname();
    const currentLang = pathname.split('/')[1];

    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footer_full}>
                <div className={`${styles.ftr_bottom} clearfix`}>
                    <div className={`main_center clearfix`}>
                        <div className={styles.ftr_row}>

                            <div className={styles.ftr_left}>
                                <div className={styles.footer_content}>
                                    <div className={styles.footer_title}>
                                        {t('footer_title')}
                                    </div>
                                    <div className={styles.footer_info}>
                                        {t('footer_info')}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.ftr_right}>
                                <div className={styles.ml_form}>
                                    <div className={styles.ml_form_row}>
                                        <input type="text" name="email" placeholder="E-mail ünvanını daxil et" className={styles.ml_input_item} />
                                        <buuton type="button" className={`btn_item secondary`}>
                                            <span>{t('subscribe')}</span>
                                        </buuton>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.ftr_row}>
                            <div className={`${styles.logo_sect} clearfix`}>
                                <a href={`/${currentLang}`} className={styles.logo}>
                                    <div className={styles.logo_img}></div>
                                </a>
                            </div>
                            <div className={styles.ftr_menu_sect}>
                                <ul>
                                    <li><a href="#services">{t('advertiser')}</a></li>
                                    <li><a href="#about">{t('publisher')}</a></li>
                                    <li><a href="#courses">{t('ad_formats')}</a></li>
                                    <li><a href="#apply">{t('about')}</a></li>
                                    <li><a href="#faq"> {t('faq')}</a></li>
                                    <li><a href="#contact">{t('contact')}</a></li>
                                </ul>
                            </div>
                            <ul className={styles.socials}>
                                <li>
                                    <a href="#">
                                        <Image src="/assets/icons/x.svg" alt="Facebook" width={24} height={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image src="/assets/icons/fb.svg" alt="Facebook" width={24} height={24} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Image src="/assets/icons/lnkd.svg" alt="Facebook" width={24} height={24} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={`main_center clearfix`}>
                    <div className={styles.copyright}>
                        <div className={styles.copyright_inner}>
                            {t('copyright')}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
