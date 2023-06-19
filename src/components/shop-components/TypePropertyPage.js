import React, { useEffect, useState } from 'react'
import MobileNav from '../global-components/Mobile-nav'
import GridPage from './GridPage'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Footer from '../global-components/footer';
import Footer_v1 from '../global-components/footer';
import ShopContent from '../section-components/ShopContent';
import SearchBarV1 from '../section-components/search-banner';
import { useDispatch } from 'react-redux';
import { getPropertiesType } from '../../actions/propertiesActions2';
import { useParams } from 'react-router-dom';
import TypePropertyContent from '../section-components/TypePropertyContent';
import { capitalizeWords, getPropertiesTypeUtils, replaceHyphensAndCapitalize } from '../../utils/propertyUtils';
import TyepPropertyGrid from './TyepPropertyGrid';
import Loader from '../Loader/Loader';
import TypeBreadcrums from '../global-components/typeBreadcrums';
import MetaData from '../Layout/MetaData';

const TypePropertyPage = () => {
    const capitalizeFirstLetter=(string)=> {
        return string.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
      }
    const { property_type, property_for, property_city } = useParams()
    console.log(property_type, property_for, property_city)
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log("before api call",propertyTypes)
                const data = await getPropertiesTypeUtils(property_type, property_for, property_city);
                console.log("data22",data)
                console.log("after api call",propertyTypes)
                setPropertyTypes(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    console.log(propertyTypes)
if(loading){
    return <Loader/>
}
  return (
    <div>
              <MetaData title={` ${capitalizeFirstLetter(property_type)} For  ${capitalizeFirstLetter(property_for)} In ${replaceHyphensAndCapitalize(property_city)}`+` `+`-`+` `+`Totally Home Real Estate`} metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeFirstLetter(property_type)} For ${capitalizeFirstLetter(property_for)} In Level With World Class Amenities, Amazing Views And Attractive Lifestyle`}/>

        
      <MobileNav/>
      <TypeBreadcrums property_type={capitalizeWords(property_type)} property_city={capitalizeWords(property_city)} property_for={capitalizeWords(property_for)}/>

      <SearchBarV1/>
      <TypePropertyContent/>
      <TyepPropertyGrid propertyTypes={propertyTypes}/>
      <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default TypePropertyPage
