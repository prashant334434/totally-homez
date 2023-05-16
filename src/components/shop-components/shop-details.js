import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import ShopGrid_V1 from '../shop-grid';
import { useStickyBox } from "react-sticky-box";
import { useDispatch } from 'react-redux';
import { getSingalPropertyDetailsApi } from '../../actions/propertiesActions';
import { getTeamDetailsApi } from '../../actions/teamActions';
import AgentDetails from './AgentDetails';

const ShopDetails = ({ propertyDetails }) => {
	const amenitiesArray = propertyDetails?.property_amenities?.split(',');
	console.log(amenitiesArray)
	const maxLength = 100
	const dispatch = useDispatch()
	const [isTruncated, setIsTruncated] = useState(true);

	const toggleTruncate = () => {
		setIsTruncated(!isTruncated);
	};
	let publicUrl = process.env.PUBLIC_URL + '/'
	const stickyRef = useStickyBox({ offsetTop: 150, offsetBottom: 100 })
	const [isSticky, setSticky] = useState(false);
	const [showFullDescription, setShowFullDescription] = useState(false);
	useEffect(() => {
		if(propertyDetails?.property_agent_name){
			dispatch(getTeamDetailsApi(propertyDetails?.property_agent_name))

		}
		const handleScroll = () => {
			setSticky(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};

	}, [dispatch]);
	function toggleDescription() {
		setShowFullDescription(!showFullDescription);
	}

	

	return (
		<div className="ltn__shop-details-area pt-20 pb-10">


			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">

						<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
							<h4 className="title-2">Features</h4>
							<div className="property-detail-feature-list clearfix mb-45">
								<ul>
									<li>
										<div className="property-detail-feature-list-item">
											{/* <i className="flaticon-double-bed" /> */}

											<img src="../assets/img/bedd.png" style={{"width":"20%"}}/>

											<div>
												{/* <h6>Bedroom</h6> */}

												<p>{propertyDetails?.property_no_of_bedroom} bedrooms</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											{/* <i className="flaticon-clean" /> */}
											<img src="../assets/img/bat.png" style={{"width":"20%"}}/>

											<div>
												{/* <h6>Bathroom</h6> */}
												<p>{propertyDetails?.property_no_of_bathroom} bathrooms</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
										<img src="../assets/img/12.png" style={{"width":"20%"}}/>

											{/* <i className="flaticon-square-shape-design-interface-tool-symbol" /> */}
											<div>
												{/* <h6>Size</h6> */}
												<p>{propertyDetails?.property_sq_ft} sq. feet</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<img src="../assets/img/34.png" style={{"width":"20%"}}/>
											{/* <i className="flaticon-home-2" /> */}
											<div>
												{/* <h6>Type</h6> */}
												<p>{propertyDetails?.property_type}</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<img src="../assets/img/123.png" style={{"width":"20%"}}/>
											{/* <i className="icon-wheel-1" /> */}
											<div>
												{/* <h6>For</h6> */}
												<p>{propertyDetails?.property_for}</p>
											</div>
										</div>
									</li>

									<li>
										<div className="property-detail-feature-list-item">
											<img src="../assets/img/11.png" style={{"width":"20%"}}/>
											{/* <i className="fas fa-images" /> */}
											<div>
												{/* <h6>View</h6> */}
												<p>Burj Khalifa</p>
											</div>
										</div>
									</li>

								</ul>
							</div>
							<div className="ltn__blog-meta">

							</div>
							<h4 className="title-2">Description</h4>
							{isTruncated ? (
								<p className="description">
									{propertyDetails?.property_content?.slice(0, maxLength)}...
									<div className="read-more">
										<button className="btn theme-btn-1" onClick={toggleTruncate}> Read more</button>

									</div>        </p>
							) : (
								<p className="description">
									{propertyDetails?.property_content}
									<div className="read-more">
										<button className="btn theme-btn-1" onClick={toggleTruncate}>Read More</button>

									</div>        </p>
							)}

							{/* <h4 className="title-2">Property Detail</h4>  
			<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
			<ul>
				<li><label>Property ID:</label> <span>HZ29</span></li>
				<li><label>Home Area: </label> <span>120 sqft</span></li>
				<li><label>Rooms:</label> <span>7</span></li>
				<li><label>Baths:</label> <span>2</span></li>
				<li><label>Year built:</label> <span>1992</span></li>
			</ul>
			<ul>
				<li><label>Lot Area:</label> <span>HZ29 </span></li>
				<li><label>Lot dimensions:</label> <span>120 sqft</span></li>
				<li><label>Beds:</label> <span>7</span></li>
				<li><label>Price:</label> <span>2</span></li>
				<li><label>Property Status:</label> <span>For Sale</span></li>
			</ul>
			</div> */}
							{/* <h4 className="title-2">Facts and Features</h4> */}
							{/* <div className="property-detail-feature-list clearfix mb-45">                            
			<ul>
			<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-double-bed" />
					<div>
					<h6>Bedroom</h6>
					<small>20 x 16 sq feet</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-double-bed" />
					<div>
					<h6>Bathroom</h6>
					<small>20 x 16 sq feet</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-double-bed" />
					<div>
					<h6>Size</h6>
					<small>20 x 16 sq feet</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-double-bed" />
					<div>
					<h6>Type</h6>
					<small>Villa</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-double-bed" />
					<div>
					<h6>For</h6>
					<small>Sale</small>
					</div>
				</div>
				</li>
				
				<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-double-bed" />
					<div>
					<h6>View</h6>
					<small>Burj Khalifa</small>
					</div>
				</div>
				</li>
			
			</ul>
			</div> */}

							<h4 className="title-2 mb-10">Amenities</h4>
							<div className="property-details-amenities mb-60">
								<div className="row">
								{
									amenitiesArray?.map((amenity,index)=>(
										<div key={index} className="col-lg-4 col-md-6">
										<div className="ltn__menu-widget">
											<ul>
												<li>
													<i className="fa fa-check fa-1x" style={{ color: 'red' }}></i>

													<label className="checkbox-item">{amenity.trim()}

													</label>
												</li>
											
											</ul>
										</div>
									</div>
									))
								}
									
								</div>
							</div>
							<NearBy propertyDetails={propertyDetails} />
							<h4 className="title-2">Location</h4>
							<div className="property-details-google-map mb-60">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
							</div>
							{/* APARTMENTS PLAN AREA START */}
							<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">


							</div>
							{/* APARTMENTS PLAN AREA END */}

						</div>
						<ShopGrid_V1 />

					</div>

					<div className="col-lg-4">
						<aside ref={stickyRef} className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
							{/* Author Widget */}
							<div className="widget ltn__author-widget">
								<h4 className="title-2">Property Detail</h4>
								<div className="property-detail-info-list section-bg-0 clearfix mb-60">
									<ul>
										<li><label>Price:</label><span className='bigcoloring'> AED {propertyDetails?.property_price} </span></li>

										<li><label>Property ID:</label> <span>{propertyDetails?.property_ref_no}</span></li>
										<li><label>Home Area: </label> <span>{propertyDetails?.property_sq_ft}</span></li>
										<li><label>Price: </label><span>120 sqft</span></li>

										<li><label>Rooms:</label> <span>{propertyDetails?.property_no_of_bedroom}</span></li>
										<li><label>Baths:</label> <span>{propertyDetails?.property_no_of_bathroom}</span></li>
										<li><label>Year built:</label> <span>1992</span></li>
									</ul>

								</div>
							</div>
{
	propertyDetails?.property_agent_name &&
	<AgentDetails agentId={propertyDetails?.property_agent_name}/>

}
							{/* Search Widget */}
							{/* <InlineWidget url="https://calendly.com/rohit0101rm" /> */}
							{/* <PopupWidget
        url="https://calendly.com/rohit0101rm"
      
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      /> */}


							{/* Form Widget */}
							{/* <div className="widget ltn__form-widget">
			<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
			<form action="#">
				<input type="text" name="yourname" placeholder="Your Name*" />
				<input type="text" name="youremail" placeholder="Your e-Mail*" />
				<textarea name="yourmessage" placeholder="Write Message..." defaultValue={""} />
				<button   
					type='submit'
			 className="btn theme-btn-1">Send Messege</button>
			</form>
			</div> */}
							{/* Top Rated Product Widget */}

							{/* Menu Widget (Category) */}

							{/* Popular Product Widget */}

							{/* Popular Post Widget */}

							{/* Social Media Widget */}

							{/* Tagcloud Widget */}

							{/* Banner Widget */}
							<div className="widget ltn__banner-widget d-none go-top">
								<Link to="/shop"><img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" /></Link>
							</div>
						</aside>
					</div>

				</div>

			</div>
		</div>
	)
}


export default ShopDetails