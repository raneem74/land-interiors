import React from 'react';

import Image from 'next/image';

import styles from './HowItWorks.module.scss';
import { getImageUrl } from '../../../utils/utils';

const response = [
    {
        title: 'Development',
        description:
            'Arrows aiming Always to Hire the best brains and the most talented Creatives and Genius Director to Create inspiring Communications built on deep insights from the Market and tailored to an anatomy for each target audience we communicate.',
        color: '#27B5CC',
        imageUrl: 'public/images/1710445292188-Rectangle 24.png',
    },
    {
        title: 'Marketing strategy',
        description:
            'Arrows aiming Always to Hire the best brains and the most talented Creatives and Genius Director to Create inspiring Communications built on deep insights from the Market and tailored to an anatomy for each target audience we communicate.',
        color: '#DB5E00',
        imageUrl: 'public/images/1710445292188-Rectangle 24.png',
    },
    {
        title: 'UI Design',
        description:
            'Arrows aiming Always to Hire the best brains and the most talented Creatives and Genius Director to Create inspiring Communications built on deep insights from the Market and tailored to an anatomy for each target audience we communicate.',
        color: '#51B752',
        imageUrl: 'public/images/1710445292188-Rectangle 24.png',
    },
    {
        title: 'Development',
        description:
            'Arrows aiming Always to Hire the best brains and the most talented Creatives and Genius Director to Create inspiring Communications built on deep insights from the Market and tailored to an anatomy for each target audience we communicate.',
        color: '#DB5E00',
        imageUrl: 'public/images/1710445292188-Rectangle 24.png',
    },
];

const HowItWorks = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>How it’s works</div>

            <div className={styles.cards}>
                {response.map((item, index) => (
                    <>
                        <div className={styles.item} key={index}>
                            <Image
                                src={getImageUrl(item.imageUrl)}
                                alt="image"
                                width={449}
                                height={278}
                                className={styles.imageContainer}
                            />
                            <div className={styles.itemContainer}>
                                <div style={{ color: item.color }}>0.{index + 1}</div>
                                <div style={{ color: item.color }}>{item.title}</div>
                                <div className={styles.description}>{item.description}</div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
