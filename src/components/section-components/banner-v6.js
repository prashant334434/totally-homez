import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV6 extends Component {

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return <div className="ltn__slider-area ltn__slider-4 position-relative  ltn__primary-bg">
			<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">

				<video autoPlay muted loop id="myVideo">
					<source src={publicUrl + "assets/media/3.mp4"} type="video/mp4" />
				</video>

				<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-30" data-bs-bg={publicUrl + "assets/img/slider/41.jpg"}>
					<div className="ltn__slide-item-inner text-center">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 align-self-center">
									<div className="slide-item-car-dealer-form">
										
										<div className="ltn__car-dealer-form-tab">
											<div className="ltn__tab-menu   text-center">
												<div className="nav">
													<a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-home" />Project</a>
													<a data-bs-toggle="tab" href="#ltn__form_tab_1_2" className><i className="fas fa-home" />Rent</a>
													<a data-bs-toggle="tab" href="#ltn__form_tab_1_3" className><i className="fas fa-home" />Sale</a>

												</div>
											</div>
											<div className="tab-content pb-10">
												<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
													<div className="car-dealer-form-inner">
														<form action="#" className="ltn__car-dealer-form-box row">
															<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car   col-lg-2 col-md-4">
																<label>Location :</label>
															
																<input type="text" name="ltn__name" placeholder="Location" />

															</div>
															<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-home col-lg-2 col-md-4">

																<label>Select Category :</label>

																<select className="nice-select">
																	<option>All Categories :</option>
																	<option>Apartment</option>
																	<option>Villa</option>
																	<option>Penthouse</option>
																	<option>Townhouse</option>
																	<option>Residential Land</option>
																</select>
															</div>
															<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Min Price :</label>
																<input type="text" name="ltn__name" placeholder="Min Price " />

															</div>
															<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Max  Price :</label>
																<input type="text" name="ltn__name" placeholder="Max  Price" />

															</div>
															<div className="ltn__car-dealer-form-item bedroom_class  col-lg-2 col-md-4">
																<label>Bedrooms :</label>

																<select className="nice-select">
																	<option>All Bedrooms</option>
																	<option>1 bedroom</option>
																	<option>2 bedrooms</option>
																	<option>3 bedrooms</option>
																	<option>4 bedrooms</option>
																	<option>5 bedrooms</option>
																	<option>5+ bedrooms</option>


																</select>
															</div>
															<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-2 col-md-4 banner_search">
																<div className="btn-wrapper text-center mt-0 go-top">
																	{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
																	<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
																</div>
															</div>
														</form>
													</div>
												</div>
												<div className="tab-pane fade" id="ltn__form_tab_1_2">
													<div className="car-dealer-form-inner">
														<form action="#" className="ltn__car-dealer-form-box row">
														<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Location :</label>
																<input type="text" name="ltn__name" placeholder="Size in ft2 (*only numbers)" />

															</div>
															<div className="ltn__car-dealer-form-item  col-lg-2 col-md-4">

																<label>Select Category :</label>

																<select className="nice-select">
																	<option>All Categories :</option>
																	<option>Apartment</option>
																	<option>Villa</option>
																	<option>Penthouse</option>
																	<option>Townhouse</option>
																	<option>Residential Land</option>
																</select>
																</div>
															<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Min Price :</label>
																<input type="text" name="ltn__name" placeholder="Min Price " />

															</div>
															<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Max  Price :</label>
																<input type="text" name="ltn__name" placeholder="Max Price " />

															</div>
															<div className="ltn__car-dealer-form-item bedroom_class  col-lg-2 col-md-4">
																<label>Bedrooms :</label>

																<select className="nice-select">
																	<option>All Bedrooms</option>
																	<option>1 bedroom</option>
																	<option>2 bedrooms</option>
																	<option>3 bedrooms</option>
																	<option>4 bedrooms</option>
																	<option>5 bedrooms</option>
																	<option>5+ bedrooms</option>


																</select>
															</div>
															<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-2 col-md-4 banner_search">
																<div className="btn-wrapper text-center mt-0 go-top">
																	{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
																	<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
																</div>
															</div>
														</form>
													</div>
												</div>
												<div className="tab-pane fade" id="ltn__form_tab_1_3">
													<div className="car-dealer-form-inner">
														<form action="#" className="ltn__car-dealer-form-box row">
														<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Location :</label>
																<input type="text" name="ltn__name" placeholder="Location" />

															</div>
															<div className="ltn__car-dealer-form-item  col-lg-2 col-md-4">

																<label>Select Category :</label>

																<select className="nice-select">
																	<option>All Categories :</option>
																	<option>Apartment</option>
																	<option>Villa</option>
																	<option>Penthouse</option>
																	<option>Townhouse</option>
																	<option>Residential Land</option>
																</select>
																</div>
															<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Min Price :</label>
																<input type="text" name="ltn__name" placeholder="Min Price " />

															</div>
															<div className="ltn__car-dealer-form-item   col-lg-2 col-md-4">
																<label>Max  Price :</label>
																<input type="text" name="ltn__name" placeholder="Max  Price " />

															</div>
															<div className="ltn__car-dealer-form-item bedroom_class  col-lg-2 col-md-4">
																<label>Bedrooms :</label>

																<select className="nice-select">
																	<option>All Bedrooms</option>
																	<option>1 bedroom</option>
																	<option>2 bedrooms</option>
																	<option>3 bedrooms</option>
																	<option>4 bedrooms</option>
																	<option>5 bedrooms</option>
																	<option>5+ bedrooms</option>


																</select>
															</div>
															<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-2 col-md-4 banner_search">
																<div className="btn-wrapper text-center mt-0 go-top">
																	{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
																	<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search</Link>
																</div>
															</div>
														</form>
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
	}
}

export default BannerV6