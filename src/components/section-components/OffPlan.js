import React from 'react'
// import Navbar from './global-components/navbar-v4';
// import Navbar from './global-components/navbar-v4';
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
import NavbarV3 from '../global-components/navbar-v4';
import Footer2 from '../global-components/Footer2';
import ArchitechturePlan from "./architecture-plan";
import PaymentPlan from './PaymentPlan';

const OffPlan = () => {
  return ( 
  
  <div>
     <div>
     <NavbarV3 CustomClass="ltn__header-transparent gradient-color-2" /> 

        <AboutOffPlan/>
        <div className='container'>
      </div>
      
           
      
         <BlogUpfront/>
        <CounterFeatures/>

        <ShogGrid />
        <FaqV1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <BlogRightSidebarPage/>
        <ArchitechturePlan/>
        <CounterV1 customClass="ltn__feature-area section-bg-1"/>

        <ApartmentV3/>
        <PaymentPlan/>
        <CallToActionV1 />
        <Footer2 customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/>
        <Footer_v1 />
    </div>
  </div>

  )
}

export default OffPlan