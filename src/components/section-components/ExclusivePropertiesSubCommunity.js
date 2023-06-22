import React, { useEffect, useState } from "react";

import CallToActionV1 from "../section-components/call-to-action-v1";
import Footer from "../global-components/footer";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../Loader/Loader";
import { useHistory } from "react-router-dom";
import PageForm from "../section-components/page-form";
import MobileNav from "../global-components/Mobile-nav";

import SubCommunityColumnProperty from "../global-components/SubCommunityColumn";
import SubCommunityPropertyGrid from "../subCommunityPropertyGrid";
import MetaData from "../Layout/MetaData";
import SubCommunityBreadcrum from "../global-components/SubCommunityBreadcrum";
import {
  capitalizeWords,
  getExclusivePropertiesInaSubCommunityUtils,
  getPropertiesSubCommunity,
  getSubCommunitiesPropertiesUtils,
  replaceHyphensAndCapitalize,
} from "../../utils/propertyUtils";
import ExclusivePropertiesSubCommunityBreadcrum from "../global-components/ExclusivePropertiesSubCommunityBreadcrum";
import SubCommunityExclusivePropertyGrid from "../shop-components/SubCommunityExclusivePropertyGrid";

const ExclusivePropertiesSubCommunity = () => {
  const capitalizeFirstLetter = (string) => {
    return string.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
  };
  const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    // ... more data
  ];
  const itemsPerPage = 5;

  const [loading, setLoading] = useState(false);

  const [loading2, setLoading2] = useState(false);

  const [propertySubCategory, setPropertySubCategory] = useState([]);
  const [getLevelsInASubCommunity, setGetLevelsInASubCommunity] = useState([]);
  const {
    property_for,
    property_city,
    property_community,
    property_type,
    property_subcomm,
  } = useParams();
  const orignalSubCommunity = property_subcomm?.split("-").join(" ");
  const orignalCommunity = property_community?.split("-").join(" ");
  const { loading: communityloading, community } = useSelector(
    (state) => state.community
  );
  const [propertyCategory, setpropertyCategory] = useState([]);

  const [getSubCommunitiesInaCommunity, setGetSubCommunitiesInaCommunity] =
    useState([]);
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getSubCommunitiesPropertiesUtils(
          "dubai",
          property_type,
          property_for,
          orignalSubCommunity,
          orignalCommunity
        );
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
        const data = await getExclusivePropertiesInaSubCommunityUtils(
          property_for,
          orignalSubCommunity
        );
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
    return <Loader />;
  }
  return (
    <div>
                    <MetaData title={` ${capitalizeWords("Properties")} For ${capitalizeWords(property_for)} In ${replaceHyphensAndCapitalize(orignalSubCommunity)}`+`  ` +`-`+` `+` `+ `Totally Home Real Estate`} metaDesription={`Check Our Verified Listing Of Dubai ${capitalizeWords("Properties")} For ${capitalizeWords(property_for)} In ${capitalizeWords(orignalSubCommunity)} With World Class Amenities, Amazing Views And Attractive Lifestyle.`}/>
  <MobileNav />
      <ExclusivePropertiesSubCommunityBreadcrum
        city={"Dubai"}
        type={capitalizeWords("Properties")}
        for={capitalizeWords(property_for)}
        comm={capitalizeWords(orignalCommunity)}
        subcomm={orignalSubCommunity}
      />
      {/* <SubCommunityBreadcrum city={capitalizeWords(property_city)} type={capitalizeWords(property_type)} for={capitalizeWords(property_for)} subComm={capitalizeWords(orignalSubCommunity)}  comm={capitalizeWords(orignalCommunity)} /> */}
      {/* <VillaforSaleSub city={capitalizeFirstLetter(property_city)} type={capitalizeFirstLetter(property_type)} for={capitalizeFirstLetter(property_for)} subComm={capitalizeFirstLetter(orignalSubCommunity)} headertitle="Garden Homes Frond C" customclass="mb-0 pt-100 " /> */}
      <SubCommunityColumnProperty
        subcomm={property_subcomm}
        getLevelsInASubCommunity={getLevelsInASubCommunity}
      />
      <SubCommunityExclusivePropertyGrid propertySubCategory={propertySubCategory} />
      {/* <SubCommunityPropertyGrid propertySubcom={propertySubCategory} /> */}
      <CallToActionV1 />
      <Footer />x
    </div>
  );
};

export default ExclusivePropertiesSubCommunity;
