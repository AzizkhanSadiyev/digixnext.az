'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './header.module.css'; // kendi stil dosyana göre

export default function LanguageSwitcher() {
    const router = useRouter();
    const { locale, locales, pathname, query, asPath } = router;

    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(locale || 'az');

    const handleLangToggle = () => {
        setLangOpen(!langOpen);
    };

    const handleLangSelect = (lang) => {
        setCurrentLang(lang);
        setLangOpen(false);
        localStorage.setItem('lang', lang);
        router.push({ pathname, query }, asPath, { locale: lang });
    };

    useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if(storedLang && storedLang !== locale) {
            router.push({ pathname, query }, asPath, { locale: storedLang });
        }
    }, []);

    const availableLangs = locales?.filter((lang) => lang !== currentLang) || [];

    return (
        <div
            className={`${styles.lang_sect} ${langOpen ? styles.clicked : ''}`}
            onClick={handleLangToggle}
        >
            <div className={styles.lang_btn}>{currentLang}</div>
            <ul className={styles.langs}>
                {availableLangs.map((lang) => (
                    <li key={lang}>
                        <a onClick={() => handleLangSelect(lang)}>{lang}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
