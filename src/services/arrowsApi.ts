import { AxiosInstance, AxiosResponse } from 'axios';

import { TApiResponse } from '../types/arrowsApi.type';

const arrowsAPI = (api: AxiosInstance) => {
    const getHomeBannerResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/banners`);

    const getOurServicesResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/ourservices`);

    const getClientsResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/partners`);

    const getAboutUsResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/about-us`);

    const getProjectsResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/projects`);

    const getTestimonialsResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/testimonials`);

    const getBlogsResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/blogs`);

    const getFooterResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/footer`);

    const getAboutPageResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/aboutUs`);

    const getTeamResponse = async (): Promise<AxiosResponse<TApiResponse>> => api.get(`/ourTeam`);

    return {
        getHomeBannerResponse,
        getOurServicesResponse,
        getClientsResponse,
        getAboutUsResponse,
        getProjectsResponse,
        getTestimonialsResponse,
        getBlogsResponse,
        getFooterResponse,
        getAboutPageResponse,
        getTeamResponse,
    } as const;
};

export default arrowsAPI;
