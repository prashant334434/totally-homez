import React, { useEffect, useState } from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BlogGrid from './blog-components/blog-grid';
import ShopGrid_V1 from './shop-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertyLevelApi, getSingalPropertyDetailsApi } from '../actions/propertiesActions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from './Loader/Loader';
import { useHistory } from "react-router-dom";
import PageForm from './section-components/page-form';
import MobileNav from './global-components/Mobile-nav';
import TownhouseProductGrid from './shop-components/TownhouseProductGrid';
import StickyBarIcon from './shop-components/sticky-iconbar';
import VillaforSale from './global-components/villaforsale';
import ColumnProperty from './global-components/columnproperty';
import { getcommunityApi } from '../actions/communityAction';
import PaginationComponent from './PaginationComponent';
import BreadCrumProperties from './BreadCrumProperties';
import LevelProperties from './LevelProperties';
import { getPropertiesLevelUtils } from '../utils/propertyUtils';

const LevelPage = () => {
    const id = useParams()
    const { loading:communityloading,  community } = useSelector((state) => state.community);

const {property_type,property_for,property_level}=useParams()
const orignalLevel=property_level?.split("-").join(" ")
const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // ... more data
    ];
    const itemsPerPage = 5;

    const [loading, setLoading] = useState(false);
    const [propertyLevel, setPropertyLevel] = useState([])
    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {

        dispatch(getcommunityApi())


    }, [dispatch])
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getPropertiesLevelUtils(property_type,property_for,orignalLevel);
                setPropertyLevel(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    if (loading) {
        return (
            <Loader />
        )
    }
    return <div>
        <MobileNav />
        <VillaforSale />
       
         <ColumnProperty loading={loading} community={community}/> 

        <LevelProperties loading={loading} propertyLevel={propertyLevel} />
        <CallToActionV1 />

        <Footer />


    </div>
}

export default LevelPage