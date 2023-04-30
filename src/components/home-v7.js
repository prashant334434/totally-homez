import React from 'react';
import Navbar from './global-components/navbar-v4';
import BannerV6 from './section-components/banner-v6';
import Aboutv2 from './section-components/about-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v4';
import BlogSlider from './blog-components/blog-slider-v1';
import Gallery from './section-components/gallery-v1';
import ApartmentV1 from './section-components/apartment-v1';
import VideoV1 from './section-components/video-v1';
import Category from './section-components/category-v1';
import Testimonial from './section-components/testimonial-v3';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BestProper from './section-components/BestProperty';
import BestProperty from './section-components/BestProperty';

import AboutV4 from './section-components/about-v4';

import AboutV5 from './section-components/about-v5';
import BlogT from './blog-components/BlogT';
import ProductSliderV1 from './section-components/product-slider-v1';
import Footer2 from './global-components/Footer2';
import UpcomingProductV1 from './section-components/upcoming-product-v1';
import Video from './section-components/video-v2';
import ProductSlider from './section-components/product-slider-v2';
import TeamAgents from './section-components/TeamAgents';



const Home_V7 = () => {
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2" /> 
        <BannerV6 />
        <BestProperty/>
        {/* <Aboutv2 /> */}
        <Gallery />
        {/* <HomeCrousal/> */}
        <ApartmentV1 CustomClass=" ltn__feature-area section-bg-3 pt-120 pb-90 mb-120---" />

        <UpcomingProductV1 />
        {/* <BestVilla customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---" /> */}
        {/* <ProductSliderV1/> */}
        {/* <BestApartment customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}
        <Video className=' pb-50'/>

        {/* <ProductSliderV1/> */}
        {/* <BestTownhouse customClass="ltn__feature-area section-bg-6 pt-40 pb-50 mb-120---"  />
         */}
        <AboutV4/>

        <ProductSliderV1/>
        {/* <BestPenthouse customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}
        {/* <ProductSliderV1/> */}
        {/* <Banner /> */}
        {/* <Neighbour customClass="ltn__feature-area section-bg-8 pt-120 pb-90 mb-120---"/> */}

 

        <ProductSlider customClass="ltn__feature-area section-bg-4 pt-120 pb-90 mb-120---"/>


        {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
        {/* <ProSlider /> */}
        {/* <Gallery /> */}
        {/* <VideoV1 /> */}
        {/* <Category /> */}
        {/* <Testimonial /> */}
        <AboutV5  customClass='ltn__feature-area section-bg-5 pt-120 pb-90 mb-120---'/>
        <TeamAgents customClass='ltn__feature-area section-bg-1 pt-80  mb-120---' />
        {/* <Testimonial customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/> */}

        <BlogSlider customClass="section-subtitle-2 "/>

        {/* <BlogT customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/> */}
        <CallToActionV1 />
        <Footer2 customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/>
        <Footer />
    </div>
}

export default Home_V7

