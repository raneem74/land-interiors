export type TApiResponse = {
    count: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: Array<any>;
};

export type THomeBanner = {
    isVideo: boolean;
    imageUrl: string;
    title: string;
    subTitle: string;
    btnText: string;
    btnUrl: string;
};

export type TOurServices = {
    name: {
        en: string;
        ar: string;
    };
    imageUrl: string;
    titleColor: string;
    description: {
        en: string;
        ar: string;
    };
    serviceId: string;
};

export type TClients = {
    imageUrl: string;
    name: string;
};

export type TAbout = {
    imagesUrl: Array<string>;
    title: string;
    description: string;
};

export type TProject = {
    imageUrl: string;
    highlighted: boolean;
    hasVideo: boolean;
    name: string;
    shortDescription: string;
    description: string;
    location: string;
    date: Date;
    title: string;
    client: string;
    industry: string;
    caseStudy: string;
    services: Array<string>;
    subServices: Array<string>;
};

export type TTestimonials = {
    customerName: string;
    imageUrl: string;
    rating: number;
};

export type TBlogs = {
    title: {
        en: string;
        ar: string;
    };
    imageUrl: string;
    isVideo: boolean;
    description: {
        en: string;
        ar: string;
    };
    shortDescription: {
        en: string;
        ar: string;
    };
    createdDate: Date;
    isHighlighted: boolean;
    owner: {
        en: string;
        ar: string;
    };
    type: string;
};

export type TFooter = {
    description: string;
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    whatsAppLink: string;
};

export type TAboutPage = {
    imageUrl: string;
    isVideo: boolean;
    whoWeAre: {
        en: string;
        ar: string;
    };
    aboutUs: {
        en: string;
        ar: string;
    };
    ourGoal: {
        en: string;
        ar: string;
    };
    ourValues: {
        en: string;
        ar: string;
    };
};

export type TTeam = {
    imageUrl: string;
    title: {
        en: string;
        ar: string;
    };
    name: {
        en: string;
        ar: string;
    };
};
