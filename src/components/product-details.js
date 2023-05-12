import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BlogGrid from './blog-components/blog-grid';
import ShopGrid_V1 from './shop-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getSingalPropertyDetailsApi } from '../actions/propertiesActions';

const Product_Details = () => {
    const {propertyDetails}=useSelector((state)=>state.propertyDetails);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getSingalPropertyDetailsApi())
    },[dispatch])
    return <div>
        <Navbar />
        <ProductSlider />

        <PageHeader propertyDetails={propertyDetails} headertitle="Garden Homes Frond C" customclass="mb-0" />
        <ProductDetails propertyDetails={propertyDetails} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Product_Details

