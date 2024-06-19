/* eslint-disable import/extensions */
'use client';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { AiFillInstagram } from 'react-icons/ai';

import styles from './HomeBanner.module.scss';
import { THomeBanner } from '../../../types/arrowsApi.type';
import { getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

type TProps = {
    HomeBannerData: Array<THomeBanner>;
};

const HomeBanner = (): JSX.Element => {

    const getData = async()=>{
        const HomeBanner = await arrowsService().getHomeBannerData();
        setHomeBannerData(HomeBanner);
    }

    const [HomeBannerData , setHomeBannerData] = useState<Array<THomeBanner>>();

    useEffect(() => {
        getData();
    }, []);

    const settings = {
        slidesPerView: 1,
        pagination: {
            clickable: true,
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
    };

    const swiperSlideNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef(null) as any;

    const subtitleClassArray = ['orange', 'blue', 'green'];

    if(!HomeBannerData) return <></>

    return (
        <div className={styles.container}>
            <Swiper
                ref={swiperRef}
                modules={[Pagination]}
                {...settings}
                style={{
                    '--swiper-pagination-color': 'white',
                    '--swiper-pagination-bullet-inactive-color': '#999999',
                    '--swiper-pagination-bullet-inactive-opacity': '1',
                    '--swiper-pagination-bullet-size': '16px',
                    '--swiper-pagination-bullet-horizontal-gap': '6px',
                    '--swiper-pagination-bullet-border-radius': '2px',
                    '--swiper-pagination-bullet-width': '30px',
                    '--swiper-pagination-bullet-height': '2px',
                } as CSSProperties }>
                {HomeBannerData.map((item, index) => (
                    <>
                        <SwiperSlide key={index}>
                            {item.isVideo ? (
                                <video
                                    width="100%"
                                    muted
                                    autoPlay
                                    onEnded={() => {
                                        swiperSlideNext();
                                    }}>
                                    <source src={getImageUrl(item.imageUrl)} type="video/mp4" />
                                </video>
                            ) : (
                                <>
                                    <Image
                                        src={getImageUrl(item.imageUrl)}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        style={{ width: '100%', height: 'auto' }}
                                        alt="image"
                                    />
                                    <div className={styles.titleContainer}>
                                        <div className={styles.social}>
                                            <FaFacebook size={18} />
                                            <AiFillInstagram size={18} />
                                            <FaYoutube size={18} />
                                            <FaXTwitter size={18} />
                                        </div>
                                        <div>
                                            <div>
                                                {item.subTitle.split('.').map((sub, index) => (
                                                    <span key={index} className={styles[subtitleClassArray[index % 3]]}>
                                                        {sub}.
                                                    </span>
                                                ))}
                                            </div>
                                            <div className={styles.titleContainer_title}>{item.title}</div>
                                            <button className={styles.titleContainer_button} onClick={() => {}}>
                                                {item.btnText}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeBanner;
