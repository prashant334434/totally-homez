import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const AboutV4 = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}>
		<div className="ltn__about-us-area go-top">
				<div className="container">
				<div className="row">
				<div className="col-lg-6 align-self-center">
					<div className="about-us-img-wrap about-img-left">
						<img src={publicUrl+"assets/img/others/13.png"} alt="About Us Image" />
						<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
						<div className="ltn__video-img ltn__animation-pulse1">
							<img src={publicUrl+"assets/img/others/8.png"} alt="video popup bg image" />
							<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
							<i className="fa fa-play" />
							</a>
						</div>
						</div>
					</div>
					</div>
				<div className="col-lg-6 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Town House</h6>
						<h2 className="section-title">Live in style and comfort with our spacious townhouses
							<span>.</span></h2>
						<p>Over 39,000 people work for us in more than 70 countries all over the
							This breadth of global coverage, combined with specialist services</p>
						</div>
						
						
						{/* <div className="btn-wrapper animated">
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
						</div> */}
					</div>
					</div>
					
					
				</div>
				</div>
			</div>
	</div>
  )
}

export default AboutV4


