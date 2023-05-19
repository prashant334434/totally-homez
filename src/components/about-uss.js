import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV5 from './section-components/about-v5';
import ServiceV1 from './section-components/service-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import OurStory from './section-components/our-story';
import OurMission from './section-components/our-mission';
import OurPassion from './section-components/our-Passion';
import OurVision from './section-components/our-vision';
import OurValues from './section-components/Our-values';
import OurApproach from './section-components/our-approach';
import OurTeam from './section-components/our-team';

const aboutUs = () => {
    return <div>
        <Navbar />
        <AboutV5 />
        <OurStory/>
        <OurMission/>
        <OurPassion/>
        <OurVision/>
        <OurValues/>
        <ServiceV1 />
        <OurApproach/>
        <OurTeam/>
       {/* <BlogSlider sectionClass="pt-120" />*/}
        <CallToActionV1 />
        <Footer />
    </div>
}

export default aboutUs
