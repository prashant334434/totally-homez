import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const BlogUpfrontDetails = (props) => {
	let customClass = props.customClass ? props.customClass : ''
	let publicUrl = process.env.PUBLIC_URL + '/'
	return (
		<div className="ltn__blog-area">
			<div className="container">
				<center>
					<h1>SO/ Uptown Dubai Hotel & Residences
					</h1>
				</center>
				<div className="row">
					<div className="col-lg-7">
						<div className="ltn__blog-list-wrap">
							{/* Blog Item */}
							<div className="ltn__blog-item ltn__blog-item-5 go-top">
								<div className="ltn__blog-img">
									<Link to="/blog-details"><img src={publicUrl + "assets/img/service/22.jpg"} alt="Image" /></Link>
								</div>

							</div>
							{/* Blog Item (Video) */}

							{/* Blog Item (Gallery) */}

							{/*  */}
						</div>

					</div>


					<div className="col-lg-5">
						<div className="ltn__blog-list">
							{/* Blog Item */}
							<div className="ltn__blog-item ltn__blog-item-5 go-top">

								<div className="ltn__blog-brief">

									<p>

										SO/ Uptown Dubai Hotel & Residences is a 340-metre mixed-used tower by DMCC, which will be located in Uptown Dubai, which is within close proximity to Dubai Marina and Jumeirah Park. Adrian Smith + Gordon Gill Architecture is responsible for the design of the project.
									</p>
									<p>
										The luxurious tower of SO/ Uptown Dubai will be inspired by diamonds and brilliance, and will offer 22 floors of office space, 10 floors of SO/ Uptown Hotel with 188 rooms and 28 floors with 227 apartments of SO/ Uptown Dubai Residences.
									</p>

									<p>
										The modern residences will be provided with fascinating views of the Dubai skyline, and Ain Dubai. Among the units to choose from are 1–3 bedroom apartments, 2-bedroom duplexes and 3-bedroom penthouses. Bedrooms are provided with built-in wardrobes, while in some residences master bedrooms come with walk-in-closets. Selected units also come with a maid’s room, and 1-2 parking spaces are dedicated to each residence.
									</p>


								</div>
								<div className="btn-wrapper animated go-top">
              <Link to="/service" className="theme-btn-1 btn btn-effect-1">Request Avaliable Units and Prices</Link>

            </div>
							</div>
							{/* Blog Item (Video) */}

							{/* Blog Item (Gallery) */}

							{/*  */}
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}


export default BlogUpfrontDetails;
