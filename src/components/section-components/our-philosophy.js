import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class OurPhilosophy extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1 mt-100">
			  <div className="ltn__slider-11-inner">
			    <div className="ltn__slider-11-active">
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                  {/*  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>*/}
			                    <h1 className="slide-title animated "> <br /><span>Our Philosophy  </span></h1>
			                    <div className="slide-brief animated">
			                      <p>We are passionate about the real estate profession, which is why we ensure that our employees are equipped with the skills they need to succeed, for example:  </p>
								  <p>We ensure that our employees have the right education and certifications before joining the company.   </p>

								  <p>We make sure that our employees are trained in the latest industry trends through regular training sessions conducted by industry experts.   </p>
                                  <p>We not only train our employees, but also provide them with additional resources such as best practices of the industry, real estate trends and strategies, and marketing strategies  </p>
                                  <p>We provide our employees with high quality software so that they manage their business marketing campaigns and their clients efficiently.    </p>
                                  <p>We are always available to assist our agents in any way possible. Whenever they have a problem or need help, we are there to help and support them</p>
                                  <p>We reward our team members clearly, which allows them to focus on the job and achieve their targets much better. </p>
                                  <p>We give our agents the freedom to use any of the cutting edge technology they wish as part of their daily work.  </p>
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/61.jpg"} alt="#" />
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    
			    
			    </div>
			   
			  </div>
			</div>

        }
}

export default OurPhilosophy