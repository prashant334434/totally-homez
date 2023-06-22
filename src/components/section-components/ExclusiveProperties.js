import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getPropertiesFor } from '../../actions/propertiesActions'
import ExclusivePropertiesBreadCrum from '../global-components/ExclusivePropertiesBreadCrum'
import MobileNav from '../global-components/Mobile-nav'
import SearchBarV2 from './searchBarV2'
import TypePropertyContentExclv from './TypePropertyContentExclv'
import TyepPropertyGrid from '../shop-components/TyepPropertyGrid'
import Footer_v1 from '../global-components/footer'
import CallToActionV1 from '../section-components/call-to-action-v1';
import ExclusivePropertiesTypeGrid from '../shop-components/ExclusivePropertiesTypeGrid'
import MetaData from '../Layout/MetaData'
import { replaceHyphensAndCapitalize } from '../../utils/propertyUtils'

const ExclusiveProperties = () => {
  const capitalizeFirstLetter=(string)=> {
    return string?.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
  }
  const {loading,propertiesFor}=useSelector((state)=>state.propertiesFor)
  const location = useLocation();
  const pathnameParts = location.pathname.split('/');
console.log("exclv")
console.log(pathnameParts)
  const {property_for,property_city}=useParams()
  console.log("property_for",property_for,property_city)
  const dispatch=useDispatch()
  console.log("ExclusiveProperties",propertiesFor)
const  separatedStrings = property_city.split("-");

  useEffect(()=>{
dispatch(getPropertiesFor(separatedStrings[0]))
  },[dispatch])
  return (
    <div>
    {/* <MetaData title={` ${capitalizeFirstLetter(property_type)} For  ${capitalizeFirstLetter(property_for)} In ${replaceHyphensAndCapitalize(property_city)}`+` `+`-`+` `+`Totally Home Real Estate`} metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeFirstLetter(property_type)} For ${capitalizeFirstLetter(property_for)} In Level With World Class Amenities, Amazing Views And Attractive Lifestyle`}/> */}

    <MetaData title={` ${capitalizeFirstLetter("Properties")} For ${capitalizeFirstLetter(separatedStrings[0])} In ${capitalizeFirstLetter(separatedStrings[1])}`+` `+`-`+` `+`Totally Home Real Estate`} metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeFirstLetter("Properties")} For ${capitalizeFirstLetter(property_for)} In Level With World Class Amenities, Amazing Views And Attractive Lifestyle`}/>

<MobileNav/>
<ExclusivePropertiesBreadCrum separatedStrings={separatedStrings} />

<SearchBarV2/>
<TypePropertyContentExclv/>
<ExclusivePropertiesTypeGrid propertyTypes={propertiesFor}/>
<CallToActionV1 />
<Footer_v1 />
</div>  )
}

export default ExclusiveProperties