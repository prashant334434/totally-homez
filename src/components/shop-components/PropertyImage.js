import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPropertiesImage } from '../../actions/propertiesActions'
import { PROPERTY_IMAGES_URL } from '../../constants/config'

const PropertyImage = ({ id }) => {
    const { loading, propertyImage } = useSelector((state) => state.propertyImage)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPropertiesImage(id))
    }, [dispatch])
    
    return (
        <h1>image goes here </h1>
        
        
        // <img src={`${PROPERTY_IMAGES_URL}/${propertyImage[0]?.img_name}`} alt="#" />
    )
}

export default PropertyImage