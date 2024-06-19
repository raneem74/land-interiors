'use server';

import arrowsService from '../../../../services/arrowsService';
import BlogDetails from '../../../../components/blogsComponents/blogDetails/BlogDetails';

export default async function Page({ params }: { params: { blogId: string } }) {
    const { blogId } = params;
    // const BlogsData = await arrowsService().getBlogsData();

    return (
        <>
            {/* //TODO : get by id */}
            {/* <BlogDetails BlogData={BlogsData[1]} /> */}
        </>
    );
}
