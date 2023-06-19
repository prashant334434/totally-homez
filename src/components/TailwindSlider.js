import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import React from 'react';
// import './App.css';

// import icons
import {BsArrowLeft, BsArrowRight,} from 'react-icons/bs';

// import images
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesImagesApi } from '../actions/propertiesActions';
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { PROPERTY_IMAGES_URL } from '../constants/config';

const images = [img1, img2, img3, img4];

function SampleNextArrow({onClick}) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight/>
    </div>
  );
}

function SamplePrevArrow({onClick}) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft/>
    </div>
  );
}
function EmptyArrow({onClick}) {
  return (
    <div></div>
  );
}

function App() {
    const [slideIndex, setSlideIndex] = useState(0);
    const { loading, propertyImages } = useSelector((state) => state.propertyImages)
	const dispatch = useDispatch()

	const { id } = useParams()

	useEffect(() => {
		dispatch(getPropertiesImagesApi(id))
	}, [dispatch])

	if (loading) {
		return <Loader />
	}


 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next)=>setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        }
      }]
  };

  return (
    
   
        <div className="slider pt-50">
      <Slider {...settings}>
          {
            propertyImages.map((item, index)=>(
              <div className={index === slideIndex ? 'slide slide-active': 'slide'} key={index}>
                <img className='carouelImages123' src={`${PROPERTY_IMAGES_URL}/${item?.img_name}`} alt="" />
              </div>
            ))
          }
      </Slider>
        </div>
    
  );
}

export default App;