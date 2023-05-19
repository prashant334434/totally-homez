import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const SellWithUs = (props) => {
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
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">SELL WITH US </h6>
						<h1 className="section-title">THE CAREER OF YOUR DREAMS! </h1>
						<p>Welcome to Totally Home Real Estate, where we offer a user-friendly and comprehensive platform for sellers to list their homes. Our goal is to make the selling process as convenient and efficient as possible for all parties involved.  </p>
                        <p>As a seller, you can trust Totally Home Real Estate to showcase your property to a wide audience of potential buyers. Our website is designed to maximize exposure for your home, ensuring that it gets the attention it deserves. We offer a variety of marketing tools and resources to help you showcase your property - including high-quality photos, virtual tours, and detailed property descriptions.  </p>
                        <p>With Totally Home Real Estate, you can easily upload and update your listing, track leads, and communicate with potential buyers. Our platform is designed to save you time and simplify the sales process so that the focus is on you! </p>
                        <p>Thank you for considering us as your partners. We pride ourselves in providing excellent customer service and will be there to support you every step of the way. We look forward to helping you get what you deserve! </p>
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

export default SellWithUs


