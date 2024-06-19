'use client';
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';

import styles from './Clients.module.scss';
import { TClients } from '../../../types/arrowsApi.type';
import { getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';


const Clients = (): JSX.Element => {

    const getData = async()=>{
        const data = await arrowsService().getClientsData();
        setData(data);
    }

    const [data , setData] = useState<Array<TClients>>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
        <div className={styles.container}>
            <div>OUR CLIENTS</div>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                className={styles.swiper}
                spaceBetween={30}
                slidesPerView={5}>
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={getImageUrl(item.imageUrl)}
                            width={150}
                            height={100}
                            alt={item.name}
                            className={styles.logo}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Clients;
