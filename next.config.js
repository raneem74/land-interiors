const apiUrl = process.env.apiUrl ;

module.exports = {
    env: {
        apiUrl,
    },
    images: {
        domains: ['localhost'],
    },
    rewrites: async () => ({

        // beforeFiles: [
        //     {
        //         source: '/public/_next/:path*',
        //         destination: `/_next/:path*`,
        //     },
        //     {
        //         source: '/_svc/:path*',
        //         destination: `${apiUrl}/:path*`,
        //     },
        // ],
    }),
};
