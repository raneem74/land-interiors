import {
    TAbout,
    TAboutPage,
    TBlogs,
    TClients,
    TFooter,
    THomeBanner,
    TOurServices,
    TProject,
    TTeam,
    TTestimonials,
} from '../types/arrowsApi.type';
import { arrowsSVC } from './api';

const arrowsService = () => {
    const getHomeBannerData = async (): Promise<Array<THomeBanner>> => {
        const { data } = await arrowsSVC().getHomeBannerResponse();
        return data.items;
    };

    const getServiceSectionData = async (): Promise<Array<TOurServices>> => {
        const { data } = await arrowsSVC().getOurServicesResponse();
        return data.items;
    };

    const getClientsData = async (): Promise<Array<TClients>> => {
        const { data } = await arrowsSVC().getClientsResponse();
        return data.items;
    };

    const getAboutSectionData = async (): Promise<TAbout> => {
        const { data } = await arrowsSVC().getAboutUsResponse();
        return data.items[0];
    };

    const getProjectsData = async (): Promise<Array<TProject>> => {
        const { data } = await arrowsSVC().getProjectsResponse();
        return data.items;
    };

    const getTestimonialsData = async (): Promise<Array<TTestimonials>> => {
        const { data } = await arrowsSVC().getTestimonialsResponse();
        return data.items;
    };

    const getBlogsData = async (): Promise<Array<TBlogs>> => {
        const { data } = await arrowsSVC().getBlogsResponse();
        return data.items;
    };

    const getFooterData = async (): Promise<TFooter> => {
        const { data } = await arrowsSVC().getFooterResponse();
        return data.items[0];
    };

    const getAboutPageData = async (): Promise<TAboutPage> => {
        const { data } = await arrowsSVC().getAboutPageResponse();
        return data.items[0];
    };

    const getTeamData = async (): Promise<Array<TTeam>> => {
        const { data } = await arrowsSVC().getTeamResponse();
        return data.items;
    };

    return {
        getHomeBannerData,
        getServiceSectionData,
        getClientsData,
        getAboutSectionData,
        getProjectsData,
        getTestimonialsData,
        getBlogsData,
        getFooterData,
        getAboutPageData,
        getTeamData,
    } as const;
};

export default arrowsService;
