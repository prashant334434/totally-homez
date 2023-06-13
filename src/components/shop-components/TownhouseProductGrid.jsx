import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getCatgoryProperties, getTownhouseCatgoryProperties } from '../../actions/catgoryActions'
import { TEAM_API_URL } from '../../constants/config'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropertyImage from './PropertyImage'
const TownhouseProductGrid = (props) => {
	let carouselItems = [
		{ id: 1, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 2, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 3, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 4, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		{ id: 5, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		{ id: 6, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		// Add more items as needed
	];
    const [propertyCategory, setPropertyCategory] = useState("apartment")
    let publicUrl = process.env.PUBLIC_URL + '/'
    let customClass = props.customClass ? props.customClass : ''
    const { townhouseCategoryProperties } = useSelector((state) => state.townhouseCategoryProperties)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTownhouseCatgoryProperties())
    }, [dispatch])
	if (townhouseCategoryProperties?.length > 0) {
		carouselItems = townhouseCategoryProperties
	}
	const url=(titleName)=>{
		return titleName?.split(" ")?.join("-")?.toLowerCase()
	}
    return (
        <div>
            <div>
                <div className="ltn__product-slider-area ltn__product-gutter pt-40  plr--7">
                    <div className="container-fluid">

                        <div className="row  slick-arrow-1">
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

								{carouselItems.map((item) => (
									<div key={item?.id} className="col-lg-12">
                    <div className="ltn__product-item ltn__product-item-4 text-center---">
                      <div className="product-img go-top">
                        {item.property_level ? (
                          <Link
                            to={`/${url(item?.property_city)}/${url(
                              item?.property_community
                            )}/${url(item?.property_sub_community)}/${url(
                              item?.property_type
                            )}-for-${url(item?.property_for)}-${url(
                              item?.property_level
                            )}/th${item?.id}`}
                          >
                            <PropertyImage id={item?.id} />
                          </Link>
                        ) : (
                          <Link
                            to={`/${url(item?.property_city)}/${url(
                              item?.property_community
                            )}/${url(item?.property_sub_community)}/${url(
                              item?.property_type
                            )}-for-${url(item?.property_for)}/th${item?.id}`}
                          >
                            <PropertyImage id={item?.id} />
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
                          <div className="title_div">
                            {item.property_level ? (
                              <Link
                            to={`/${url(item?.property_city)}/${url(
                              item?.property_community
                            )}/${url(item?.property_sub_community)}/${url(
                              item?.property_type
                            )}-for-${url(item?.property_for)}-${url(
                              item?.property_level
                            )}/th${item?.id}`}
                          >
                                <h2
                                  dangerouslySetInnerHTML={{
                                    __html: item?.property_name,
                                  }}
                                  className="product-title go-top"
                                />
                              </Link>
                            ) : (
                              <Link
                            to={`/${url(item?.property_city)}/${url(
                              item?.property_community
                            )}/${url(item?.property_sub_community)}/${url(
                              item?.property_type
                            )}-for-${url(item?.property_for)}/th${item?.id}`}
                          >
                                <h2
                                  dangerouslySetInnerHTML={{
                                    __html: item?.property_name,
                                  }}
                                  className="product-title go-top"
                                />
                              </Link>
                            )}
                          </div>
                          <div className="price_div">
                            <span>AED <br/> {item?.property_price}</span>
                          </div>
                        </div>
                        <div className="product-description">
                          <Link> {item?.property_address}</Link>
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
                        <div className="real-estate-agent wcallFlex">
                          <div className="agent-img go-top">
                            <Link to="/team-details">
                              <img
                                src={`${TEAM_API_URL}/${item?.path}`}
                                alt="Image"
                              />
                            </Link>
                          </div>
                          <div className="agent-brief go-top">
                            <h6>
                              <Link
                                to={`/team-details/${item?.property_agent_name}`}
                              >
                                {item?.name}
                              </Link>
                            </h6>
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
                                href="#"
                                title="Wishlist"
                                data-bs-toggle="modal"
                                data-bs-target="#liton_wishlist_modal"
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
        </div>
    )
}

export default TownhouseProductGrid