'use client';
import React from 'react';

import Image from 'next/image';

import styles from './ServicesBanner.module.scss';
import { getImageUrl } from '../../../utils/utils';

const response = {
    imageUrl: 'public/images/Rectangle61.png',
    title: {
        en: 'Media Producation',
        ar: 'ميديا ',
    },
    isVideo: false,
    subTitle: {
        en: 'We help to create  strategies, designing  visuals & development.',
        ar: 'ميديا ميديا',
    },
    description: {
        en: "We work behind the scenes to bring brands to the scene, whether it is a TV commercial. Educational, promotional film, 2D, 3D video, or social media video we got our hands on it.  From identifying the video’s topic to writing scripts, and choosing a cast that best serves the video's purpose. Arrows does all of that from the concept to the final delivery to produce a video that best engages with the targeted audience",
        ar: 'ميديا ميديا',
    },
    subServiceIds: [
        {
            $oid: '65fd972da32e575f6c1cf1d8',
        },
        {
            $oid: '65fd96d2a32e575f6c1cf1d1',
        },
        {
            $oid: '65fc1ccfa791494443595798',
        },
    ],
};

const ServicesBanner = (): JSX.Element => {
    const titleArray = response.title.en.split(' ');
    return (
        <div className={styles.container}>
            <div className={styles.location}>Home / Media Production</div>
            <div className={styles.banner}>
                {response.isVideo ? (
                    <video width="100%" muted autoPlay>
                        <source src={getImageUrl(response.imageUrl)} type="video/mp4" />
                    </video>
                ) : (
                    <>
                        <Image
                            src={getImageUrl(response.imageUrl)}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                            alt="image"
                        />
                        <div className={styles.titleContainer}>
                            <div className={styles.titleContainer_title_secondary}>{titleArray[0]}</div>
                            <div className={styles.titleContainer_title}>
                                {titleArray.slice(1).map((word) => `${word} `)}
                            </div>
                            <button className={styles.titleContainer_button}>GET IN TOUCH</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServicesBanner;
