'use server';

import BlogsList from '../../../components/blogsComponents/blogsList/BlogsList';
import arrowsService from '../../../services/arrowsService';

export default async function Page() {
    // const BlogsData = await arrowsService().getBlogsData();

    return (
        <>
            <BlogsList />
        </>
    );
}
