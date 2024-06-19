'use server';

import CreativeWorks from '../../../../components/servicesPageComponents/createWorks/CreativeWorks';
import KnowUs from '../../../../components/servicesPageComponents/knowUs/KnowUs';
import LetsTalk from '../../../../components/servicesPageComponents/letsTalk/LetsTalk';
import Services from '../../../../components/servicesPageComponents/services/Services';
import ServicesBanner from '../../../../components/servicesPageComponents/servicesBanner/ServicesBanner';

export default async function Page() {
    return (
        <>
            <ServicesBanner />
            <KnowUs />
            <Services />
            <CreativeWorks theme="dark" />
            <LetsTalk />
        </>
    );
}
