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
import { getPropertiesCommunity, getSingalPropertyDetailsApi } from '../actions/propertiesActions';
import { useParams } from 'react-router-dom';
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
import SubCommunityColumnProperty from './global-components/SubCommunityColumn';
import SubCommunityPropertyGrid from './subCommunityPropertyGrid';
import CommunityColumnProperty from './global-components/CommunityColumn';
import CommunityPropertyGrid from './CommunityPropertyGrid';
import { getPropertiesCategoryUtils } from '../utils/propertyUtils';

const CommunityPage = () => {
    const {property_city,property_type,property_for,property_community}=useParams()
    console.log(property_city,property_type,property_for,property_community)
    const orignalCommunity=property_community?.split("-").join(" ")

    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // ... more data
      ];
      const itemsPerPage = 5;
   
    const { loading:ld,  community } = useSelector((state) => state.community);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [propertyCategory, setpropertyCategory] = useState([])
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {
        dispatch(getcommunityApi())
    }, [dispatch])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getPropertiesCategoryUtils(property_city,property_type,property_for,orignalCommunity);
                setpropertyCategory(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    if (ld) {
        return (
            <Loader />
        )
    }
    return <div>
        <MobileNav />
        <VillaforSale  headertitle="Garden Homes Frond C" customclass="mb-0 pt-100 " />
        <CommunityColumnProperty loading={ld} community={community}/>
       
        <CommunityPropertyGrid  propertyCategory={propertyCategory}/>
        <CallToActionV1 />
       
        <Footer />
       

    </div>
}

export default CommunityPage