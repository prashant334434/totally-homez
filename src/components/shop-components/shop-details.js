import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ShopDetails = () => {
	let publicUrl = process.env.PUBLIC_URL+'/'


	  const [showFullDescription, setShowFullDescription] = useState(false);
	
	  function toggleDescription() {
		setShowFullDescription(!showFullDescription);
	  }
	  
  return (
	<div className="ltn__shop-details-area pt-40 pb-10">
	<div className="container">
	<div className="row">
		<div className="col-lg-8 col-md-12">
		<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
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
			<h4 className="title-2">Property Detail</h4>  
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
			</div>
			<h4 className="title-2">Facts and Features</h4>
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
			</div>
		
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
			<h4 className="title-2">Location</h4>
			<div className="property-details-google-map mb-60">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
			</div>
			{/* APARTMENTS PLAN AREA START */}
			<div className="ltn__apartments-plan-area product-details-apartments-plan mb-60">
		
			
			</div>
			{/* APARTMENTS PLAN AREA END */}
		
			
			<h4 className="title-2">Related Properties</h4>
			<div className="row">
			{/* ltn__product-item */}
		
			{/* ltn__product-item */}
			<div className="col-xl-6 col-sm-6 col-12 go-top">
				<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
				<div className="product-img">
					<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
					<div className="real-estate-agent">
					<div className="agent-img">
						<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
					</div>
					</div>
				</div>
				<div className="product-info">
					<div className="product-badge">
					<ul>
						<li className="sale-badg">For Sale</li>
					</ul>
					</div>
					<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
					<div className="product-img-location">
					<ul>
						<li>
						<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
						<a href="portfolio-details.html" title="Compare">
							<i className="flaticon-add" />
						</a>
						</li>
					</ul>
					</div>
				</div>
				<div className="product-info-bottom">
					<div className="product-price">
					<span>$33349,00<label>/Month</label></span>
					</div>
				</div>
				
				</div>
			</div>
			</div>
		</div>
		</div>
		<div className="col-lg-4">
		<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
			{/* Author Widget */}
			<div className="widget ltn__author-widget">
			<div className="ltn__author-widget-inner text-center">
				<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
				<h5>Rosalina D. Willaimson</h5>
				<small>Traveller/Photographer</small>
				<div className="product-ratting">
				<ul>
					<li><a href="#"><i className="fas fa-star" /></a></li>
					<li><a href="#"><i className="fas fa-star" /></a></li>
					<li><a href="#"><i className="fas fa-star" /></a></li>
					<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
					<li><a href="#"><i className="far fa-star" /></a></li>
					<li className="review-total"> <a href="#"> ( 1 Reviews )</a></li>
				</ul>
				</div>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
				<div className="ltn__social-media">
				<ul>
					<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
					<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
					<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
					<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
				</ul>
				
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
	<div className="row">
		<div className="col-lg-8 col-md-12">
		<div className="ltn__shop-details-inner ltn__page-details-inner ">
			
		
     
			
			
		
		
			
			{/* APARTMENTS PLAN AREA START */}
		
			
			{/* APARTMENTS PLAN AREA END */}
		
			
			<h4 className="title-2">Related Properties</h4>
			<div className="row">
			{/* ltn__product-item */}
		
			{/* ltn__product-item */}
			<div className="col-xl-4 col-sm-4 col-4 go-top">
				<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
				<div className="product-img">
					<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
					<div className="real-estate-agent">
					<div className="agent-img">
						<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
					</div>
					</div>
				</div>
				<div className="product-info">
					<div className="product-badge">
					<ul>
						<li className="sale-badg">For Sale</li>
					</ul>
					</div>
					<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
					<div className="product-img-location">
					<ul>
						<li>
						<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
						<a href="portfolio-details.html" title="Compare">
							<i className="flaticon-add" />
						</a>
						</li>
					</ul>
					</div>
				</div>
				<div className="product-info-bottom">
					<div className="product-price">
					<span>$33349,00<label>/Month</label></span>
					</div>
				</div>
				
				</div>
				<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
				<div className="product-img">
					<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
					<div className="real-estate-agent">
					<div className="agent-img">
						<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
					</div>
					</div>
				</div>
				<div className="product-info">
					<div className="product-badge">
					<ul>
						<li className="sale-badg">For Sale</li>
					</ul>
					</div>
					<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
					<div className="product-img-location">
					<ul>
						<li>
						<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
						<a href="portfolio-details.html" title="Compare">
							<i className="flaticon-add" />
						</a>
						</li>
					</ul>
					</div>
				</div>
				<div className="product-info-bottom">
					<div className="product-price">
					<span>$33349,00<label>/Month</label></span>
					</div>
				</div>
				
				</div>
				<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
				<div className="product-img">
					<Link to="/shop"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
					<div className="real-estate-agent">
					<div className="agent-img">
						<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
					</div>
					</div>
				</div>
				<div className="product-info">
					<div className="product-badge">
					<ul>
						<li className="sale-badg">For Sale</li>
					</ul>
					</div>
					<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
					<div className="product-img-location">
					<ul>
						<li>
						<Link to="/shop"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
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
						<a href="portfolio-details.html" title="Compare">
							<i className="flaticon-add" />
						</a>
						</li>
					</ul>
					</div>
				</div>
				<div className="product-info-bottom">
					<div className="product-price">
					<span>$33349,00<label>/Month</label></span>
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
  )
}


export default ShopDetails