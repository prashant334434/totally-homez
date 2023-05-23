import React from 'react'
import MobileNav from '../global-components/Mobile-nav'
import Footer_v1 from '../global-components/footer'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Cummunity from './Cummunity';


const GuideLine = () => {
  return (
    <div>
        <MobileNav />
        <Cummunity/>
        <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default GuideLine
