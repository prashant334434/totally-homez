import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesImagesApi } from '../actions/propertiesActions';
import Loader from './Loader/Loader';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { PROPERTY_IMAGES_URL } from '../constants/config';







const NewSlide = () => {
    const [slideIndex, setSlideIndex] = useState(0);
const { loading, propertyImages } = useSelector((state) => state.propertyImages)
const dispatch = useDispatch()

const { id } = useParams()

useEffect(() => {
    dispatch(getPropertiesImagesApi(id))
}, [dispatch])
  return (
    
   
    
    <Carousel>
    {
            propertyImages?.map((item, index)=>(
    <Carousel.Item>
      <img
        className="d-block"
        src={`${PROPERTY_IMAGES_URL}/${item?.img_name}`} // Replace with the actual image URL or path
        alt="First slide"
      />
     
    </Carousel.Item>
            ))}
    </Carousel>
      );
    }
    



export default NewSlide
