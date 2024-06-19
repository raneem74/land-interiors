import React from 'react';

import styles from './KnowUs.module.scss';

const response = {
    imageUrl: '/images/Rectangle61.png',
    title: {
        en: 'Media Producation',
        ar: 'ميديا ',
    },
    isVideo: true,
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

const KnowUs = (): JSX.Element => {
    const subTitleArray = response.subTitle.en.split(' ');

    const subTitleFirstPart = subTitleArray.slice(0, 4).join(' ');
    const subTitleSecondPart = subTitleArray.slice(4).join(' ');
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>KNOW US BETTER</div>
                <div className={styles.subTitleFirst}>{subTitleFirstPart}</div>
                <div className={styles.subTitleSecond}>{subTitleSecondPart}</div>
            </div>
            <div className={styles.description}>{response.description.en}</div>
        </div>
    );
};

export default KnowUs;
