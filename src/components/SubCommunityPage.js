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
import { getPropertySubCommunityApi, getSingalPropertyDetailsApi } from '../actions/propertiesActions';
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
import SubCommunityColumnProperty from './global-components/SubCommunityColumn';
import SubCommunityPropertyGrid from './subCommunityPropertyGrid';
import { capitalizeWords, getLevelsInASubCommunityUtils, getPropertiesSubCommunityUtils, getSubCommunitiesInaCommunityUtils, replaceHyphensAndCapitalize } from '../utils/propertyUtils';
import VillaforSaleSub from './global-components/villaForSaleSub';
import MetaData from './Layout/MetaData';
import SubCommunityBreadcrum from './global-components/SubCommunityBreadcrum';

const SubCommunityPage = () => {
    const capitalizeFirstLetter=(string)=> {
        return string.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
      }
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // ... more data
    ];
    const itemsPerPage = 5;

    const [loading, setLoading] = useState(false);

    const [loading2, setLoading2] = useState(false);

    const [propertySubCategory, setPropertySubCategory] = useState([])
const [getLevelsInASubCommunity, setGetLevelsInASubCommunity] = useState([])
    const { property_for, property_city, property_community, property_type, property_sub_community } = useParams()
    const orignalSubCommunity = property_sub_community?.split("-").join(" ")
    const orignalCommunity=property_community?.split("-").join(" ")
    const { loading: communityloading, community } = useSelector((state) => state.community);
    const [propertyCategory, setpropertyCategory] = useState([])
    
    const [getSubCommunitiesInaCommunity, setGetSubCommunitiesInaCommunity] = useState([])
    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getPropertiesSubCommunityUtils(property_city, property_type, property_for, orignalSubCommunity,orignalCommunity);
                setGetLevelsInASubCommunity(data);
                setLoading2(false);
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
                setLoading(true);
                const data = await getPropertiesSubCommunityUtils(property_city, property_type, property_for, orignalSubCommunity ,orignalCommunity);
                setPropertySubCategory(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (communityloading || loading) {
        return (
            <Loader />
        )
    }
    return <div>
                <MetaData title={` ${capitalizeWords(property_type)} For ${capitalizeWords(property_for)} In ${replaceHyphensAndCapitalize(orignalSubCommunity)}`+`  ` +`-`+` `+` `+ `Totally Home Real Estate`} metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeWords(property_type)} For ${capitalizeWords(property_for)} In ${capitalizeWords(orignalSubCommunity)} With World Class Amenities, Amazing Views And Attractive Lifestyle.`}/>

        <MobileNav />
        <SubCommunityBreadcrum city={capitalizeWords(property_city)} type={capitalizeWords(property_type)} for={capitalizeWords(property_for)} subComm={capitalizeWords(orignalSubCommunity)}  comm={capitalizeWords(orignalCommunity)} />
        {/* <VillaforSaleSub city={capitalizeFirstLetter(property_city)} type={capitalizeFirstLetter(property_type)} for={capitalizeFirstLetter(property_for)} subComm={capitalizeFirstLetter(orignalSubCommunity)} headertitle="Garden Homes Frond C" customclass="mb-0 pt-100 " /> */}
        <SubCommunityColumnProperty getLevelsInASubCommunity={getLevelsInASubCommunity} />

        <SubCommunityPropertyGrid propertySubcom={propertySubCategory} />
        <CallToActionV1 />

        <Footer />


    </div>
}

export default SubCommunityPage