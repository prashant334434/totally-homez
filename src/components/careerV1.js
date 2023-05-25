import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about-v4';
import Features from './section-components/features-v1';
import Team from './section-components/team-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import WorkWithUs from './section-components/workwithus';
import JoinUs from './section-components/join-us';
import RightFit from './section-components/right-fit';
import OurCulture from './section-components/our-culture';
import OurPhilosophy from './section-components/our-philosophy';
import ThePerks from './section-components/the-perks';
import RecruitmentProcess from './section-components/recuirtment';
import EmployeeEvent from './section-components/employe-event';
import MobileNav from './global-components/Mobile-nav';
import { useDispatch, useSelector } from 'react-redux';
import { getCarrerApi } from '../actions/careerActions';

const CareerV1 = () => {
    const {career}=useSelector((state)=>state.career)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCarrerApi())
    }, [dispatch])
    return <div>
        <MobileNav />
        <WorkWithUs careerData={career} />
        <JoinUs />
        <RightFit customClass="ltn__feature-area  pt-120 pb-90 mb-120---" />

        <OurCulture />
        <OurPhilosophy />
        <ThePerks />
        <Testimonial />
        {/* <BlogSlider />*/}
        <RecruitmentProcess />
        <EmployeeEvent />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default CareerV1

