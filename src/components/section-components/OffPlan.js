import React from 'react'
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

const OffPlan = () => {
  return ( <div>
     <div>
        <Navbar />
        <AboutOffPlan/>
        <BlogUpfront/>
        <CounterFeatures/>

        <ShogGrid />
        <FaqV1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <BlogRightSidebarPage/>
        <CounterV1 customClass="ltn__feature-area section-bg-1"/>

        <ApartmentV3/>
        <CallToActionV1 />
        <Footer_v1 />
    </div>
  </div>

  )
}

export default OffPlan