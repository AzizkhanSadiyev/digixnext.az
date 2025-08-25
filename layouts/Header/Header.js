'use client';

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/app/i18n";
import styles from "./header.module.css";
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
    const { t } = useTranslation();
    const router = useRouter();
    const pathname = usePathname();

    const languages = ["az", "en", "ru"];
    const [langOpen, setLangOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(null);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            const pathLocale = pathname.split('/')[1];
            const storedLang = localStorage.getItem("i18nextLng");

            const selectedLang = languages.includes(pathLocale)
                ? pathLocale
                : (storedLang || "az");

            setCurrentLang(selectedLang);
            i18n.changeLanguage(selectedLang);
            localStorage.setItem("i18nextLng", selectedLang);
        }
    }, [pathname]);

    useEffect(() => {
        const header = document.querySelector("header");
        const main = document.querySelector("main");
        const threshold = 120;
        let isScrolled = false;

        function checkScroll() {
            const scrollY = window.scrollY;
            if(scrollY > threshold && !isScrolled) {
                header?.classList.add("visible_mob");
                main?.classList.add("p_top");
                isScrolled = true;
            } else if(scrollY <= threshold && isScrolled) {
                header?.classList.remove("visible_mob");
                main?.classList.remove("p_top");
                isScrolled = false;
            }
        }

        checkScroll();
        window.addEventListener("scroll", checkScroll);
        return () => {
            window.removeEventListener("scroll", checkScroll);
        };
    }, []);

    const handleLangToggle = () => setLangOpen(!langOpen);
    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        if(menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    const handleLangSelect = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem("i18nextLng", lang);
        setCurrentLang(lang);
        setLangOpen(false);

        const segments = pathname.split('/');
        segments[1] = lang;
        const newPath = segments.join('/');
        router.push(newPath);
    };

    if(!currentLang) return null;



    return (
        <header className={styles.header} id="header">
            <div className="main_center">
                <div className={`${styles.header_top} clearfix`}>
                    <div className={`${styles.logo_sect} clearfix`}>
                        <a href={`/${currentLang}`} className={styles.logo}>
                            <div className={styles.logo_img}></div>
                        </a>
                    </div>

                    <nav className={styles.nav_desk}>
                        <ul className={`${styles.hdr_menu} `}>
                            <li><a href={`/${currentLang}/advertiser`}>{t('advertiser')}</a></li>
                            <li><a href={`/${currentLang}/publisher`}>{t('publisher')}</a></li>
                            <li><a href={`/${currentLang}/ad_formats`}>{t('ad_formats')}</a></li>
                            <li><a href={`/${currentLang}/about`}>{t('about')}</a></li>
                            <li><a href={`/${currentLang}/faq`}> {t('faq')}</a></li>
                            <li><a href={`/${currentLang}/contact`}> {t('contact')}</a></li>
                        </ul>
                    </nav>

                    <div className={`${styles.head_icons} ${styles.desk}`}>
                        <div
                            className={`${styles.lang_sect} ${langOpen ? styles.clicked : ""}`}
                            onClick={handleLangToggle}
                        >
                            <div className={styles.lang_btn}>{currentLang}</div>
                            <ul className={styles.langs}>
                                {languages
                                    .filter((lang) => lang !== currentLang)
                                    .map((lang) => (
                                        <li key={lang}>
                                            <a onClick={() => handleLangSelect(lang)}>{lang}</a>
                                        </li>
                                    ))}
                            </ul>
                        </div>

                        <a href="#contact" className={`${styles.btn_item} ${styles.desk} btn_item white`}>
                            <span>{t('login')}</span>
                        </a>
                        <a href="#contact" className={`${styles.btn_item} ${styles.desk} btn_item primary`}>
                            <span>{t('register')}</span>
                        </a>

                        <div className={`${styles.menu_btn} ${styles.open}`} onClick={handleMenuToggle}></div>
                    </div>
                </div>
            </div>

            <nav className={`${styles.nav_mobile} ${menuOpen ? styles.transformed : ""}`}>
                <div className={styles.head_icons}>
                    <a href="#contact" className={`${styles.btn_item} btn_item white`}>
                        <span>{t('login')}</span>
                    </a>
                    <a href="#contact" className={`${styles.btn_item} btn_item primary`}>
                        <span>{t('register')}</span>
                    </a>
                    <div className={`${styles.menu_btn} ${styles.close}`} onClick={handleMenuToggle}></div>
                </div>
                <div className={styles.mob_body}>
                    <ul className={`${styles.hdr_menu} clearfix`}>
                        <li><a href={`/${currentLang}/advertiser`}>{t('advertiser')}</a></li>
                        <li><a href={`/${currentLang}/about`}>{t('publisher')}</a></li>
                        <li><a href={`/${currentLang}/ad_formats`}>{t('ad_formats')}</a></li>
                        <li><a href={`/${currentLang}/about`}>{t('about')}</a></li>
                        <li><a href={`/${currentLang}/faq`}> {t('faq')}</a></li>
                        <li><a href={`/${currentLang}/contact`}> {t('contact')}</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
