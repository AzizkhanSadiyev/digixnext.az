'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import '@/styles/slider.css';
import styles from './slider.module.css';

// Datanı özünə uyğun dəyiş
const testimonials = [
  {
    text:
      'The intuitive interface and powerful features make this product a joy to use. Highly recommended!',
    name: 'Breanna Butler',
    role: 'Project Manager',
    avatar: '/assets/images/avatar_comment.png',
    rating: 5,
  },
  {
    text:
      'The intuitive interface and powerful features make this product a joy to use. Highly recommended!',
    name: 'George  Dean',
    role: 'Marketing Manager',
    avatar: '/assets/images/avatar_comment.png',
    rating: 5,
  },
  {
    text:
      'The intuitive interface and powerful features make this product a joy to use. Highly recommended!',
    name: 'Robert Nguyen',
    role: 'Product Manager',
    avatar: '/assets/images/avatar_comment.png',
    rating: 5,
  },
  {
    text:
      'The intuitive interface and powerful features make this product a joy to use. Highly recommended!',
    name: 'Breanna Butler',
    role: 'Project Manager',
    avatar: '/assets/images/avatar_comment.png',
    rating: 5,
  },
  {
    text:
      'The intuitive interface and powerful features make this product a joy to use. Highly recommended!',
    name: 'George  Dean',
    role: 'Marketing Manager',
    avatar: '/assets/images/avatar_comment.png',
    rating: 5,
  },
  {
    text:
      'The intuitive interface and powerful features make this product a joy to use. Highly recommended!',
    name: 'Robert Nguyen',
    role: 'Product Manager',
    avatar: '/assets/images/avatar_comment.png',
    rating: 5,
  },
  // İstəsən daha çox item əlavə et
];

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={styles.star}
        >
          <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 6.9L12 17.8 5.8 20.8l1.6-6.9L2 9.2l7.1-.6L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Slider() {
  const { t } = useTranslation();

  return (
    <div className={`section_wrap ${styles.wrap_testimonials}`}>
      <div className={`main_center ${styles.main_center}`}>
        <div className={`${styles.sect_header} sect_header text_center`}>
          <h4 className={`${styles.sect_title} sect_title text_center`}>
            {t('testimonials.title', 'Haqqımızda nə deyirlər?')}
          </h4>
          <p className={`${styles.sect_info} sect_info text_center`}>
            {t(
              'testimonials.subtitle',
              'Explore the genuine feedback and testimonials from our satisfied users'
            )}
          </p>
        </div>

        <div className={`sect_body ${styles.sect_body}`}>
          <Swiper
            modules={[Autoplay, Navigation]}
            className="testimonials_slider"
            grabCursor
            loop
            speed={700}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.testi-next',
              prevEl: '.testi-prev',
            }}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              1280: { slidesPerView: 3, spaceBetween: 24 },
              992: { slidesPerView: 2, spaceBetween: 20 },
              0: { slidesPerView: 1, spaceBetween: 16 },
            }}
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <article className={styles.card}>
                  <Stars count={item.rating} />
                  <p className={styles.text}>{item.text}</p>

                  <div className={styles.user}>
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className={styles.avatar}
                    />
                    <div className={styles.user_text}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.role}>{item.role}</div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Naviqasiya oxları — ortada, aşağıda */}
          <div className={styles.navWrap}>
            <button className={`testi-prev ${styles.navBtn}`} aria-label="Prev">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <button className={`testi-next ${styles.navBtn}`} aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
