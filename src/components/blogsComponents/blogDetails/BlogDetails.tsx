import React from 'react';

import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import styles from './BlogDetails.module.scss';
import { TBlogs } from '../../../types/arrowsApi.type';
import { formatDate, getImageUrl } from '../../../utils/utils';

type TProps = {
    BlogData: TBlogs;
};

const BlogDetails = ({ BlogData }: TProps): JSX.Element => {
    const titleArray = BlogData.title.en.split(' ');

    const titleFirstPart = titleArray.slice(0, 1).join(' ');
    const titleSecondPart = titleArray.slice(1).join(' ');

    return (
        <div className={styles.container}>
            <div className={styles.location}>{`Home / Blogs / ${BlogData.title.en}`}</div>
            <div className={styles.banner}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleContainer_title}>{titleFirstPart}</div>
                    <div className={styles.titleContainer_boldTitle}>{titleSecondPart}</div>
                </div>
                <Image
                    src={getImageUrl(BlogData.imageUrl)}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt="image"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div>{formatDate(BlogData.createdDate)}&nbsp;•&nbsp;</div>
                    <div>{BlogData.owner.en}</div>
                    <div className={styles.share}>
                        <div>Share</div>
                        <FaFacebookF size={25} />
                        <FaInstagram size={25} />
                        <FaXTwitter size={25} />
                        <FaWhatsapp size={25} />
                    </div>
                </div>
                <div className={styles.description}>{BlogData.description.en}</div>
            </div>
        </div>
    );
};

export default BlogDetails;
