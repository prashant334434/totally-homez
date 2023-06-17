import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  getCatgoryProperties,
  getTownhouseCatgoryProperties,
  getTownhouseCatgoryRentProperties,
} from "../actions/catgoryActions";
import { PROPERTY_IMAGES_URL, TEAM_API_URL } from "../constants/config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { currentTeamMember } from "../actions/teamActions";
const LevelProperties = (props) => {
  const history=useHistory()


  const handleLinkClick = (id, name) => {
    console.log("agentIdHome", id);

    dispatch(currentTeamMember(id));
    history.push(`/team/${name.toLowerCase().split(" ").join("-")}`);
  };
  let carouselItems = [
    {
      id: 1,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg",
    },
    {
      id: 2,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg",
    },
    {
      id: 3,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg",
    },
    {
      id: 4,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg",
    },
    {
      id: 5,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg",
    },
    {
      id: 6,
      content:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg",
    },
    // Add more items as needed
  ];
  const [propertyCategory, setPropertyCategory] = useState("apartment");
  let publicUrl = process.env.PUBLIC_URL + "/";
  let customClass = props.customClass ? props.customClass : "";
  const { townhouseCategoryRentProperties } = useSelector(
    (state) => state.townhouseRentProperties
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTownhouseCatgoryRentProperties());
  }, [dispatch]);

  if (townhouseCategoryRentProperties?.length > 0) {
    carouselItems = townhouseCategoryRentProperties;
  }
  const url = (titleName) => {
    return titleName?.split(" ")?.join("-")?.toLowerCase();
  };
  return (
    <div>
      <div>
        <div className="ltn__product-area ltn__product-gutter mb-100 pt-20 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__shop-options">
                  <ul>
                    {/* <li>
								<div className="ltn__grid-list-tab-menu ">
								<div className="nav">
									<a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
									<a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
								</div>
								</div>
							</li> */}
                    <li>
                      <div className="short-by text-center">
                        <select className="nice-select">
                          <option>Default sorting</option>

                          <option>Sort by price: low to high</option>
                          <option>Sort by price: high to low</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      {/* <div className="showing-product-number text-right">
								<span>Showing 9 of 20 results</span>
								</div>  */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tab-content ">
              <div
                className="tab-pane fade active show"
                id="liton_product_grid"
              >
                <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                  <div className="row">
                    <div className="col-lg-12">
                      {/* Search Widget */}
                      {/* <div className="ltn__search-widget mb-30">
									<form action="#">
										<input type="text" name="search" placeholder="Search your keyword..." />
										<button type="submit"><i className="fas fa-search" /></button>
									</form>
									</div> */}
                    </div>
                    {/* ltn__product-item */}
                    {/* <div className="col-lg-4 col-sm-6 col-12">
									<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
									<div className="product-img">
										<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
										<div className="real-estate-agent">
										<div className="agent-img">
											<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
										</div>
										</div>
									</div>
									<div className="product-info">
										<div className="product-badge">
										<ul>
											<li className="sale-badg">For Rent</li>
										</ul>
										</div>
										<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
										<div className="product-img-location">
										<ul>
											<li className="go-top">
											<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
											</li>
										</ul>
										</div>
										<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
										<li><span>3 </span>
											Bedrooms
										</li>
										<li><span>2 </span>
											Bathrooms
										</li>
										<li><span>3450 </span>
											square Ft
										</li>
										</ul>
										<div className="product-hover-action">
										<ul>
											<li>
											<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
												<i className="flaticon-expand" />
											</a>
											</li>
											<li>
											<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
												<i className="flaticon-heart-1" /></a>
											</li>
											<li>
											<span className="go-top">
											<Link to="/product-details" title="Product Details">
												<i className="flaticon-add" />
											</Link>
											</span>
											</li>
										</ul>
										</div>
									</div>
									<div className="product-info-bottom">
										<div className="product-price">
										<span>$34,900<label>/Month</label></span>
										</div>
									</div>
									</div>
								</div> */}
                    <div className="ltn__product-slider-area ltn__product-gutter pt-20 pb-40">
                      <div className="container-fluid">
                        <div className="row ltn__product slick-arrow-1">
                          {props?.propertyLevel?.map((categoryProperty) => (
                            <div className="col-lg-4">
                              <div
                                key={categoryProperty?.id}
                                className="ltn__product-item ltn__product-item-4 text-center---"
                              >
                                <div className="product-img go-top">
                                 { categoryProperty?.property_level ?(
                                  <Link
                                      to={`/${url(
                                        categoryProperty?.property_city
                                      )}/${url(
                                        categoryProperty?.property_community
                                      )}/${url(
                                        categoryProperty?.property_sub_community
                                      )}/${url(
                                        categoryProperty?.property_type
                                      )}-for-${url(
                                        categoryProperty?.property_for
                                      )}-${url(
                                        categoryProperty?.property_level
                                      )}/th${categoryProperty?.id}`}
                                    >
 <img
   src={`${PROPERTY_IMAGES_URL}/${categoryProperty?.img_name}`}
   alt="#"
 />
</Link>
                                 ):(
                                  <Link
                                        to={`/${url(
                                          categoryProperty?.property_city
                                        )}/${url(
                                          categoryProperty?.property_community
                                        )}/${url(
                                          categoryProperty?.property_type
                                        )}-for-${url(
                                          categoryProperty?.property_for
                                        )}-${url(
                                          categoryProperty?.property_sub_community
                                        )}/th${categoryProperty?.id}`}
                                      >
                                  <img
                                    src={`${PROPERTY_IMAGES_URL}/${categoryProperty?.img_name}`}
                                    alt="#"
                                  />
                                </Link>
                                 )}
                                 
                                  <div className="product-badge">
                                    <ul>
                                      <li className="sale-badge bg-green">
                                        {categoryProperty?.property_for}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <div className="product-price">
                                    {categoryProperty?.property_level ?(
                                      <Link
                                        to={`/${url(
                                          categoryProperty?.property_city
                                        )}/${url(
                                          categoryProperty?.property_community
                                        )}/${url(
                                          categoryProperty?.property_sub_community
                                        )}/${url(
                                          categoryProperty?.property_type
                                        )}-for-${url(
                                          categoryProperty?.property_for
                                        )}-${url(
                                          categoryProperty?.property_level
                                        )}/th${categoryProperty?.id}`}
                                      >
   <h3 dangerouslySetInnerHTML={{
   __html: categoryProperty?.property_name,
 }}
 className="product-title go-top"
/>
</Link>

                                    ):(
                                      <Link
                                        to={`/${url(
                                          categoryProperty?.property_city
                                        )}/${url(
                                          categoryProperty?.property_community
                                        )}/${url(
                                          categoryProperty?.property_type
                                        )}-for-${url(
                                          categoryProperty?.property_for
                                        )}-${url(
                                          categoryProperty?.property_sub_community
                                        )}/th${categoryProperty?.id}`}
                                      >
                                      <h3 dangerouslySetInnerHTML={{
                                      __html: categoryProperty?.property_name,
                                    }}
                                    className="product-title go-top"
                                   />
                                   </Link>
                                    )}
                                   
                                    <span>
                                      AED {categoryProperty?.property_price}
                                    </span>
                                  </div>
                                  <div className="product-description">
                                    <Link>
                                      {" "}
                                      {categoryProperty?.property_address}
                                    </Link>
                                    <br></br>
                                    <small>
                                    <p>
                           {categoryProperty?.property_community}{" "}- {" "}
                           {categoryProperty?.property_sub_community}
                         </p>
                                      Ref No.{categoryProperty?.property_ref_no}
                                    </small>
                                  </div>
                                  <div>
                                    <center>
                                      <ul className="ltn__list-item-2 ltn__list-item-2-before">
                                        <li>
                                          <span>
                                            {" "}
                                            <i className="flaticon-bed" />{" "}
                                            {
                                              categoryProperty?.property_no_of_bedroom
                                            }
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            <i className="flaticon-clean" />{" "}
                                            {
                                              categoryProperty?.property_no_of_bathroom
                                            }{" "}
                                          </span>
                                        </li>
                                        <li>
                                          <span>
                                            {" "}
                                            <i className="flaticon-square-shape-design-interface-tool-symbol" />{" "}
                                            {categoryProperty?.property_sq_ft}{" "}
                                            sqft
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
                                          src={`${TEAM_API_URL}/${categoryProperty?.path}`}
                                          alt="Image"
                                        />
                                      </Link>
                                    </div>
                                    <div className="agent-brief go-top">
                                      <p className="brokerName">
                                      <Link
                                          onClick={() =>
                                            handleLinkClick(
                                              categoryProperty?.property_agent_name,
                                              categoryProperty?.name
                                            )
                                          }
                                        >
                                          {categoryProperty?.name}
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

                          {/* ltn__product-item */}

                          {/*  */}
                        </div>
                      </div>
                    </div>

                    {/* ltn__product-item */}

                    {/* ltn__product-item */}

                    {/* ltn__product-item */}

                    {/* ltn__product-item */}

                    {/* ltn__product-item */}

                    {/*  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + "assets/img/product/7.png"}
                              alt="#"
                            />
                          </div>
                          <div className="modal-product-info go-top">
                            <h5>
                              <Link to="/product-details">
                                Brake Conversion Kit
                              </Link>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" /> Successfully
                              added to your Wishlist
                            </p>
                            <div className="btn-wrapper">
                              <Link
                                to="/wishlist"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Wishlist
                              </Link>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + "assets/img/icons/payment.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ltn__modal-area ltn__quick-view-modal-area">
          <div className="modal fade" id="quick_view_modal" tabIndex={-1}>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                    {/* <i class="fas fa-times"></i> */}
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-lg-6 col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + "assets/img/product/4.png"}
                              alt="#"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="modal-product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star" />
                                  </a>
                                </li>
                                <li className="review-total">
                                  {" "}
                                  <a href="#"> ( 95 Reviews )</a>
                                </li>
                              </ul>
                            </div>
                            <h3>Brake Conversion Kit</h3>
                            <div className="product-price">
                              <span>$149.00</span>
                              <del>$165.00</del>
                            </div>
                            <div className="modal-product-meta ltn__product-details-menu-1">
                              <ul>
                                <li>
                                  <strong>Categories:</strong>
                                  <span className="go-top">
                                    <Link to="/blog">Parts</Link>
                                    <Link to="/blog">Car</Link>
                                    <Link to="/blog">Seat</Link>
                                    <Link to="/blog">Cover</Link>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className="ltn__product-details-menu-2">
                              <ul>
                                <li>
                                  <div className="cart-plus-minus">
                                    <input
                                      type="text"
                                      defaultValue="02"
                                      name="qtybutton"
                                      className="cart-plus-minus-box"
                                    />
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="theme-btn-1 btn btn-effect-1"
                                    title="Add to Cart"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_to_cart_modal"
                                  >
                                    <i className="fas fa-shopping-cart" />
                                    <span>ADD TO CART</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <hr />
                            <div className="ltn__social-media">
                              <ul>
                                <li>Share:</li>
                                <li>
                                  <a href="#" title="Facebook">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Twitter">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Linkedin">
                                    <i className="fab fa-linkedin" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#" title="Instagram">
                                    <i className="fab fa-instagram" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ltn__modal-area ltn__add-to-cart-modal-area">
          <div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="ltn__quick-view-modal-inner">
                    <div className="modal-product-item">
                      <div className="row">
                        <div className="col-12">
                          <div className="modal-product-img">
                            <img
                              src={publicUrl + "assets/img/product/1.png"}
                              alt="#"
                            />
                          </div>
                          <div className="modal-product-info go-top">
                            <h5 className="go-top">
                              <Link to="/product-details">
                                Brake Conversion Kit
                              </Link>
                            </h5>
                            <p className="added-cart">
                              <i className="fa fa-check-circle" />
                              Successfully added to your Cart
                            </p>
                            <div className="btn-wrapper">
                              <Link
                                to="/cart"
                                className="theme-btn-1 btn btn-effect-1"
                              >
                                View Cart
                              </Link>
                              <Link
                                to="/checkout"
                                className="theme-btn-2 btn btn-effect-2"
                              >
                                Checkout
                              </Link>
                            </div>
                          </div>
                          {/* additional-info */}
                          <div className="additional-info d-none">
                            <p>
                              We want to give you <b>10% discount</b> for your
                              first order, <br /> Use discount code at checkout
                            </p>
                            <div className="payment-method">
                              <img
                                src={publicUrl + "assets/img/icons/payment.png"}
                                alt="#"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelProperties;
