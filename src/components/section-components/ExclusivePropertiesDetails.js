

//src>components>product-deatils.js

import React, { useEffect, useState } from "react";
import PageHeader from "../global-components/page-header";
import ProductSlider from "../shop-components/product-slider-v1";
import ProductDetails from "../shop-components/shop-details";
import CallToActionV1 from "../section-components/call-to-action-v1";
import Footer from "../global-components/footer";
    import ShopGrid_V1 from "../shop-grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
import MobileNav from "../global-components/Mobile-nav";

import TownhouseProductGrid from "../shop-components/TownhouseProductGrid";
import StickyBarIcon from "../shop-components/sticky-iconbar";
import RelatedProperties from "../shop-components/RelatedProperties";
import { PopupButton } from "react-calendly";
import GoogleMap from "../section-components/GoogleMap";
// import TailwindSlider from '../TailwindSlider';
import { getSingalPropertyDetailsApi } from "../../actions/propertiesActions";
import MetaData from "../Layout/MetaData";
import Loader from "../Loader/Loader";
import NewSlide from "../NewSlide";
import Pageform from "./page-form";
import PageHeadExclusive from "../global-components/PageHeadExclusive";
import { convertToLowercase, getExclusivePropertiesTypeUtils, getPropertiesTypeUtils, replaceHyphensWithSpaces } from "../../utils/propertyUtils";
import ExclusiveRelatedProperties from "./ExclusiveRelatedProperties";


const ExclusivePropertiesDetails = () => {
    const [loading2, setLoading2] = useState(false)
    const [relatedProperties, setRelatedProperties] = useState([])
const {property_level}=useParams()
console.log("property_level",property_level)
    console.log("product_details");
  const { id } = useParams();
  console.log("ExclusivePropertiesDetails",id);
  const { loading, propertyDetails } = useSelector(
    (state) => state.propertyDetails
  );
  const dispatch = useDispatch();
  let history = useHistory();
  useEffect(() => {
    dispatch(getSingalPropertyDetailsApi(id));
  }, [dispatch]);
console.log("propertyDetails",propertyDetails)

  useEffect(() => {
    const fetchData = async () => {
        try {
            const {property_type,property_for}=propertyDetails
            console.log("relatedPropertiesApiCall")
            setLoading2(true);
            const data = await getExclusivePropertiesTypeUtils(property_type, property_level);
            console.log("relatedPropertiesApiCall2")

            setRelatedProperties(data)
            setLoading2(false);
          
          
        } catch (error) {
            console.error(error);
            setLoading2(false);
        }
    };

    fetchData();
}, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <MobileNav />
      <MetaData
        title={propertyDetails?.property_seo_title}
        metaDesription={propertyDetails?.property_seo_dsc}
      />
      <div className="parentDiv">
        <div className="">
          {/* <ProductSlider propertyDetails={propertyDetails} className="child1" /> */}
          {/* <Tailwind /> */}
          {/* <TailwindSlider propertyDetails={propertyDetails} className="child1"/> */}
          <NewSlide propertyDetails={propertyDetails} className="child1" />
        </div>
        <div className="child2">
          {/* <div className='leftContent'>
                    <div className='backBtn centerIt' onClick={()=>history.goBack()}>
                        <i class="fas fa-arrow-left colArrow" alt="Arrow Icon"></i>
                        <span className='ml'>Back</span>
                    </div>
                    <div className='section-2'>
                        <div>Stunning Fully Upgraded Villa with Private Pool <br />AED 10,500,000</div>
                        <div className='section-2a'>
                            <div className='section-2a-align'>
                                <i class="flaticon-double-bed"></i>
                                <span>5 Bedrooms</span>
                            </div>
                            <div className='section-2a-align'>
                                <i class="flaticon-home-2"></i>
                                <span>BUA: 3,700 Sq Ft</span>
                            </div>
                            <div className='section-2a-align'>
                                <i class="flaticon-square-shape-design-interface-tool-symbol"></i>
                                <span> Ref No.: LP20774</span>
                            </div>
                        </div>
                    </div>
                </div> */}
          <div className="sideBtns">
            <div className="btn-wrapper go-top leftbtn mt-0 ">
              <PopupButton
                url="https://calendly.com/totally-home-real-estate/30min"
                className="btn theme-btn-1"
                rootElement={document.getElementById("root")}
                text="Book A Viewing"
              />
            </div>
            <div className="btn-wrapper go-top rightBtn mt-0">
              <div className="btn btn-effect-5 theme-btn-1" to="/">
                Contact Agent
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <PageHeadExclusive
        propertyDetails={propertyDetails}
        headertitle="Garden Homes Frond C"
        customclass="mb-0"
      />
      <ProductDetails propertyDetails={propertyDetails} />

      <GoogleMap propertyDetails={propertyDetails} />
      <RelatedProperties />
      <Pageform />
      <CallToActionV1 />
      <Footer />
      <StickyBarIcon /> */}
      <PageHeadExclusive propertyDetails={propertyDetails}/>
      <ProductDetails propertyDetails={propertyDetails} />

      <GoogleMap propertyDetails={propertyDetails} />
      <ExclusiveRelatedProperties propertyDetails={propertyDetails}   />
      <Pageform />
      <CallToActionV1 />
      <Footer />
      <StickyBarIcon />
    </div>
  );
};

export default ExclusivePropertiesDetails;
