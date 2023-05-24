import React from 'react'
import MobileNav from '../global-components/Mobile-nav'
import GridPage from './GridPage'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Footer from '../global-components/footer';
import Footer_v1 from '../global-components/footer';

const ShopNew = () => {
  return (
    <div>
      <MobileNav/>
      <GridPage/>
      <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default ShopNew