import React, { useEffect, useState } from 'react'
import { getExclusivePropertiesTypeUtils } from '../../utils/propertyUtils';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { currentTeamMember } from "../../actions/teamActions";
import { useDispatch } from 'react-redux';
import Carousel from 'react-multi-carousel';
import { PROPERTY_IMAGES_URL, TEAM_API_URL } from '../../constants/config';

const ExclusiveRelatedProperties = ({propertyDetails}) => {
    const dispatch=useDispatch()
    const history=useHistory()
    const [loading2, setLoading2] = useState(false)
    const [relatedProperties, setRelatedProperties] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {property_type,property_for}=propertyDetails
                console.log("relatedPropertiesApiCall")
                setLoading2(true);
                const data = await getExclusivePropertiesTypeUtils(property_type, property_for, "dubai");
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
    const url = (titleName) => {
        return titleName?.split(" ")?.join("-")?.toLowerCase();
      };
    
      const handleLinkClick = (id, name) => {
        console.log("agentIdHome", id);
    
        dispatch(currentTeamMember(id));
        history.push(`/team/${name.toLowerCase().split(" ").join("-")}`);
      };  return (
    <div>
    <div>
      <div id="townhouseRef" tabindex="3" className="ltn__product-slider-area ltn__product-gutter pt-40  plr--7">
        <div className="container-fluid">
          <div className="row  slick-arrow-1">
          <h2>Related Properties</h2>

            <Carousel
              additionalTransfrom={0}
              arrows
              centerMode={false}
              containerClass="carousel-container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 3,
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 2,
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                },
              }}
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
               {relatedProperties?.map((item) => (
                 <div key={item?.id} className="col-lg-12">
                 <div className="ltn__product-item ltn__product-item-4 text-center---">
                   <div className="product-img go-top">
                   {item?.property_level!=="" ? (
                                    <Link
                                      to={`/properties/${url(
                                        item?.property_community
                                      )}/${url(
                                        item?.property_sub_community
                                      )}/properties-for-${url(
                                        item?.property_for
                                      )}-${url(
                                        item?.property_level
                                      )}/th${item?.id}`}
                                    >
                         <img
                           src={`${PROPERTY_IMAGES_URL}/${item?.img_name}`}
                           alt="#"
                         />
                       </Link>
                     ) : (
                      <Link
                                      to={`/properties/${url(item?.property_community)}/${url(
                                        item?.property_sub_community
                                      )}/th${item?.id}`}
                                    >
                         <img
                           src={`${PROPERTY_IMAGES_URL}/${item?.img_name}`}
                           alt="#"
                         />
                       </Link>
                     )}
                     <div className="product-badge">
                       <ul>
                         <li className="sale-badge bg-green">
                           {item?.property_for}
                         </li>
                       </ul>
                     </div>
                   </div>
                   <div className="product-info">
                     <div className="product-price">
                     {item?.property_level!=="" ? (
                                    <Link
                                      to={`/properties/${url(
                                        item?.property_community
                                      )}/${url(
                                        item?.property_sub_community
                                      )}/properties-for-${url(
                                        item?.property_for
                                      )}-${url(
                                        item?.property_level
                                      )}/th${item?.id}`}
                                    >
                             <h3
                               dangerouslySetInnerHTML={{
                                 __html: item?.property_name,
                               }}
                               className="product-title go-top"
                             />
                           </Link>
                         ) : (
                          <Link
                                      to={`/properties/${url(item?.property_community)}/${url(
                                        item?.property_sub_community
                                      )}/th${item?.id}`}
                                    >
                             <h3
                               dangerouslySetInnerHTML={{
                                 __html: item?.property_name,
                               }}
                               className="product-title go-top"
                             />
                           </Link>
                         )}
                       <div className="price_div">
                         <span>
                           AED <br /> {item?.property_price}
                         </span>
                       </div>
                     </div>
                     <div className="product-description">
                       <p>
                         {item?.property_community}{" "}- {" "}
                         {item?.property_sub_community}
                       </p>
                       <br></br>
                       <small>Ref No.{item?.property_ref_no}</small>
                     </div>
                     <div>
                       <center>
                         <ul className="ltn__list-item-2 ltn__list-item-2-before">
                           <li>
                             <span>
                               {" "}
                               <i className="flaticon-bed" />{" "}
                               {item?.property_no_of_bedroom}
                             </span>
                           </li>
                           <li>
                             <span>
                               <i className="flaticon-clean" />{" "}
                               {item?.property_no_of_bathroom}{" "}
                             </span>
                           </li>
                           <li>
                             <span>
                               {" "}
                               <i className="flaticon-square-shape-design-interface-tool-symbol" />{" "}
                               {item?.property_sq_ft} sqft
                             </span>
                           </li>
                         </ul>
                       </center>
                     </div>
                   </div>
                   <div className="product-info-bottom">
                     <div className="real-estate-agent wcallFlex mt-10">
                       <div className="agent-img go-top">
                         <Link to="/team-details">
                           <img
                             src={`${TEAM_API_URL}/${item?.path}`}
                             alt="Image"
                           />
                         </Link>
                       </div>
                       <div className="agent-brief go-top">
                         <p className="brokerName">
                           <Link
                             onClick={() =>
                               handleLinkClick(
                                 item?.property_agent_name,
                                 item?.name
                               )
                             }
                           >
                             {item?.name}
                           </Link>
                         </p>
                       </div>
                     </div>
                     <div className="wcallFlex">
                       <ul className="wcallFlex">
                         <li className="li1">
                           <a
                             href="#"
                             title="Quick View"
                             data-bs-toggle="modal"
                             data-bs-target="#quick_view_modal"
                             className="wcallFlex"
                           >
                             <i className="fab fa-whatsapp callclass"></i>
                             <span className="callclass hideclass">
                               Whatsapp
                             </span>
                           </a>
                         </li>
                         <li>
                         <a
                             href="tel:+971 54 289 7686"
                             title="Wishlist"
                            
                             className="wcallFlex"
                           >
                             <i className="fa fa-phone rotateclass"></i>
                             <span className="callclass hideclass">
                               Call
                             </span>
                           </a>
                         </li>
                       </ul>
                     </div>
                   </div>
                 </div>
               </div>
              ))}
            </Carousel>

            {/* ltn__product-item */}

            {/*  */}
          </div>
        </div>
      </div>
    </div>
  </div>  )
}

export default ExclusiveRelatedProperties