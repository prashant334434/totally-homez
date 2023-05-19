import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const RightFit = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = props.customClass ? props.customClass :''
  return (
	<div><div className={ customClass } >
	<div className="container">
	  <div className="row">
		<div className="col-lg-12">
		  <div className="section-title-area ltn__section-title-2--- text-center">
			<h1 className="section-title"><span>You’re the right fit for Totally Home Real Estate, if:</span></h1>
		  </div>
		</div>
	  </div>
	  <div className="row ltn__custom-gutter--- justify-content-center go-top">
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			<div className="ltn__feature-info">
			 < Link  className="ltn__service-btn" to="/service-details">You want to work with successful mentors who are your role models</Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btn" to="/service-details">You want to work at an innovative, new age real estate company that has designed trusted relationships with all its clients. </Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btn" to="/service-details">You want to work in an environment that is fun, creative, and challenging. </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btn" to="/service-details">You want to be on a team of young, energetic and vibrant colleagues who are eternally furious and ready to achieve success. </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btn" to="/service-details">You want to be on a team of young, energetic and vibrant colleagues who are eternally furious and ready to achieve success.  </Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			  <Link className="ltn__service-btn" to="/service-details">You want to work in a team where you can grow at an expotential rate </Link>
			</div>
		  </div>
		</div>
        
	  </div>
	</div>
  </div></div>
  )
}



export default RightFit