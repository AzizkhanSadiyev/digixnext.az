'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import "@/styles/slider.css";
import styles from './slider.module.css';

const partnerImages = [
    'partner_1.png',
    'partner_2.png',
    'partner_3.png',
    'partner_4.png',
    'partner_5.png',
    'partner_6.png',
    'partner_7.png',
    'partner_8.png',
];

export default function Slider() {
    const { t } = useTranslation();
    return (
        <div className={`section_wrap ${styles.wrap_partners}`}>
            <div className={`main_center ${styles.main_center}`}>
                <div className={`${styles.partner_title_info}`}>{t('slider.title')}</div>

                <div className={`sect_body ${styles.sect_body}`}>
                    <Swiper
                        modules={[Autoplay]}
                        className="partners_slider"
                        slidesPerView={6}
                        spaceBetween={24}
                        loop={true}
                        speed={2000}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 6,
                            },
                            768: {
                                spaceBetween: 16,
                                slidesPerView: 4,
                            },
                            560: {
                                spaceBetween: 12,
                                slidesPerView: 3,
                            },
                            0: {
                                spaceBetween: 12,
                                slidesPerView: 2,
                            },
                        }}
                    >
                        {partnerImages.map((images, index) => (
                            <SwiperSlide key={index}>
                                <a href="#" className={`${styles.partners_item}`}>
                                    <div className={`${styles.part_img}`}>
                                        <Image
                                            src={`/assets/images/${images}`}
                                            alt={`Partner ${index + 1}`}
                                            width={150}
                                            height={80}
                                            unoptimized
                                        />
                                    </div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
