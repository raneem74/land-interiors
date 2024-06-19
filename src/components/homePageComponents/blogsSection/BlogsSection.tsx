'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import styles from './BlogsSection.module.scss';
import { TBlogs } from '../../../types/arrowsApi.type';
import { formatDate, getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

type TProps = {
    BlogsData: Array<TBlogs>;
};

const BlogsSection = (): JSX.Element => {

    const getData = async()=>{
        const data = await arrowsService().getBlogsData();
        setData(data);
    }

    const [data , setData] = useState<Array<TBlogs>>();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.header_title}>latest Blogs from our agency</div>
                <button className={styles.header_button}>All Articles</button>
            </div>
            <div className={styles.cards}>
                {data.map((blog, index) => (
                    <>
                        {blog.isHighlighted && (
                            <div className={styles.blog} key={index}>
                                <Image
                                    src={getImageUrl(blog.imageUrl)}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }}
                                    alt="image"
                                />
                                <div className={styles.blog_title}>
                                    <div className={styles.blog_date}>{formatDate(blog.createdDate)}</div>
                                    <div>{blog.title.en}</div>
                                </div>
                            </div>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default BlogsSection;
