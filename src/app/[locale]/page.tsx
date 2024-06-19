'use server';

import AboutSection from '../../components/homePageComponents/aboutSection/AboutSection';
import BlogsSection from '../../components/homePageComponents/blogsSection/BlogsSection';
import Clients from '../../components/homePageComponents/clients/Clients';
import HomeBanner from '../../components/homePageComponents/homeBanner/HomeBanner';
import ProjectsSection from '../../components/homePageComponents/projectsSection/ProjectsSection';
import ServiceCards from '../../components/homePageComponents/serviceCards/ServiceCards';
import Testimonials from '../../components/homePageComponents/testimonials/Testimonials';
import arrowsService from '../../services/arrowsService';

export default async function Home() {
    // const HomeBannerData = await arrowsService().getHomeBannerData();
    // const ServiceSectionData = await arrowsService().getServiceSectionData();
    // const ClientsData = await arrowsService().getClientsData();
    // const AboutSectionData = await arrowsService().getAboutSectionData();
    // const ProjectSectionData = await arrowsService().getProjectsData();
    // // const TestimonialsData = await arrowsService().getTestimonialsData();
    // const BlogsData = await arrowsService().getBlogsData();

    return (
        <>
            <HomeBanner />
            <ServiceCards />
            <Clients />
            <AboutSection />
            <ProjectsSection />
            <Testimonials />
            <BlogsSection />
        </>
    );
}
