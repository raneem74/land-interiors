'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './AboutSection.module.scss';
import { TAbout } from '../../../types/arrowsApi.type';
import { getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

type TProps = {
    AboutSectionData: TAbout;
};

const AboutSection = (): JSX.Element => {

    const getData = async()=>{
        const data = await arrowsService().getAboutSectionData();
        setData(data);
    }

    const [data , setData] = useState<TAbout>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
    <div className={styles.container}>
        <div className={styles.images}>
            <Image src={getImageUrl(data.imagesUrl[0])} width={575} height={385} alt="about" />
            <Image
                src={getImageUrl(data.imagesUrl[1])}
                width={575}
                height={385}
                alt="about"
                className={styles.images_second}
            />
        </div>
        <div className={styles.content}>
            <div className={styles.content_name}>ABOUT THE COMPANY</div>
            <div className={styles.content_title}>{data.title}</div>
            <div className={styles.content_description}>{data.description}</div>
            <button className={styles.content_button}>READ MORE</button>
        </div>
    </div>
);
}


export default AboutSection;
