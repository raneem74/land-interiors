/* eslint-disable import/extensions */
'use client';

import React from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './Testimonials.module.scss';

const response = [
    '/images/m1.png',
    '/images/m2.png',
    '/images/m1.png',
    '/images/m2.png',
    '/images/m1.png',
    '/images/m2.png',
];

const Testimonials = (): JSX.Element => (
    <div className={styles.container}>
        <div className={styles.container_title}>Testimonials</div>
        <Swiper slidesPerView={3} spaceBetween={250} loop className={styles.swiper}>
            {response.map((imgUrl, index) => (
                <SwiperSlide key={index}>
                    <Image src={imgUrl} alt="image" width={574} height={343} className={styles.imageContainer} />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export default Testimonials;
