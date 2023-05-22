import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const InternetAlone = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}>
		<div className="ltn__about-us-area  go-top  pt-100 mb-40">
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
						
						<h1 className="section-title"><span>We don’t just rely on the Internet alone though  </span></h1>
						</div>
						<div className="about-us-info-wrap-inner about-us-info-devide---">
						<p>We make sure that you are getting the maximum exposure possible by making valuable contacts with the traditional press.   </p>
                        <p>We have print ads, which have been crafted by our creative team to reflect your home and give a memorable impression to potential buyers. When it is time to be seen by a huge audience, we make sure that you are receiving the maximum exposure possible.  </p>
						</div>
					
					</div>
					</div>
				</div>
				</div>
			</div>
	</div>
  )
}



    

   
		
  


export default InternetAlone