import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const ServiceV5 = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
  return (
	<div className="ltn__service-area  pt-115 pb-70 go-top">
				<div className="container">
				{props?.aboutUsData?.map((about)=>(
					<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">{about?.service_h}</h6>
						<h1 className="section-title"> {about?.service_h2}</h1>
					</div>
					</div>
					<div className="row  justify-content-center">
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{about?.service_b1_h}</Link></h3>
						<p>{about?.service_b1_dsc}</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-mortgage" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{about?.service_b2_h}</Link></h3>
						<p>{about?.service_b2_dsc}</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-operator" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">{about?.service_b3_h} </Link></h3>
						<p>{about?.service_b3_dsc}</p>
						</div>
					</div>
					</div>
				
				</div>
				</div>
				
				))}
				
			
				</div>
			</div>
  )
}



export default ServiceV5