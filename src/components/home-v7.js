import React from 'react';
import Navbar from './global-components/navbar-v4';
import BannerV6 from './section-components/banner-v6';
import Aboutv2 from './section-components/about-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v4';
import BlogSlider from './blog-components/blog-slider-v1';
import Gallery from './section-components/gallery-v1';
import Apartment from './section-components/apartment-v1';
import VideoV1 from './section-components/video-v1';
import Category from './section-components/category-v1';
import Testimonial from './section-components/testimonial-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BestProper from './section-components/BestProperty';
import BestProperty from './section-components/BestProperty';
import BestVilla from './section-components/BestVilla';
import Villa from './section-components/Villa';
import BestApartment from './section-components/BestApartment';
import Apartments from './section-components/Apartment';
import BestPenthouse from './section-components/BestPenthouse';
import Penthouse from './section-components/Penthouse';
import BestTownhouse from './section-components/BestTownhouse';
import Townhouse from './section-components/Townhouse';
import TeamAgents from './section-components/TeamAgents';

const Home_V7 = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2" /> 
        <BannerV6 />
        <BestProperty/>
        {/* <Aboutv2 /> */}
        <Gallery />
        <BestVilla />
        <Villa />
        <BestApartment />
        <Apartments />
        <BestPenthouse />
        <Penthouse />
        <BestTownhouse />
        <Townhouse />
        {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
        {/* <ProSlider /> */}
        {/* <Gallery /> */}
        <Apartment CustomClass="pt-115" />
        {/* <VideoV1 /> */}
        {/* <Category /> */}
        {/* <Testimonial /> */}
        {/* <BlogSlider customClass="section-subtitle-2"/> */}
        <TeamAgents/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V7

