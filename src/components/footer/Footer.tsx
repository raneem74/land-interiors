'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';

import styles from './Footer.module.scss';
import { TFooter } from '../../types/arrowsApi.type';
import arrowsService from '../../services/arrowsService';

const Footer = (): JSX.Element => {


    const getData = async()=>{
        const FooterData =  await arrowsService().getFooterData();
        setFooterData(FooterData);
    }

    const [footerData , setFooterData] = useState<TFooter>();

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <Image src="/images/logo.svg" alt="Arrows" width={159} height={24} />
                    <div className={styles.about}>
                        {footerData?.description ||
                            ' ARROWS is a modern advertising agency offering inspiring creative communications, high-end media productions, and efficient digital marketing performance to top brands, built on modern management standards for the ultimate creative experience.'}
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.title}>Pages</div>
                    <div className={styles.pages}>
                        <div>
                            <div>About</div>
                            <div>Projects </div>
                            <div>Blogs</div>
                            <div>Contact Us </div>
                        </div>
                        <div>
                            <div>Media Production</div>
                            <div>Creative Communications</div>
                            <div>Digital Marketing</div>
                        </div>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.title}>Follow Us</div>
                    <div className={styles.social}>
                        <FaFacebook size={44} color="#E5E7EB" />
                        <Image src={'/images/youtube.svg'} alt="youtube" width={44} height={44} />
                        <Image src={'/images/instagram.svg'} alt="x" width={44} height={44} />
                        <Image src={'/images/x.svg'} alt="x" width={44} height={44} />
                        <Image src={'/images/whatsapp.svg'} alt="x" width={44} height={44} />
                    </div>
                </div>
            </div>

            <div className={styles.divider} />
            <div className={styles.copyright}>© Copyright 2024 by Arrows, All Rights Reserved.</div>
        </div>
    );
};

export default Footer;
