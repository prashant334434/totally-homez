import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const AboutV5 = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}>
		<div className="ltn__about-us-area  go-top  ">
				<div className="container">
				<div className="row">
					<div className="col-lg-5 align-self-center">
					<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
						<img src={publicUrl+"assets/img/service/11.jpg"} alt="Image" />
					</div>
					</div>
					<div className="col-lg-7 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6>
						<h1 className="section-title">The Leading Real Estate
							Rental Marketplace<span>.</span></h1>
						<p>Totally Home Realtors are a group of independent and professional property consultants that have a wealth of experience in providing real estate advice and guidance to their clients</p>
						</div>
						<div className="about-us-info-wrap-inner about-us-info-devide---">
						<p>They strive to continue to develop their real estate expertise by working hard to stay on top of local real estate trends and business developments, while also making sure they are up to date with the latest industry knowledge worldwide. </p>
						</div>
						<div className="btn-wrapper animated">
						<Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
	</div>
  )
}



    

   
		
  


export default AboutV5