//import { Swiper, SwiperSlide } from 'swiper/react';



import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick';
const CarouselSLick = ({ slides }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }, []);

  return (
    <div ref={swiperRef} className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <div key={slide.id} className="swiper-slide">
            <img src={slide.imageUrl} alt={slide.title} />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};


export default CarouselSLick