/* eslint-disable import/extensions */
'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ProjectsSection.module.scss';
import { TProject } from '../../../types/arrowsApi.type';
import { getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

type TProps = {
    ProjectSectionData: Array<TProject>;
};

const ProjectsSection = (): JSX.Element =>{
const getData = async()=>{
        const data = await arrowsService().getProjectsData();
        setData(data);
    }

    const [data , setData] = useState<Array<TProject>>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.content_name}>OUR RECENT PROJECTS</div>
            <div className={styles.content_title}>Every Frame tells a story</div>
            <div className={styles.content_description}>
                A good story consists of many frames and all of these frames reflect the creative concept.
            </div>
            <button className={styles.content_button}>ALL PROJECTS</button>
        </div>
        <Swiper slidesPerView={3} spaceBetween={300} className={styles.swiper} loop>
            {data.map((project, index) => (
                <>
                    {project.highlighted && (
                        <SwiperSlide key={index}>
                            <Image
                                src={getImageUrl(project.imageUrl)}
                                alt="project"
                                width={452}
                                height={563}
                                className={styles.imageContainer}
                            />
                        </SwiperSlide>
                    )}
                </>
            ))}
        </Swiper>
    </div>
);
}


export default ProjectsSection;
