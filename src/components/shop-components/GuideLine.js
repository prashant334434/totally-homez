import React, { useEffect } from 'react'
import MobileNav from '../global-components/Mobile-nav'
import Footer_v1 from '../global-components/footer'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Cummunity from './Cummunity';
import CommunityGrid from './CommunityGrid';
import CarouselSlider from './Carousel';
import CommunityCarousel from './communityCarousel';
import CommunityGrid2 from './CommunityGrid2';
import ProductGrid from './ProductGrid';
import AboutV5 from '../section-components/about-v5';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutUsApi } from '../../actions/aboutUsActions';
import OurMission from '../section-components/our-mission';
import OurStory from '../section-components/our-story';
import CommunityContentSection from '../section-components/CommunityContentSection';


const GuideLine = () => {
  const {loading,about}=useSelector((state)=>state.about)

  const dispatch=useDispatch()

  useEffect(()=>{
      dispatch(getAboutUsApi())
  },[dispatch])
  return (
    <div>
        <MobileNav />
        <CommunityGrid/>
      
        {/* <AboutV5 loading={loading} aboutUsData={about} /> */}
        {/* <OurMission loading={loading} aboutUsData={about}/> */}
        <CommunityContentSection loading={loading} aboutUsData={about}/>

        <Cummunity/>
        
        <CommunityCarousel/>
        <ProductGrid />
        <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default GuideLine
