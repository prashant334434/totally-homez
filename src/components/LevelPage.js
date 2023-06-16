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
import { capitalizeWords, capitalizeWordsInHyphenatedString, getPropertiesCategoryUtils, getPropertiesLevelUtils, removeHyphensAndCapitalize, replaceHyphensAndCapitalize } from '../utils/propertyUtils';
import VillaforSaleLevel from './global-components/villaForSaleLevel';
import MetaData from './Layout/MetaData';
import LevelBreadcrum from './global-components/LevelBreadcrum';

const LevelPage = () => {
    const capitalizeFirstLetter=(string)=> {
        return string.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
      }
    const id = useParams()
    const { loading:communityloading,  community } = useSelector((state) => state.community);

const {property_city,property_type,property_for,property_level,property_community,property_sub_community}=useParams()
const orignalLevel=property_level?.split("-").join(" ")
const orignalCommunity=property_community?.split("-").join(" ")
const orignalSubCommunity =property_sub_community?.split("-").join(" ")
const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // ... more data
    ];
    const itemsPerPage = 5;

    const [loading, setLoading] = useState(false);
    const [propertyLevel, setPropertyLevel] = useState([])
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [propertyCategory, setpropertyCategory] = useState([])
    // const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [getSubCommunitiesInaCommunity, setGetSubCommunitiesInaCommunity] = useState([])
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getPropertiesCategoryUtils(property_city,property_type,property_for,orignalCommunity,orignalSubCommunity);
                setpropertyCategory(data);
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
        <MetaData title={` ${capitalizeFirstLetter(property_type)} For ${capitalizeFirstLetter(property_for)} In ${capitalizeWordsInHyphenatedString(property_level)}`+` `+`-`+` `+`Totally Home Real Estate`} metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeFirstLetter(property_type)} For ${capitalizeFirstLetter(property_for)} In level With World Class Amenities, Amazing Views And Attractive Lifestyle`}/>
        <MobileNav />
        {/* <VillaforSaleLevel city={capitalizeFirstLetter(property_city)} type={capitalizeFirstLetter(capitalizeFirstLetter(property_type))} for={capitalizeFirstLetter(property_for)} level={capitalizeFirstLetter(property_level)} headertitle="Garden Homes Frond C" customclass="mb-0 pt-100 " /> */}
       <LevelBreadcrum city={capitalizeWords(property_city)} type={capitalizeFirstLetter(capitalizeWords(property_type))} for={capitalizeWords(property_for)} level={replaceHyphensAndCapitalize(property_level)} comm={capitalizeWords(orignalCommunity)} subComm={capitalizeWords(orignalSubCommunity)} />

        <LevelProperties loading={loading} propertyLevel={propertyLevel} />
        <CallToActionV1 />

        <Footer />


    </div>
}

export default LevelPage