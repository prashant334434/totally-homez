import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const WorkWithUs = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}>
		<div className="ltn__about-us-area go-top pt-70">
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
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Work With Us</h6>
						<h1 className="section-title">THE CAREER OF YOUR DREAMS! 
							<span>.</span></h1>
						<p>Do you want a career that allows you to have an exciting, interesting life? One with which you could chase after all your goals and afford the lifestyle you want? </p>
                        <p>Then you are on the right page. </p>
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

export default WorkWithUs


