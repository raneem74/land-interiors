'use client';
import React from 'react';

import Image from 'next/image';

import styles from './Projects.module.scss';

// const response = [];

const Projects = (): JSX.Element => {
    return (
        <div className={styles.container}>
            <div className={styles.location}>Home / Projects</div>
            <div className={styles.banner}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleContainer_title}>Projects</div>
                </div>
                <Image
                    src="/images/background.jpeg"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="image"
                />
            </div>
        </div>
    );
};

export default Projects;
