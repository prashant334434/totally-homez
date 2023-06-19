import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ApartmentV1 from './apartment-v1';
let publicUrl = process.env.PUBLIC_URL + '/'
let imagealt = 'image'
const VideoV2 = ({ homePage }) => {
	return (
		<div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120">
			<div className="container">
				{
					homePage?.map((item, index) => (
						<div className="row" key={item.id}>
							<div className="col-lg-6 align-self-center">
								<div className="about-us-info-wrap">
									<div className="section-title-area ltn__section-title-2--- mb-20">
										<h2 className="section-subtitle section-subtitle-2--- ltn__secondary-color"   dangerouslySetInnerHTML={{ __html: item?.sec8_h }}/>
										<p dangerouslySetInnerHTML={{ __html: item?.sec8_dsc }} />
									</div>
									{/* { <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
							  <li>
								<i className="icon-done" />
								Living rooms are pre-wired for Surround
							  </li>
							  <li>
								<i className="icon-done" />
								Luxurious interior design and amenities
							  </li>
							  <li>
								<i className="icon-done" />
								Nestled in the Buckhead Vinings communities
							  </li>
							  <li>
								<i className="icon-done" />
								Private balconies with stunning views
							  </li>
							  <li>
								<i className="icon-done" />
								A rare combination of inspired architecture
							  </li>
							  <li>
								<i className="icon-done" />
								Outdoor grilling with dining court
							  </li>
							</ul>} */}
									<div className="  ltn__animation-pulse2 text-center mt-30">
										<a className="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/watch?v=d1swIKTspDw" target='blank' data-rel="lightcase">
											<i className="icon-play  ltn__secondary-color--- white-color" />
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6 align-self-center">
								<div className="about-us-img-wrap about-img-left">
								</div>
							</div>

						</div>
					))
				}

			</div>

		</div>)
}

export default VideoV2
