'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Feature from '@/components/FeatureCard/Card';
import Slider from '@/components/SliderComment/slider';
import Stats from '@/components/StatsCard/Card';
import Cta from '@/components/ActionCard/Card';

export default function Page() {


    const { t, i18n } = useTranslation();
    const [ready, setReady] = useState(false);

    useEffect(() => {

        if(i18n.isInitialized) {
            setReady(true);
        } else {
            i18n.on('initialized', () => setReady(true));
        }
    }, [i18n]);

    const stats = [
        {
            "value": "3.4m+",
            "title": "Aylıq unikal istifadəçi"
        },
        {
            "value": "800+",
            "title": "Reklamveren"
        },
        {
            "value": "400+",
            "title": "Unikal brend"
        }
    ];
    const features = [
        {
            "icon": "/assets/icons/feature_1.svg",
            "title": "Tam nəzarət",
            "description": "Kampaniyalarınızı istədiyiniz an idarə edin, büdcənizin necə xərcləndiyini dəqiq görün."
        },
        {
            "icon": "/assets/icons/feature_2.svg",
            "title": "Auditoriya ilə bağ",
            "description": "Mesajınızı düzgün insanlara çatdırın, daha güclü əlaqə qurun və brendinizin təsirini artırın."
        },
        {
            "icon": "/assets/icons/feature_3.svg",
            "title": "Strateji güc",
            "description": "Sadəcə nəticə deyil, uzunmüddətli böyümə üçün ölçülə bilən və dayanıqlı strategiyalar qurun."
        }
    ];
    const ctactions = [
        {
            "cover": "/assets/images/cta_1.png",
            "category": "Bizim Vizyonumuz",
            "title": "Reklamçı ol – rəqəmsal reklamın gücünü kəşf et",
            "subtitle": "Real vaxt analitikası və təhlükəsiz məlumat idarəçiliyi ilə reklam kampaniyalarınızı effektiv idarə edin. Detallı hesabatlarla ROI-ni yüksəldin və hər addımı izləyin.",
            // "description": `<ul>
            //     <li>Real vaxtda analitika və hesabatlar</li>
            //     <li>Təkmilləşdirilmiş məlumat təhlükəsizliyi</li>
            //     <li>Avtomatlaşdırılmış kampaniya idarəetməsi</li>
            //   </ul>`,
            // "button_1": "Yayınçı ol",
            // "button_2": "Daha ətraflı",
            "metric": {
                label: "Neuschäden p.a.",
                value: "263.672",
                delta: "+10.18%",
                deltaType: "up"
            }
        },
        {
            "cover": "/assets/images/cta_2.png",
            "category": "Bizim Vizyonumuz",
            "title": "Yayınçı ol və saytını gəlirli platformaya çevir",
            "subtitle": "Digix platformasına qoşularaq saytında reklam yerləşdir, auditoriyanı genişləndir və əlavə gəlir qazan. İnteqrasiya sürətli, idarəetmə isə asandır.",
            // "description": `<ul>
            //     <li>Müxtəlif reklam formatları ilə gəlir qazan</li>
            //     <li>Auditoriyanı genişləndir və daha çox izləyici cəlb et</li>
            //     <li>Sadə inteqrasiya və real vaxt hesabatları</li>
            //   </ul>`,
            // "button_1": "Yayınçı ol",
            // "button_2": "Daha ətraflı",
            "metric": {
                label: "Neuschäden p.a.",
                value: "263.672",
                delta: "+10.18%",
                deltaType: "up"
            }
        },
        {
            "cover": "/assets/images/cta_3.png",
            "category": "Niyə Digix?",
            "title": "Ən qabaqcıl yerli veb-platforma",
            "subtitle": "Digix platformasına qoşularaq saytında reklam yerləşdir, auditoriyanı genişləndir və əlavə gəlir qazan. İnteqrasiya sürətli, idarəetmə isə asandır.",
            // "description": `<ul>
            //     <li>Eksklüziv açar sözlə hədəfləmə (Azərbaycanda ilk)</li>
            //     <li>Aşağı CPM / CPC / CPV qiymətləri</li>
            //     <li>Qlobal brend təhlükəsizlik alətləri (IAS, DoubleVerify, Moat)</li>
            //     <li>Güclü anti-fraud alqoritmlər</li>
            //     <li>Banner, video, rich-media və mətn reklamlarını idarə etmək üçün vahid panel</li>
            //     <li>Yerli vergi rezidentliyi və ən sərfəli qiymət</li>
            // </ul>`,
            // "button_1": "Yayınçı ol",
            // "button_2": "Daha ətraflı",
            "metric": {
                label: "Neuschäden p.a.",
                value: "263.672",
                delta: "+10.18%",
                deltaType: "up"
            }
        }
    ];


    if(!ready) return null;

    return (
        <div className="section_wrap wrap_container">

            {/* manshet */}
            <div className={`section_wrap ${styles.wrap_main_head}`}>
                <div className="sect_body">
                    <div className={`card_item ${styles.card_item}`}>
                        <div className={`item_content ${styles.item_content}`}>
                            <h1 className={`${styles.item_title} text_center`}>
                                Yayınçılar üçün ağıllı platforma
                            </h1>
                            <div className={`${styles.item_info} text_center`}>
                                Digix – reklamçıların hədəf auditoriyasına daha dəqiq çatması, kampaniyalarını şəffaflıqla idarə etməsi və nəticələrini gücləndirməsi üçün qurulmuş müasir reklam ekosistemidir.
                            </div>
                            <div className={`${styles.btn_sect} btn_sect`}>
                                <a href="#" className={`${styles.btn_item} btn_item primary`}>
                                    <span>Reklama başla</span>
                                </a>
                                <a href="#" className={`${styles.btn_item} btn_item text_default`}>
                                    <span>Daha ətraflı</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* manshet */}

            {/* stats */}
            <div className={`section_wrap ${styles.wrap_stats}`}>
                <div className={`main_center`}>
                    <div className="sect_body">
                        <div className={`${styles.row} row`}>

                            {Array.isArray(stats) &&
                                stats.map((stat, index) => (
                                    <div className={`${styles.col} col`} key={index}>
                                        <div className={`col_in`}>
                                            <Stats key={index}
                                                value={stat.value}
                                                title={stat.title}
                                                tone="white"
                                            />
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
            {/* stats */}

            {/* action */}
            <div className={`section_wrap ${styles.wrap_cta}`}>
                <div className="sect_body">
                    {Array.isArray(ctactions) &&
                        ctactions.map((cta, index) => (
                            <Cta
                                key={`${index}`}
                                cover={cta.cover}
                                metric={cta.metric}
                                category={cta.category}
                                title={cta.title}
                                subtitle={cta.subtitle}
                                description={cta.description}
                                button_1={cta.button_1}
                                button_2={cta.button_2}
                                padding
                                {...(index === 1
                                    ? { layout: 'reverse', tone: 'light', padding: true }
                                    : { layout: 'default', tone: 'light' })}
                            />
                        ))}

                </div>
            </div>
            {/* action */}
            
            {/* slider */}
            <Slider />
            {/* slider */}

            {/* features */}
            <div className={`section_wrap ${styles.wrap_services} ${styles.wrap_features}`}>
                <div className={`main_center`}>
                    <div className={`${styles.sect_header} sect_header text_center`}>
                        <div className={`${styles.sect_title_category} sect_title_category text_center`}>Features </div>
                        <h4 className={`${styles.sect_title} sect_title text_center`}>Reklamçılar üçün üstünlüklərimiz</h4>
                        <p className="sect_info text_center">
                            Digix, reklamçılara yalnız rəqəmləri deyil, real biznes dəyəri qazandıran həllər təqdim edir.
                        </p>
                    </div>
                    <div className="sect_body">
                        <div className={`${styles.row_item}  ${styles.gap_32} row_item gap_32`}>

                            {Array.isArray(features) &&
                                features.map((feature, index) => (
                                    <div className={`${styles.col_item} col_item`} key={index}>
                                        <div className={`${styles.col_in} col_in`}>
                                            <Feature key={index}
                                                title={feature.title}
                                                description={feature.description}
                                                icon={feature.icon}
                                            />
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
            {/* features */}

            {/* Safety */}
            <div className={`section_wrap ${styles.wrap_start}`}>
                <div className={`${styles.main_center} main_center`}>
                    <div className={`${styles.sect_header} sect_header`}>
                        <h4 className={`${styles.sect_title} sect_title text_center`}>Digix-ə qoşul və reklamına başla</h4>
                        <p className="sect_info text_center">
                            Sizi reklamverən və yayımlayıcılardan bir addım ayırır. Sadəcə qeydiyyatdan keç, kampaniyalarını rahatlıqla idarə et, real nəticə əldə et və gəlirlərini artır.
                        </p>
                        <div className={`${styles.btn_sect} btn_sect`}>
                            <a href="#" className={`${styles.btn_item} btn_item primary`} ><span>İndi başla</span></a>
                        </div>
                    </div>
                    <div className={`${styles.start_cover}`}>
                        <img src="/assets/images/start_cover.png" alt="Start" />
                    </div>

                </div>
            </div>
            {/* Safety */}

        </div>
    );
}
