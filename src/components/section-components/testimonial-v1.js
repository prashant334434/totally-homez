import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


 
 
 const Testimonial = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
	let imagealt = 'image'
	
   return (
	<div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">WHAT MAKES US A GREAT WORKPLACE? </h6>
			          <h1 className="section-title">We support our employees by not only compensating them lucratively for the work they do, but by constantly having their backs and bolstering their daily working lives through: </h1>
			        </div>
			      </div>
			    </div>
				{
						props?.careerData?.map((item, index) => (
							<div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-3">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p>
						{item?.make_us_s1} </p>
			         
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-3">
				  <div className="ltn__testimonial-item ltn__testimonial-item-7">
					<div className="ltn__testimoni-info">
					  <p>
					  {item?.make_us_s2} </p>
					
					</div>
				  </div>
				</div>
				<div className="col-lg-3">
				<div className="ltn__testimonial-item ltn__testimonial-item-7">
				  <div className="ltn__testimoni-info">
					<p>
					{item?.make_us_s3}</p>
					
				  </div>
				</div>
			  </div>
			  <div className="col-lg-3">
			  <div className="ltn__testimonial-item ltn__testimonial-item-7">
				<div className="ltn__testimoni-info">
				  <p>
				  {item?.make_us_s4}</p>
				  
				</div>
			  </div>
			</div>
		
	
			     
			   
			    </div>
						))}
			  
			  </div>
			</div>
   )
 }
 

 
export default Testimonial