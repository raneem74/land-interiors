'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';

import styles from './BlogsList.module.scss';
import { TBlogs } from '../../../types/arrowsApi.type';
import { formatDate, getImageUrl } from '../../../utils/utils';
import arrowsService from '../../../services/arrowsService';

type TProps = {
    BlogsData: Array<TBlogs>;
};


const BlogsList = (): JSX.Element => {

    const getData = async()=>{
        const data = await arrowsService().getBlogsData();
        setData(data);
    }

    const [data , setData] = useState<Array<TBlogs>>();

    const itemsPerPage = 6;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil((data?.length ?? 0) / itemsPerPage);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % (data?.length ?? 0);
        setItemOffset(newOffset);
    };

    const router = useRouter();

    useEffect(() => {
        getData();
    }, []);

    if (!data) return <></>

    return (
        <div className={styles.container}>
            <div className={styles.location}>Home / Blogs</div>
            <div className={styles.banner}>
                <div className={styles.titleContainer}>
                    <div className={styles.titleContainer_title}>Blogs</div>
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

            <div className={styles.cards}>
                {currentItems?.map((blog, index) => (
                    <>
                    {blog.isHighlighted && <div
                            className={styles.blog}
                            key={index}
                            onClick={() => {
                                router.push(`/en/blogs/${blog.createdDate}`);
                            }}>
                            <Image
                                src={getImageUrl(blog.imageUrl)}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt="image"
                            />
                            <div className={styles.blog_type}>{blog.type}</div>
                            <div className={styles.blog_title}>
                                <div className={styles.blog_date}>{formatDate(blog.createdDate)}</div>
                                <div>{blog.title.en}</div>
                            </div>
                            <span className={styles.blog_description}>
                                {blog.shortDescription.en}
                            </span>
                        </div>}
                    </>
                ))}
            </div>

            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={styles.paginationContainer}
                pageClassName={styles.paginationPage}
                activeClassName={styles.paginationPageActive}
            />
        </div>
    );
};

export default BlogsList;
