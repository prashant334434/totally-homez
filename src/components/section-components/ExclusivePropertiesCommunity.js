

import React, { useEffect, useState } from 'react';

import CallToActionV1 from '../section-components/call-to-action-v1';
import Footer from '../global-components/footer';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { useHistory } from "react-router-dom";
import MobileNav from '../global-components/Mobile-nav';


import CommunityColumnProperty from '../global-components/CommunityColumn';
import CommunityPropertyGrid from '../CommunityPropertyGrid';
import CommunityBreadcrum from '../global-components/CommunityBreadcrum';
import MetaData from '../Layout/MetaData';
import { capitalizeWords, getExclusivePropertiesInaCommunityUtils, getPropertiesCategoryUtils, getSubCommunitiesInaCommunityUtils } from '../../utils/propertyUtils';
import ExclusiveCommunitiesBreadcrum from '../global-components/ExclusiveCommunitiesBreadcrum';
import ExclusivePropertiesCommunityColumn from './ExclusivePropertiesCommunityColumn';
import Product_Details from '../product-details';
import ExclusiveCommunityGrid from './ExclusiveCommunityGrid';

const CommunityPage = () => {
    const capitalizeFirstLetter=(string)=> {
        return string.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
      }
      
    const {property_city,property_type,property_for,property_community}=useParams()
    console.log(property_type,property_for,property_community)
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
                console.log("exclvpropertiesgrid1")
                const data = await getExclusivePropertiesInaCommunityUtils(property_for,orignalCommunity);
                console.log("exclvpropertiesgrid2")

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

    console.log("propertyCategory",propertyCategory)
    return <div>
        <MetaData title={` ${capitalizeWords("Properties")} For ${capitalizeWords(property_for)} In ${capitalizeWords(orignalCommunity)}`+`  ` +`-`+` `+` `+ `Totally Home Real Estate` } metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeWords("Properties")} For ${capitalizeWords(property_for)} In ${capitalizeWords(orignalCommunity)} With World Class Amenities, Amazing Views And Attractive Lifestyle`}/>

        <MobileNav />
        <ExclusiveCommunitiesBreadcrum city={"Dubai"} type={capitalizeWords("Properties")} for={capitalizeWords(property_for)} comm={capitalizeWords(orignalCommunity)}/>
      {/* <CommunityBreadcrum city={capitalizeWords(property_city)} type={capitalizeWords(property_type)} for={capitalizeWords(property_for)} comm={capitalizeWords(orignalCommunity)}/>
        {/* <VillaforSale city={capitalizeFirstLetter(property_city)} type={capitalizeFirstLetter(property_type)} for={capitalizeFirstLetter(property_for)} comm={capitalizeFirstLetter(orignalCommunity)}  headertitle="Garden Homes Frond C" customclass="mb-0 " /> */}
        <ExclusivePropertiesCommunityColumn loading={loading2} getSubCommunitiesInaCommunity={getSubCommunitiesInaCommunity}/>
       
        <ExclusiveCommunityGrid propertyCategory={propertyCategory}/> 
        <CallToActionV1 />
       
        <Footer />
       

    </div>
}

export default CommunityPage