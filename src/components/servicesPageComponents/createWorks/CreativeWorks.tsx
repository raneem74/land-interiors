'use client';
/* eslint-disable import/extensions */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import clsx from 'clsx';

import styles from './CreativeWorks.module.scss';
import { getImageUrl } from '../../../utils/utils';

type TProps = {
    theme: 'dark' | 'light';
};

const response = [
    'public/images/Rectangle61.png',
    'public/images/Rectangle61.png',
    'public/images/Rectangle61.png',
    'public/images/Rectangle61.png',
];

const CreativeWorks = ({ theme }: TProps): JSX.Element => {
    const settings = {
        slidesPerView: 3,
        spaceBetween: 295,
        pagination: {
            clickable: true,
            // eslint-disable-next-line prettier/prettier
            type: "progressbar" as const,
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
    };

    return (
        <div className={styles.container} style={{ backgroundColor: theme === 'dark' ? 'black' : 'white' }}>
            <div className={styles.title}>AWESOME WORKS</div>
            <div className={styles.subTitle} style={{ color: theme === 'dark' ? 'white' : 'black' }}>
                Our Creative Works.
            </div>

            <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                {...settings}
                className={clsx(
                    styles.swiper,
                    { [styles.light]: theme === 'light' },
                    { [styles.dark]: theme === 'dark' },
                )}>
                {response.map((item, index) => (
                    <>
                        <SwiperSlide key={index}>
                            <Image
                                src={getImageUrl(item)}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '626px', height: 'auto' }}
                                alt="image"
                            />
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </div>
    );
};

export default CreativeWorks;
