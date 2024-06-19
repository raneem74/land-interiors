import React from 'react';

import Image from 'next/image';

import styles from './Services.module.scss';
import { getImageUrl } from '../../../utils/utils';
import Accordion from '../../accordion/Accordion';

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
    servicesTitle: 'What We Do for your Success',
    serviceImageUrl: 'public/images/services.png',
};

const Services = (): JSX.Element => {
    const titleArray = response.servicesTitle.split(' ');

    const firstTwoWords = titleArray.slice(0, 2).join(' ');
    const middleWords = titleArray.slice(2, titleArray.length - 1).join(' ');
    const lastWord = titleArray[titleArray.length - 1];

    return (
        <div className={styles.container}>
            <Image src={getImageUrl(response.serviceImageUrl)} width={726} height={919} alt="image" />
            <div className={styles.servicesContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>SERVICES</div>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <div className={styles.boldTitle}>{firstTwoWords}&nbsp;</div>
                            <div className={styles.normalTitle}>{middleWords}&nbsp;</div>
                        </div>

                        <div className={styles.boldTitle}>{lastWord}</div>
                    </div>
                </div>
                <div>
                    <Accordion title="Production">
                        <div className={styles.accordionContent}>
                            <div>
                                Every frame tells a story and a good story consists of many frames, all of these frames
                                reflect the creative concept. We are addicted to producing kind of artistic video
                                content like fashionable films, artistic videos, and documentaries. Also, we provide
                                video production services from the creative concept to the post production phase where
                                you find your desired output. Including these kinds of output Productions
                                Commercials/TVC Documentaries Digital Video Content
                            </div>
                            <button className={styles.button}>READ MORE</button>
                        </div>
                    </Accordion>
                    <Accordion title="Videography">
                        <div className={styles.accordionContent}>
                            <div>
                                Every frame tells a story and a good story consists of many frames, all of these frames
                                reflect the creative concept. We are addicted to producing kind of artistic video
                                content like fashionable films, artistic videos, and documentaries. Also, we provide
                                video production services from the creative concept to the post production phase where
                                you find your desired output. Including these kinds of output Productions
                                Commercials/TVC Documentaries Digital Video Content
                            </div>
                            <button className={styles.button}>READ MORE</button>
                        </div>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Services;
