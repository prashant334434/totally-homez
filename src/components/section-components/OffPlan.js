import React from 'react'
// import Navbar from './global-components/navbar-v4';
// import Navbar from './global-components/navbar-v4';
import Navbar from '../global-components/navbar';

import PageHeader from '../global-components/page-header';
import ShogGrid from '../shop-components/shop-grid-v1';
import CallToActionV1 from '../section-components/call-to-action-v1';
import Footer_v1 from '../global-components/footer';
import FaqV1 from './faq-v1';
import ApartmentV3 from './apartment-v3';
import CounterV1 from './counter-v1';
import BlogRightSidebarPage from '../blog-right-sidebar';
import BlogUpfront from '../BlogUpfront';
import AboutV1 from './about-v1';
import AboutOffPlan from './AboutOffPlan';
import CounterFeatures from './CounterFeatures';
import Carousel from './carousel/Carousel';
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../../data/data";
import Footer2 from '../global-components/Footer2';
import ArchitechturePlan from "./architecture-plan";
import PaymentPlan from './PaymentPlan';
import BannerV2 from './banner-v2';
import TestimonialV2 from './testimonial-v2';
import Neighbour from './neighbour';
const OffPlan = () => {
  return ( 
  
  <div>
     <div>


     <Navbar CustomClass="ltn__header-transparent gradient-color-2" />

        <AboutOffPlan/>
        <div className='container'>
      </div>
      
           
      
         <BlogUpfront/>
        <CounterFeatures/>
        <ArchitechturePlan/>
        <BlogRightSidebarPage/>
        <CounterV1 customClass="ltn__feature-area section-bg-1"/>
        <ApartmentV3/>
        {/* <ApartmentV2/> */}
        <TestimonialV2 />
        {/* <Neighbour /> */}

        <PaymentPlan/>
        <FaqV1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>

        {/* <BannerV2/> */}

        <ShogGrid />


        <CallToActionV1 />
        <Footer2 customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/>
        <Footer_v1 />
    </div>
  </div>

  )
}

export default OffPlan