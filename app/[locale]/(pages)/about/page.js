'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import styles from './page.module.css';

import Stats from '@/components/StatsCard/Card';
import Services from '@/components/AdvantCard/Card';
import Cta from '@/components/ActionCard/Card';
import Levels from '@/components/ServiceCard/Card';


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
    const services = [
        {
            "icon": "/assets/icons/icon_service_1.svg",
            "title": "Media",
            "description": "Dinamik reklamlar, rich-media və OLV formatları ilə auditoriyaya çat."
        },
        {
            "icon": "/assets/icons/icon_service_2.svg",
            "title": "Data",
            "description": "Demoqrafik, davranış və açar sözlə hədəflənmiş reklam imkanları."
        },
        {
            "icon": "/assets/icons/icon_service_3.svg",
            "title": "Supply & Integrations",
            "description": "300+ yerli sayt və DV360, Meta, TikTok, Google kimi qlobal platformalarla inteqrasiya."
        },
        {
            "icon": "/assets/icons/icon_service_4.svg",
            "title": "DOOH Platform",
            "description": "Açıq hava reklamlarında ölçmə, izləmə və hədəfləmə imkanları."
        },
        {
            "icon": "/assets/icons/icon_service_5.svg",
            "title": "Qabaqcıl Analitika",
            "description": "Kampaniyaların qruplaşdırılmış analitikası və real vaxtda performans monitorinqi."
        },
        {
            "icon": "/assets/icons/icon_service_6.svg",
            "title": "Çapraz-Kanal Retargeting",
            "description": "LED ekranlar və veb istifadəsini birləşdirərək vahid reklam yolçuluğu yaradın."
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
    const monitors = [
        {
            "img": "/assets/images/monitor_1.png",
            "title": "Real vaxt izləmə",
            "info": "LED monitorlar vasitəsilə hərəkəti, izləyici sayını və reklam görünməsini anında ölçün."
        },
        {
            "img": "/assets/images/monitor_2.png",
            "title": "Vizuallaşdırılmış hesabatlar",
            "info": "Dashboard üzərindən nəticələri aydın qrafiklər və diaqramlarla izləyin."
        },
        {
            "img": "/assets/images/monitor_3.png",
            "title": "Auditoriya analizi",
            "info": "Smart kameralar və routerlər vasitəsilə auditoriyanın davranışlarını öyrənin."
        },
        {
            "img": "/assets/images/monitor_4.png",
            "title": "Performans göstəriciləri",
            "info": "GRP, OTS kimi əsas metriklərlə kampaniyalarınızın effektivliyini izləyin."
        },
        {
            "img": "/assets/images/monitor_5.png",
            "title": "Media izləmə",
            "info": "Brendiniz haqqında xəbərləri izləyin və WhatsApp vasitəsilə anında bildirişlər alın."
        }
    ];
    const levels = [
        {
            "title": "Proqrammatik Reklam (RTB)",
            "info": "Real vaxtda avtomatlaşdırılmış reklam alışı."
        },
        {
            "title": "Rəqəmsal Kreativ İstehsal",
            "info": "Banner, video və rich-media hazırlanması."
        },
        {
            "title": "DOOH Reklam (Outdoor)",
            "info": "LED və açıq hava ekranlarında reklam."
        },
        {
            "title": "Reklam İdarəsi və Analitika",
            "info": "Kampaniyaların performans izlənməsi."
        },
        {
            "title": "DMP (Data Management Platform)",
            "info": "Məlumatların idarəsi və hədəflənməsi."
        },
        {
            "title": "Meta, TikTok, DV360 dəstəyi",
            "info": "Qlobal platformalarla tam inteqrasiya."
        },
        {
            "title": "Media Monitoring",
            "info": "Brendiniz barədə medianı izləyin."
        },
        {
            "title": "Universal Pixel",
            "info": "Çoxkanallı izləmə və dəqiq hesabatlar."
        },
        {
            "title": "Çapraz-Kanal Retargeting",
            "info": "LED ekran + sosial media reklamı birləşməsi."
        },
        {
            "title": "Outdoor izləmə və sayma",
            "info": "Ətraf auditoriyanın real vaxt ölçümü."
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
                                Azərbaycanın proqramatik reklam platforması
                            </h1>
                            <div className={`${styles.item_info} text_center`}>
                                Digix – reklamverənlər və yayınçıları bir araya gətirən, şəffaflıq, təhlükəsizlik və effektivlik üzərində qurulmuş müasir platformadır.
                            </div>
                            <div className={`${styles.btn_sect} btn_sect`}>
                                <a href="#" className={`${styles.btn_item} btn_item primary`}>
                                    <span>İndi başlayın</span>
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
                                    ? { layout: 'reverse', tone: 'dark', padding: true }
                                    : { layout: 'default', tone: 'light' })}
                            />
                        ))}

                </div>
            </div>
            {/* action */}

            {/* services */}
            <div className={`section_wrap ${styles.wrap_services}`}>
                <div className={`main_center`}>
                    <div className={`${styles.sect_header} sect_header`}>
                        <div className="sect_title_category ">Həll yığını</div>
                        <h1 className={`${styles.sect_title} sect_title`}>Hər şey miqyaslama üçün lazım olan</h1>
                        <p className="sect_info ">
                            Uğurunuzu artırmaq üçün çevik həllər təqdim edirik – real vaxt analitikası, inteqrasiya olunmuş ekosistem və tam miqyaslı izləmə ilə.
                        </p>
                    </div>
                    <div className="sect_body">
                        <div className={`${styles.row_item}  ${styles.gap_32} row_item gap_32`}>

                            {Array.isArray(services) &&
                                services.map((service, index) => (
                                    <div className={`${styles.col_item} col_item`} key={index}>
                                        <div className={`${styles.col_in} col_in`}>
                                            <Services key={index}
                                                title={service.title}
                                                description={service.description}
                                                icon={service.icon}
                                            />
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>
                </div>
            </div>
            {/* services */}

            {/* Safety */}
            <div className={`section_wrap ${styles.wrap_safety}`}>
                <div className={`main_center`}>
                    <div className={`${styles.safety_item}`}>
                        <h4 className={`${styles.safety_title} `}>Brand Safety & Security</h4>
                        <p className={`${styles.safety_info} `}>
                            Digix Azərbaycanda IAS və DoubleVerify tətbiq edən ilk platformadır. Yüksək təhlükəsizlik standartları ilə brend reputasiyanızı hər reklam yerləşdirilməsində qoruyuruq
                        </p>
                    </div>
                </div>
            </div>
            {/* Safety */}

            {/* Levels */}
            <div className={`section_wrap ${styles.wrap_levels}`}>
                <div className={`main_center`}>
                    <div className={`${styles.flex_body} gap_32`}>
                        <div className={`${styles.sect_header} sect_header`}>
                            <div className={`${styles.sect_title_category} sect_title_category`}>Digix</div>
                            <h4 className={`${styles.sect_title} sect_title`}>Xidmətlərimiz</h4>
                            <p className="sect_info ">
                                Digix reklam platforması ilə biznesinizi böyütmək üçün ən müasir rəqəmsal həlləri təqdim edirik.
                            </p>
                        </div>
                        <div className={`${styles.sect_body} sect_body`}>
                            <div className={`${styles.row_item} ${styles.gap_32} row_item gap_32`}>

                                {Array.isArray(levels) &&
                                    levels.map((level, index) => (
                                        <div className={`${styles.col_item} col_item`} key={index}>
                                            <div className={`${styles.col_in} col_in`}>
                                                <Levels key={index}
                                                    title={level.title}
                                                    info={level.info}
                                                />
                                            </div>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Levels */}

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
