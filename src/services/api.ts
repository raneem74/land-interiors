import Axios, { AxiosInstance } from 'axios';

import arrowsAPI from './arrowsApi';

// Common headers for all calls
export const commonHeaders = {
    'Cache-Control': 'no-cache, max-age=0, must-revalidate, no-store',
};

let api: AxiosInstance = Axios.create({
    baseURL: 'uninitialized!',
});

export const initializeAxios = (): void => {
    api = Axios.create({
        baseURL: 'http://localhost:3000/backend',
        headers: {
            ...commonHeaders,
        },
    });

    api.interceptors.request.use(
        async (requestConfig) => {
            const updatedConfig = requestConfig;
            const { headers } = updatedConfig;
            // Attach fingerprint, according to marketplace

            updatedConfig.headers = headers;

            return updatedConfig;
        },
        (error) => Promise.reject(error),
    );

    api.interceptors.response.use(
        async (responseConfig) => responseConfig,
        (error) => {
            if (error.response && error.response.data) {
                if (typeof error.response.data === 'string') {
                    const newData = {
                        error: 'Something went wrong.',
                        info: error.response.data,
                        status: error.response.status,
                    };

                    return Promise.reject(newData);
                }

                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject({ ...error.response.data, status: error.response.status });
            }

            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject({ error: error.message, status: 418 });
        },
    );
};

initializeAxios();

export const apiCore = api;

// --- --- --- --- --- --- SERVICES --- --- --- --- --- ---

export const arrowsSVC = (): ReturnType<typeof arrowsAPI> => arrowsAPI(api);
