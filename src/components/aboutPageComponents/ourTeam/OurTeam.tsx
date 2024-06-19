'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './OurTeam.module.scss';
import { TTeam } from '../../../types/arrowsApi.type';
import { getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

type TProps = {
    TeamData: Array<TTeam>;
};

const OurTeam = (): JSX.Element => {

    const getData = async()=>{
        const data = await arrowsService().getTeamData();
        setData(data);
    }

    const [data , setData] = useState<Array<TTeam>>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
    <div className={styles.container}>
        <div className={styles.boldTitle}>Meet our Professional & </div>
        <div className={styles.title}>Creative team behind us</div>

        <div className={styles.cardsContainer}>
            {data.map((item, index) => (
                <div className={styles.card} key={index}>
                    <Image
                        src={getImageUrl(item.imageUrl)}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '331px', height: 'auto' }}
                        alt="image"
                    />
                    <div className={styles.name}>{item.name.en}</div>
                    <div className={styles.title}>{item.title.en}</div>
                </div>
            ))}
        </div>
    </div>
);
}


export default OurTeam;
