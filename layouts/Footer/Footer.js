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
                                <div className={`logo_sect clearfix`}>
                                    <a href={`/${currentLang}`} className={styles.logo}>
                                        <div className={styles.logo_img}></div>
                                        <div className={styles.logo_name}>Mil-Lyceum</div>
                                    </a>
                                </div>
                                <div className={styles.footer_info}>
                                    {t('footer_info')}
                                </div>
                                <ul className={styles.socials}>
                                    <li>
                                        <a href="#">
                                            <Image src="/assets/icons/fb_f.svg" alt="Facebook" width={24} height={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Image src="/assets/icons/lnkd_f.svg" alt="Facebook" width={24} height={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Image src="/assets/icons/tlg_f.svg" alt="Facebook" width={24} height={24} />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.ftr_right}>
                                <div className={styles.ftr_menu_sect}>
                                    <ul>
                                        <span className={styles.fm_hd}>{t('school')}</span>
                                        <li><a href="#services">{t('services')}</a></li>
                                        <li><a href="#about">{t('about')}</a></li>
                                        <li><a href="#courses">{t('courses')}</a></li>
                                        <li><a href="#contact">{t('contact')}</a></li>
                                        <li><a href="#contact">{t('apply_now')}</a></li>
                                    </ul>
                                    <ul>
                                        <span className={styles.fm_hd}>{t('address')}</span>
                                        <li><a href="#faq">{t('faq')}</a></li>
                                        <li><a href="#">{t('ppolicy')}</a></li>
                                        <li><a href="#">{t('tconditions')}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <div className={styles.copyright_inner}>
                        {t('copyright')}
                    </div>
                </div>
            </div>
        </footer>
    );
}
