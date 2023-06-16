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
import { getSubCommunitiesInACommunityApi, getcommunityApi } from '../actions/communityAction';
import PaginationComponent from './PaginationComponent';
import BreadCrumProperties from './BreadCrumProperties';
import SubCommunityColumnProperty from './global-components/SubCommunityColumn';
import SubCommunityPropertyGrid from './subCommunityPropertyGrid';
import CommunityColumnProperty from './global-components/CommunityColumn';
import CommunityPropertyGrid from './CommunityPropertyGrid';
import { capitalizeWords, getPropertiesCategoryUtils, getSubCommunitiesInaCommunityUtils } from '../utils/propertyUtils';
import CommunityBreadcrum from './global-components/CommunityBreadcrum';
import MetaData from './Layout/MetaData';

const CommunityPage = () => {
    const capitalizeFirstLetter=(string)=> {
        return string.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
      }
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
    const [loading2, setLoading2] = useState(false);
    const [getSubCommunitiesInaCommunity, setGetSubCommunitiesInaCommunity] = useState([])

    const dispatch = useDispatch()
    let history = useHistory();
   

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


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading2(true);
                const data = await getSubCommunitiesInaCommunityUtils(property_type,property_for,orignalCommunity);
                setGetSubCommunitiesInaCommunity(data);
                setLoading2(false);
            } catch (error) {
                console.error(error);
                setLoading2(false);
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
        <MetaData title={` ${capitalizeWords(property_type)} For ${capitalizeWords(property_for)} In ${capitalizeWords(orignalCommunity)}`+`  ` +`-`+` `+` `+ `Totally Home Real Estate` } metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeWords(property_type)} For ${capitalizeWords(property_for)} In ${capitalizeWords(orignalCommunity)} With World Class Amenities, Amazing Views And Attractive Lifestyle`}/>

        <MobileNav />
      <CommunityBreadcrum city={capitalizeWords(property_city)} type={capitalizeWords(property_type)} for={capitalizeWords(property_for)} comm={capitalizeWords(orignalCommunity)}/>
        {/* <VillaforSale city={capitalizeFirstLetter(property_city)} type={capitalizeFirstLetter(property_type)} for={capitalizeFirstLetter(property_for)} comm={capitalizeFirstLetter(orignalCommunity)}  headertitle="Garden Homes Frond C" customclass="mb-0 " /> */}
        <CommunityColumnProperty loading={loading2} getSubCommunitiesInaCommunity={getSubCommunitiesInaCommunity}/>
       
        <CommunityPropertyGrid  propertyCategory={propertyCategory}/>
        <CallToActionV1 />
       
        <Footer />
       

    </div>
}

export default CommunityPage