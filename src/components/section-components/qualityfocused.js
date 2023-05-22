import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const QualityFocusedCreation = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = props.customClass ? props.customClass :''
  return (
	<div><div className={ customClass } >
	<div className="container">
	  <div className="row">
		<div className="col-lg-12">
		  <div className="section-title-area ltn__section-title-2--- text-center">
			<h1 className="section-title"><span>QUALITY FOCUSED CREATION  </span></h1>
            
		  </div>
		</div>
	  </div>
	  <div className="row ltn__custom-gutter--- justify-content-center go-top">
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			<div className="ltn__feature-info">
			 < Link  className="ltn__service-btnn1" to="/service-details">Our Photography and Videography Team - We believe that a combination of ‘Still’ and ‘Motion’ photography will give you an impactful experience of your property. Our stills are high resolution and when combined with zooming capabilities on our website give an incredible buying experience for potential clients</Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn1" to="/service-details">Our Content Team - The content of your listing is one of the most important aspects to consider when marketing your home online. We have a dedicated team that works hard to create customized content based on our client’s needs and wants. This helps us ensure that the content is not just relevant but also engaging, helping establish a connection between you and the potential buyers.   </Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn1" to="/service-details">Social Media Marketing Team - Social Media is an important aspect of marketing. Exposure on various social media channels helps our listings reach a wider audience, and we take immensely innovative measures to make your listing stand out from the rest! In a sea of generic content, your listing will attract the right kind of people. </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn1" to="/service-details">3D Modeling Team - Virtual Tours have become an all-important aspect of the online real estate experience. 3D visits allow buyers to experience products online as if they are actually there. Our team takes extreme care while creating such 3D models, that are not only accurate but also appealing.    </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn1" to="/service-details">Our Graphics Team - Our Graphics Experts are extremely talented and make sure that your listings always stand out from the rest! They are the real heroes behind all the attractive and appealing marketing we do. That is why our library is jam-packed with the highest quality content and images of your property, woven together with innovative graphics in one place.    </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn1" to="/service-details">PR Experts - The PR team not only helps us to create a buzz around your listing but also ensures that you receive maximum exposure from major media channels such as print, video, and online.   </Link>
			</div>
		  </div>
		</div>
        
	  </div>
	</div>
  </div></div>
  )
}



export default QualityFocusedCreation