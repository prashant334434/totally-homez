import React from 'react'
import MobileNav from '../global-components/Mobile-nav'
import Footer_v1 from '../global-components/footer'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Cummunity from './Cummunity';
import CommunityGrid from './CommunityGrid';
import CarouselSlider from './Carousel';


const GuideLine = () => {
  return (
    <div>
        <MobileNav />
        <CommunityGrid/>
      

        <Cummunity/>
        <h1>Investment Opportunities 
        </h1>
        <CarouselSlider/>
        <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default GuideLine
