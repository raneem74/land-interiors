'use client'
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './AboutBanner.module.scss';
import { getImageUrl } from '../../../utils/utils';
import { TAboutPage } from '../../../types/arrowsApi.type';
import arrowsService from '../../../services/arrowsService';


const AboutBanner = (): JSX.Element =>{

    const getData = async()=>{
        const data = await arrowsService().getAboutPageData();
        setData(data);
    }

    const [data , setData] = useState<TAboutPage>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
    <div className={styles.container}>
        <div className={styles.location}>Home / About Us</div>
        <div className={styles.banner}>
            {data.isVideo ? (
                <video width="100%" muted autoPlay>
                    <source src={getImageUrl(data.imageUrl)} type="video/mp4" />
                </video>
            ) : (
                <>
                    <Image
                        src={getImageUrl(data.imageUrl)}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt="image"
                    />
                    <div className={styles.titleContainer}>
                        <div className={styles.titleContainer_title}>About Us</div>
                    </div>
                </>
            )}
        </div>

        <div className={styles.content}>
            <div className={styles.row}>
                <div className={styles.content_title}>Who We Are ?</div>
                <div className={styles.content_description}>{data.whoWeAre.en}</div>
            </div>
            <div className={styles.row}>
                <div>
                    <div className={styles.content_subTitle}>About Us</div>
                    <div>{data.aboutUs.en}</div>
                </div>
                <div>
                    <div className={styles.content_subTitle}>Our Goals</div>
                    <div>{data.ourGoal.en}</div>
                </div>
                <div>
                    <div className={styles.content_subTitle}>Our Values</div>
                    <div>{data.ourValues.en}</div>
                </div>
            </div>
        </div>
    </div>
);
}


export default AboutBanner;
