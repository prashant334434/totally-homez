import React, { Component, useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';

const ShopDetails = () => {
	let publicUrl = process.env.PUBLIC_URL+'/'

	const [isSticky, setSticky] = useState(false);
	  const [showFullDescription, setShowFullDescription] = useState(false);
	  useEffect(() => {
		const handleScroll = () => {
		  setSticky(window.scrollY > 0);
		};
	
		window.addEventListener('scroll', handleScroll);
	
		return () => {
		  window.removeEventListener('scroll', handleScroll);
		};
	  }, []);
	  function toggleDescription() {
		setShowFullDescription(!showFullDescription);
	  }
	  
  return (
	<div className="ltn__shop-details-area pt-40 pb-10">
	<div className='container'>
	<div className="row">
	<div className="col-lg-12 col-md-12">
	

	</div>
	</div>
	</div>
	
	<div className="container">
	<div className="row">
		<div className="col-lg-9 col-md-12">
		
		<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
		<h4 className="title-2">Features</h4>
			<div className="property-detail-feature-list clearfix mb-45">                            
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
					<i className="flaticon-clean" />
					<div>
					<h6>Bathroom</h6>
					<small>20 x 16 sq feet</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
					<i className="flaticon-square-shape-design-interface-tool-symbol" />
					<div>
					<h6>Size</h6>
					<small>20 x 16 sq feet</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
				<i className="flaticon-home-2" />
					<div>
					<h6>Type</h6>
					<small>Villa</small>
					</div>
				</div>
				</li>
				<li>
				<div className="property-detail-feature-list-item">
				<i className="icon-wheel-1" />
					<div>
					<h6>For</h6>
					<small>Sale</small>
					</div>
				</div>
				</li>
				
				<li>
				<div className="property-detail-feature-list-item">
					<i className="fas fa-images" />
					<div>
					<h6>View</h6>
					<small>Burj Khalifa</small>
					</div>
				</div>
				</li>
			
			</ul>
			</div>
			<div className="ltn__blog-meta">
			
			</div>
			<h4 className="title-2">Description</h4>
			<p className="description">
			{showFullDescription ? 
          "This beautiful Garden Home villa on Frond C offers stunning views of the Dubai Marina skyline and the Arabian Gulf. The villa features 4 spacious bedrooms, each with an en-suite bathroom, and a large living area with high ceilings and floor-to-ceiling windows that let in plenty of natural light. The villa also has a private pool and beach access.This beautiful Garden Home villa on Frond C offers stunning views of the Dubai Marina skyline and the Arabian Gulf. The villa features 4 spacious bedrooms, each with an en-suite bathroom, and a large living area with high ceilings and floor-to-ceiling windows that let in plenty of natural light. The villa also has a private pool and beach access.This beautiful Garden Home villa on Frond C offers stunning views of the Dubai Marina skyline and the Arabian Gulf. The villa features 4 spacious bedrooms, each with an en-suite bathroom, and a large living area with high ceilings and floor-to-ceiling windows that let in plenty of natural light. The villa also has a private pool and beach access.This beautiful Garden Home villa on Frond C offers stunning views of the Dubai Marina skyline and the Arabian Gulf. The villa features 4 spacious bedrooms, each with an en-suite bathroom, and a large living area with high ceilings and floor-to-ceiling windows that let in plenty of natural light. The villa also has a private pool and beach access.This beautiful Garden Home villa on Frond C offers stunning views of the Dubai Marina skyline and the Arabian Gulf. The villa features 4 spacious bedrooms, each with an en-suite bathroom, and a large living area with high ceilings and floor-to-ceiling windows that let in plenty of natural light. The villa also has a private pool and beach access." 
          : 
          "This beautiful Garden Home villa on Frond C offers stunning views of the Dubai Marina skyline and the Arabian Gulf. The villa features 4 spacious bedrooms, each with an en-suite bathroom, and a large living area with high ceilings and floor-to-ceiling windows that let in plenty of natural light. The villa also has a private pool and beach access. Click 'Read More' for additional details."
        }
      </p>
      <div className="read-more">
	  <button className="btn theme-btn-1" onClick={toggleDescription}>{showFullDescription ? "Read less" : "Read more"}</button>

      </div>
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
				<div className="col-lg-4 col-md-6">
				<div className="ltn__menu-widget">
					<ul>
					<li>
						<label className="checkbox-item">Air Conditioning
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Gym
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Microwave
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Swimming Pool
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">WiFi
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					</ul>
				</div>
				</div>
				<div className="col-lg-4 col-md-6">
				<div className="ltn__menu-widget">
					<ul>
					<li>
						<label className="checkbox-item">Barbeque
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Recreation
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Microwave
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Basketball Cout
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Fireplace
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					</ul>
				</div>
				</div>
				<div className="col-lg-4 col-md-6">
				<div className="ltn__menu-widget">
					<ul>
					<li>
						<label className="checkbox-item">Refrigerator
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Window Coverings
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Washer
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">24x7 Security
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					<li>
						<label className="checkbox-item">Indoor Game
						<input type="checkbox" defaultChecked="checked" />
						<span className="checkmark" />
						</label>
					</li>
					</ul>
				</div>
				</div>
			</div>
			</div>
			<NearBy/>
			<h4 className="title-2">Location</h4>
			<div className="property-details-google-map mb-60">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
			</div>
			{/* APARTMENTS PLAN AREA START */}
			<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
		
			
			</div>
			{/* APARTMENTS PLAN AREA END */}
	
		</div>
		</div>
		
		<div className="col-lg-3">
		<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
			{/* Author Widget */}
			<div className="widget ltn__author-widget">
			<h4 className="title-2">Property Detail</h4>  
			<div className="property-detail-info-list section-bg-0 clearfix mb-60">                          
			<ul>
			<li><h4><label>Price:</label> <br/><span>AED 2,900,000 </span></h4></li>

				<li><label>Property ID:</label><br/> <span>HZ29</span></li>
				<li><label>Home Area: </label> <br/><span>120 sqft</span></li>
				<li><label>Price: </label><br/> <span>120 sqft</span></li>

				<li><label>Rooms:</label><br/> <span>7</span></li>
				<li><label>Baths:</label> <br/><span>2</span></li>
				<li><label>Year built:</label><br/> <span>1992</span></li>
			</ul>
			
			</div>
			</div>

			<div className="widget ltn__author-widget">
			<div className="ltn__author-widget-inner text-center">
			<center>

				<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
				<h5>Rosalina D. Willaimson</h5>
				<small>Traveller/Photographer</small>

			</center>

				<div className="product-ratting">
				
				</div>
				<br/>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
				<div className="ltn__social-media">
				<Link className="btn btn-effect-3" to="/contact">Call</Link>
				
					
					<br/>
					<br/>
	
					<script
    src="https://sleekflow.io/whatsapp-button.js"
    async
    onLoad="whatsappButton({
    buttonName:'Message Us',
    buttonIconSize: '22',
    brandImageUrl:'https://sleekflow.io/static/images/sleekflow-icon.png',
    buttonMargin:'true',
    brandName:'SleekFlow',
    brandSubtitleText:'Typically replies within a day',
    buttonSize:'large',
    callToAction:'Start Chat',
    phoneNumber:'917015535765',
    welcomeMessage:'Hi there 👋',
    })"
    > whatsapp
</script>
				
				</div>
				
			</div>
			</div>
			{/* Search Widget */}
		
			{/* Form Widget */}
			<div className="widget ltn__form-widget">
			<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
			<form action="#">
				<input type="text" name="yourname" placeholder="Your Name*" />
				<input type="text" name="youremail" placeholder="Your e-Mail*" />
				<textarea name="yourmessage" placeholder="Write Message..." defaultValue={""} />
				<button type="submit" className="btn theme-btn-1">Send Messege</button>
			</form>
			</div>
			{/* Top Rated Product Widget */}
			
			{/* Menu Widget (Category) */}
		
			{/* Popular Product Widget */}
		
			{/* Popular Post Widget */}
			
			{/* Social Media Widget */}
		
			{/* Tagcloud Widget */}
		
			{/* Banner Widget */}
			<div className="widget ltn__banner-widget d-none go-top">
			<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
			</div>
		</aside>
		</div>
		
	</div>

	</div>
</div>
  )
}


export default ShopDetails