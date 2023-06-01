import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { ABOUT_IMAGE_URL } from '../../constants/config';



const AboutV5 = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''

	return (
		<div className={customClass}>
			<div className="ltn__about-us-area pt-100  go-top  ">
				<div className="container">
					{
						props?.homePage?.map((homePage) => (
							<div key={homePage?.id} className="row">

								<div className="col-lg-5 align-self-center">
									<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
										<img src={`https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2022/08/04/3372656-574895850.jpg?itok=06dTZC_n`} alt="Image" />
									</div>
								</div>
								<div className="col-lg-7 align-self-center">
									<div className="about-us-info-wrap">
										<div className="section-title-area ltn__section-title-2--- mb-20">
											<h1 className="section-title" dangerouslySetInnerHTML={{ __html: homePage?.sec18_h }} />
											<p dangerouslySetInnerHTML={{ __html: homePage?.sec18_dsc }} />
										</div>
										{/* <div className="about-us-info-wrap-inner about-us-info-devide---">
											<p>They strive to continue to develop their real estate expertise by working hard to stay on top of local real estate trends and business developments, while also making sure they are up to date with the latest industry knowledge worldwide. </p>
										</div> */}
										<div className="btn-wrapper animated">
											<Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
										</div>
									</div>
								</div>
							</div>
						))
					}

				</div>
			</div>
		</div>
	)
}










export default AboutV5