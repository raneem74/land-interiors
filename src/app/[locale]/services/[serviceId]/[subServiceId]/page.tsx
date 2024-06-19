'use server';

import CreativeWorks from '../../../../../components/servicesPageComponents/createWorks/CreativeWorks';
import DetailsSection from '../../../../../components/subServicePageComponents/detailsSection/DetailsSection';
import Faq from '../../../../../components/subServicePageComponents/faq/Faq';
import HowItWorks from '../../../../../components/subServicePageComponents/howItWorks/HowItWorks';

export default async function Page() {
    return (
        <>
            <DetailsSection />
            <HowItWorks />
            <Faq />
            <CreativeWorks theme="light" />
        </>
    );
}
