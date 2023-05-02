import React from 'react';
import Navbar from './global-components/navbar-v4';
import BannerV6 from './section-components/banner-v6';
import Aboutv2 from './section-components/about-v2';
import Featuresv1 from './section-components/features-v1';
import ProSlider from './section-components/product-slider-v1';
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
import ProductSliderV1 from './section-components/product-slider-v4';
import Footer2 from './global-components/Footer2';
import UpcomingProductV1 from './section-components/upcoming-product-v1';
import Video from './section-components/video-v2';
import ProductSlider from './section-components/product-slider-v2';
import TeamAgents from './section-components/TeamAgents';
import Carousel from './section-components/carousel/Carousel';
import { IMAGES, VIDEOS, LARGE_IMAGES } from "../data/data";

import Banner from './section-components/banner-v2';
import Neighbour from './section-components/neighbour';
import ProductGrid from './shop-components/ProductGrid';
import BestVilla from './section-components/BestVilla';
import CarouselSwiper from './shop-components/CarouselSwiper';
import BestVillaTabs from './section-components/BestVillaTabs';


const Home_V7 = () => {
    const slides = [
        {
          id: 1,
          title: 'Slide 1',
          imageUrl: 'https://placeimg.com/640/480/tech',
        },
        {
          id: 2,
          title: 'Slide 2',
          imageUrl: 'https://placeimg.com/640/480/nature',
        },
        {
          id: 3,
          title: 'Slide 3',
          imageUrl: 'https://placeimg.com/640/480/animals',
        },
      ];
    return <div>
        <Navbar CustomClass="ltn__header-transparent gradient-color-2" /> 
        <BannerV6 />
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12 align-self-center'>
                <BestProperty customClass='ltn__feature-area section-bg-1 pt-80  mb-120---' />
        {/* <Aboutv2 /> */}
        {/* <Gallery /> */}
        <Carousel images={IMAGES} slidesToShow={5} />

        {/* <HomeCrousal/> */}
        <ApartmentV1 CustomClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />
        <BestVilla customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <ProductGrid />

        <ApartmentV1 CustomClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />

        {/* <UpcomingProductV1 /> */}
{  //      <BestVilla customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---" />
}        <ProductSliderV1/>
        {/* <BestApartment customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}
        <Video className=' pb-50'/>
        <ApartmentV1 CustomClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />

        {/* <ProductSliderV1/> */}
        {/* <BestTownhouse customClass="ltn__feature-area section-bg-6 pt-40 pb-50 mb-120---"  />
         */}
        <AboutV4/>
        <ApartmentV1 CustomClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---" />


        <ProductGrid />


        {/* <BestPenthouse customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}
        {/* <ProductSliderV1/> */}
        {/* <Banner /> */}
        {/* <Neighbour customClass="ltn__feature-area section-bg-8 pt-120 pb-90 mb-120---"/> */}

 

        <ProductSlider customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/>
        <ProductGrid />

        {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
        {/* <ProSlider /> */}
        {/* <Gallery /> */}
        {/* <VideoV1 /> */}
        {/* <Category /> */}
        {/* <Testimonial /> */}
        <AboutV5  customClass='ltn__feature-area section-bg-8 pt-120 pb-90 mb-120---'/>
        <TeamAgents customClass='ltn__feature-area section-bg-1 pt-80  mb-120---' />
        {/* <Testimonial customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/> */}

        <BlogSlider customClass="section-subtitle-2 "/>

        {/* <BlogT customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/> */}
        <CallToActionV1 />
        {/* <CarouselSwiper slides={slides} /> */}

        <Footer2 customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/>

                </div>

            </div>

      
        </div>

        <Footer />

    </div>
}

export default Home_V7

