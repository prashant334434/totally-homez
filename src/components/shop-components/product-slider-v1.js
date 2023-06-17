import React, { Component, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesImagesApi } from '../../actions/propertiesActions';
import Loader from '../Loader/Loader';
import { PROPERTY_IMAGES_URL } from '../../constants/config';
let publicUrl = process.env.PUBLIC_URL + '/'



const ProductSliderV1 = ({ propertyDetails }) => {
	
	const { loading, propertyImages } = useSelector((state) => state.propertyImages)
	const dispatch = useDispatch()

	const { id } = useParams()

	useEffect(() => {
		dispatch(getPropertiesImagesApi(id))
	}, [dispatch])

	if (loading) {
		return <Loader />
	}


	
	return (
		<div className="ltn__img-slider-area">
			<div className="container-fluid">
				<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
				<Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {propertyImages?.map((item) => (
               <div className="col-lg-12">
			   <div className="ltn__img-slide-item-4">
					   <img className='propertyDetailsImageCsrousel' src={`${PROPERTY_IMAGES_URL}/${item?.img_name}`} alt="Image" />
				   
			   </div>
		   </div>
            ))}
        </Carousel>

					
		
					
				</div>
			</div>
		</div>)
}

export default ProductSliderV1





