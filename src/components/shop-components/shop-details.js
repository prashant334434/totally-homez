import React, { Component, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useStickyBox } from "react-sticky-box";
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesAmenitiesApi, getPropertiesNearByApi, getSingalPropertyDetailsApi } from '../../actions/propertiesActions';
import { getTeamDetailsApi } from '../../actions/teamActions';
import AgentDetails from './AgentDetails';
import IconButton from '@material-ui/core/IconButton';
import { FaHospital, FaSchool } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { text } from '@fortawesome/fontawesome-svg-core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: theme.spacing(1),
		padding: '10px',

		// Adjust the spacing between the buttons as needed
	},
	button: {
		borderRadius: '10px',
		border: '1px solid whitesmoke',
		// Set the desired fixed width
		color: '#eb2027',
		backgroundColor: 'transparent',
		'&:hover': {
			color: 'white',
			backgroundColor: '#eb2027',
		}// Adjust the spacing between the buttons as needed
	},


	typographyText: {
		paddingLeft: '2px',
		textTransform: 'capitalize',
	},
}));

const ShopDetails = ({ propertyDetails }) => {
	const { laoding, propertiesNearBy } = useSelector((state) => state.propertiesNearBy)

	const { loading, propertyAmenities } = useSelector((state) => state.propertyAmenities)
	const { id } = useParams()
	const hrStyle = {
		border: 'none', // Remove the default border
		borderTop: '1px solid black', // Set the style of the horizontal rule
		margin: '-25px 0 7px', // Adjust the margin as needed
	};

	const classes = useStyles();
	const htmlContent = propertyDetails?.property_content;

	const amenitiesArray = propertyDetails?.property_amenities?.split(',');
	console.log(amenitiesArray)
	const maxLength = 100
	const dispatch = useDispatch()
	const [isTruncated, setIsTruncated] = useState(true);

	const toggleTruncate = () => {
		setIsTruncated(!isTruncated);
	};
	let publicUrl = process.env.PUBLIC_URL + '/'
	const stickyRef = useStickyBox({ offsetTop: 150, offsetBottom: 100 });
	const [isSticky, setSticky] = useState(false);
	const [showFullDescription, setShowFullDescription] = useState(false);
	let iconsToshow;
	switch (propertiesNearBy) {
		case 'hospital':
			iconsToshow = faHospital;
			break;
		case 'school':


	}
	const handleEmail = () => {
		window.location.href = 'mailto:sales@totallyhomerealestate.com';
	  };
	  const handleCall = () => {
		window.location.href = 'tel:+971 54 289 7686';
	  };
	  const handleWhatsApp = () => {
		window.open('https://wa.me/+971 54 289 7686'); // Replace with the desired phone number
	  };

	const getTruncatedContent = () => {
		const maxLength = 100;
		if (htmlContent?.length <= maxLength) {
			return htmlContent;
		}
		return isTruncated ? htmlContent : htmlContent.slice(0, maxLength) + '...';
	};
	useEffect(() => {
		dispatch(getPropertiesAmenitiesApi(id))
		dispatch(getPropertiesNearByApi(id))


		if (propertyDetails?.property_agent_name) {
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


	const getIcon = (placeName) => {


		switch (placeName) {
			case "Hospital":
				return "fa fa-hospital"
			case "Bank":
				return "fa fa-bank"

			case "ATM":
				return " fa fa-credit-card-alt"

			case "School":

				return "fa fa-school"

			case "Burj Khalifa":
				return "fa fa-building"

			case "Beach":
				return "fa fa-water"

			case "Super Market":
				return "fa fa-shopping-basket"

			case "Burj Al Arab":

				return "fa fa-building"
			case "Pharmacy":
				return " fa fa-plus-square "

			case "Airport":
				return "fa fa-plane"

			case "Metro Station":
				return "fa fa-train"



		}
	}
	return (
		<div className="ltn__shop-details-area pt-20 pb-10">


			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-12">

						<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
							<h2 className="title-2">Property Features</h2>
							<hr style={hrStyle} />
							{/* <hr/> */}
							<div className="property-detail-feature-list clearfix mb-45">
								<ul>
									<li>
										<div className="property-detail-feature-list-item">
											{/* <i className="flaticon-double-bed" /> */}

											<img src="/assets/img/bd.png" style={{ "width": "13%" }} />

											<div>
												{/* <h6>Bedroom</h6> */}

												<p className='textbold'>{propertyDetails?.property_no_of_bedroom} Bedrooms</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											{/* <i className="flaticon-clean" /> */}
											<img src="/assets/img/bb.png" style={{ "width": "13%" }} />

											<div>
												{/* <h6>Bathroom</h6> */}
												<p className='textbold'>{propertyDetails?.property_no_of_bathroom} Bathrooms</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<img src="/assets/img/gg.png" style={{ "width": "13%" }} />

											{/* <i className="flaticon-square-shape-design-interface-tool-symbol" /> */}
											<div>
												{/* <h6>Size</h6> */}
												<p className='textbold'>{propertyDetails?.property_sq_ft} Sqft</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<img src="/assets/img/ii.png" style={{ "width": "13%" }} />
											{/* <i className="flaticon-home-2" /> */}
											<div>
												{/* <h6>Type</h6> */}
												<p className='textbold'>{propertyDetails?.property_type}</p>
											</div>
										</div>
									</li>
									<li>
										<div className="property-detail-feature-list-item">
											<img src="/assets/img/1.png" style={{ "width": "13%" }} />
											{/* <i className="icon-wheel-1" /> */}
											<div>
												{/* <h6>For</h6> */}
												<p className='textbold'>{propertyDetails?.property_for}</p>
											</div>
										</div>
									</li>

									<li>
										<div className="property-detail-feature-list-item">
											<img src="/assets/img/ee.png" style={{ "width": "13%" }} />
											{/* <i className="fas fa-images" /> */}
											<div>
												{/* <h6>View</h6> */}
												<p className='textbold'>{propertyDetails?.property_view}</p>
											</div>
										</div>
									</li>

								</ul>
							</div>
							<div className="ltn__blog-meta">

							</div>
							<h2 className="title-2">Property Description</h2>
							<hr style={hrStyle} />


							<p dangerouslySetInnerHTML={{ __html: getTruncatedContent() }} className="description " />
							{htmlContent?.length > 30 && (
								<button className="btn theme-btn-1 " onClick={toggleTruncate}>
									{isTruncated ? 'Read Less' : 'Read More'}
								</button>
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

							<h2 className="title-2 "> Property Amenities</h2>
							<hr style={hrStyle} />

							<div className="property-details-amenities mb-60">
								<div className="row">
									{
										propertyAmenities?.map((amenity, index) => (
											<div key={index} className="col-lg-4 col-md-6">
												<div className="ltn__menu-widget">
													<ul>
														<li>
															{/* <i className="fas fa-check fa-2x" style={{ color: 'red',}}></i> */}
															<img src="/assets/img/tick.png" className='sizingimage' />

															<label className="checkbox-item sizing420">{amenity?.anmi_name}

															</label>
														</li>

													</ul>
												</div>
											</div>
										))
									}

								</div>
							</div>
							<h2 className="title-2 ">Nearby Places</h2>
							<hr style={hrStyle} />

							<div className="property-details-amenities mb-60">
								<div className="row">
									{
										propertiesNearBy?.map((amenity, index) => (
											<div key={index} className="col-lg-5  col-md-6">
												<div className="ltn__menu-widget">
													<ul>
														<li>
															{/* <i className="fas fa-check fa-2x" style={{ color: 'red',}}></i> */}
															{/* <img src="../assets/img/tick.png" style={{ "width": "9%"}} /> */}
															<i className={getIcon(amenity?.near_by_place)} style={{ "color": "red" }}></i>
															<label className="checkbox-item sizing420">{amenity?.near_by_place} - {amenity?.dist} Minutes

															</label>
														</li>

													</ul>
												</div>
											</div>
										))
									}

								</div>
							</div>
							{/* <NearBy propertyDetails={propertyDetails} /> */}

						</div>

					</div>

					<div className="col-lg-5
					">
						<aside ref={stickyRef} className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
							{/* Author Widget */}
							<div className="widget ltn__author-widget">
								<h2 className="title-2">Property Detail</h2>
								<div className="property-detail-info-list section-bg-0 clearfix ">
									<ul>
										<li><label className='bigcoloring1'>Price:</label><span className='bigcoloring'> {propertyDetails?.property_price_on_application == "Yes" ? "AED" : null} {propertyDetails?.property_price_on_application == "Yes" ? propertyDetails?.property_price : "Price on Application"} </span></li>
									</ul>
								</div>
								<div className="property-detail-info-list section-bg-0 clearfix ">

									<div className={classes.container}>
										<IconButton className={classes.button} aria-label="Delete">
											<PhoneIcon />
											<Typography className={classes.typographyText} onClick={handleCall} variant="button">Call</Typography>

										</IconButton>

										<IconButton className={classes.button} aria-label="Edit">
											<EmailIcon />
											<Typography className={classes.typographyText} onClick={handleEmail} variant="button">Email</Typography>

										</IconButton>

										<IconButton className={classes.button} aria-label="Whatsapp">
											<WhatsAppIcon />
											<Typography className={classes.typographyText} onClick={handleWhatsApp} variant="button">Whatsapp</Typography>

										</IconButton>
									</div>



								</div>
							</div>
							{
								propertyDetails?.property_agent_name &&
								<AgentDetails agentId={propertyDetails?.property_agent_name} />

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