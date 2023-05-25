//src>components>product-deatils.js

import React, { useEffect } from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BlogGrid from './blog-components/blog-grid';
import ShopGrid_V1 from './shop-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getSingalPropertyDetailsApi } from '../actions/propertiesActions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from './Loader/Loader';
import { useHistory } from "react-router-dom";
import PageForm from './section-components/page-form';
import MobileNav from './global-components/Mobile-nav';
import TownhouseProductGrid from './shop-components/TownhouseProductGrid';
import StickyBarIcon from './shop-components/sticky-iconbar';
import VillaforSale from './global-components/villaforsale';
import ColumnProperty from './global-components/columnproperty';

const BreadCrumbs = () => {
    const { id } = useParams()
    console.log(id)
    const { loading, propertyDetails } = useSelector((state) => state.propertyDetails);
    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {
        dispatch(getSingalPropertyDetailsApi(id))
    }, [dispatch])


    if (loading) {
        return (
            <Loader />
        )
    }
    return <div>
        <MobileNav />
        <VillaforSale propertyDetails={propertyDetails} headertitle="Garden Homes Frond C" customclass="mb-0 pt-100" />
        <ColumnProperty/>
        <TownhouseProductGrid />
        <CallToActionV1 />
       
        <Footer />
       

    </div>
}

export default BreadCrumbs
