'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './ServiceCards.module.scss';
import { TOurServices } from '../../../types/arrowsApi.type';
import { getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

const ServiceCards = (): JSX.Element => {

    const getData = async()=>{
        const data = await arrowsService().getServiceSectionData();
        setData(data);
    }

    const [data , setData] = useState<Array<TOurServices>>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
        <div className={styles.container}>
            {data.map((item, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.card_titleContainer}>
                        <div className={styles.card_title} style={{ color: item.titleColor }}>
                            {item.name.en}
                        </div>
                        <Image
                            className={styles.card_icon}
                            src={getImageUrl(item.imageUrl)}
                            width={150}
                            height={150}
                            alt={item.name.en}
                        />
                    </div>
                    <div className={styles.card_description}>{item.description.en}</div>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;
