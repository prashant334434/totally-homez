import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const BenefitsofListing = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = props.customClass ? props.customClass :''
  return (
	<div><div className={ customClass } >
	<div className="container">
	  <div className="row">
		<div className="col-lg-12">
		  <div className="section-title-area ltn__section-title-2--- text-center">
			<h1 className="section-title"><span>BENEFITS OF LISTING WITH US </span></h1>
		  </div>
		</div>
	  </div>
	  <div className="row ltn__custom-gutter--- justify-content-center go-top">
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			<div className="ltn__feature-info">
			 < Link  className="ltn__service-btnn" to="/service-details">You want to work with successful mentors who are your role models</Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn" to="/service-details">Seamless execution - Most agents would say that some hiccups are bound to arise in the selling process. That it is inevitable. Not us! We offer seamless execution from start to finish.  </Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn" to="/service-details">Large Audience - Since we work with global partners, you can be sure that your home will reach a larger audience of potential buyers. We offer extensive reach and an exciting database of potential buyers </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn" to="/service-details">Speed and Efficiency - Unlike many real estate agents who may take days or weeks to get your home listed, you can expect us to do it in just minutes. We make the process seamless and fast while offering excellent customer support service every step of the way.   </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn" to="/service-details">Cutting-Edge Marketing - Our website’s powerful search tools allow sellers to advertise their homes effectively, ensuring they reach more buyers than anywhere else online. Our marketing strategies will help you get results in a matter of minutes!   </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btnn" to="/service-details">Legal and Tax Support - We are here to support you in every way. We guide you through the entire process, ensuring that you receive legal and tax support as well as expert advice. We will help answer all your questions so that you can get your home sold.   </Link>
			</div>
		  </div>
		</div>
        
	  </div>
	</div>
  </div></div>
  )
}



export default BenefitsofListing