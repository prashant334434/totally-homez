import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about-v4';
import Features from './section-components/features-v1';
import Team from './section-components/team-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import WorkWithUs from './section-components/workwithus';
import JoinUs from './section-components/join-us';
import RightFit from './section-components/right-fit';
import OurCulture from './section-components/our-culture';
import OurPhilosophy from './section-components/our-philosophy';
import ThePerks from './section-components/the-perks';
import RecruitmentProcess from './section-components/recuirtment';
import EmployeeEvent from './section-components/employe-event';
import SellWithUs from './section-components/sellwithus';
import MarketingProperty from './section-components/marketing-property';
import PropertyWorth from './section-components/property-worth';
import PropertyPrepration from './section-components/property-preparation';
import UniqueProperty from './section-components/unique-property';
import BenefitsofListing from './section-components/benefits';
import InnovativeApproach from './section-components/innovativeapproach';
import QualityFocusedCreation from './section-components/qualityfocused';
import HighContent from './section-components/highContent';
import InternetAlone from './section-components/internetalone';
import TakeCareEverything from './section-components/takecareeverything';
import ReadyToSell from './section-components/readytosell';
import MobileNav from './global-components/Mobile-nav';

const ListWithUs = () => {
    return <div>
     <MobileNav />
        <SellWithUs />
        <MarketingProperty/>
        <PropertyWorth/>
        {/* <PropertyPrepration/> */}
        <UniqueProperty/>
        
        <BenefitsofListing  customClass="ltn__feature-area  pt-120 pb-90 mb-120---"/>

        <OurCulture/>
        <OurPhilosophy/>
        <ThePerks />
        <InnovativeApproach />
        <QualityFocusedCreation  customClass="ltn__feature-area  pt-120 pb-90 mb-120---"/>
       {/* <BlogSlider />*/}
        <HighContent/>
        <InternetAlone/>
        <TakeCareEverything/>
        <ReadyToSell />
        <Footer />
    </div>
}

export default ListWithUs

