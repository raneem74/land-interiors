'use server';

import AboutBanner from '../../../components/aboutPageComponents/aboutBanner/AboutBanner';
import OurTeam from '../../../components/aboutPageComponents/ourTeam/OurTeam';
import Clients from '../../../components/homePageComponents/clients/Clients';
import LetsTalk from '../../../components/servicesPageComponents/letsTalk/LetsTalk';
import arrowsService from '../../../services/arrowsService';

export default async function Page() {
    const AboutData = await arrowsService().getAboutPageData();
    const ClientsData = await arrowsService().getClientsData();
    const TeamData = await arrowsService().getTeamData();

    return (
        <>
            <AboutBanner />
            <OurTeam  />
            <Clients  />
            <LetsTalk />
        </>
    );
}
