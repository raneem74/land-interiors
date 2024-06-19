/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next';
// import { Cairo } from 'next/font/google';

import '../../styles/theme.scss';
import '../../styles/global.scss';
import Header from '../../components/header/Header';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/footer/Footer';
import arrowsService from '../../services/arrowsService';

export const metadata: Metadata = {
    title: 'Arrows',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const FooterData = await arrowsService().getFooterData();

    return (
        <html lang="en">
            <head>
                <link href="https://fonts.cdnfonts.com/css/termina-test" rel="stylesheet" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"></link>
            </head>
            <body>
                <Header />
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
