import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class RecruitmentProcess extends Component {

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
			                    <h1 className="slide-title animated "> <br /><span>THE RECRUITMENT PROCESS  </span></h1>
			                    <div className="slide-brief animated">
                                <h1 className="slide-title animated "> <br />Our recruitment process is fairly simple Anthony.We look for the following qualities in our employees  </h1>
								  <p>A blend of soft skills and interpersonal skills which will enable them to build rapport with all their clients.   </p>

								  <p>And analytical skill set which enables them to decipher the needs of their clients and deliver on those.</p>
                                  <p> service mentality which enables them to give their best every time they are in front of a client.   </p>
                                  <h2 className="slide-title animated ">We will then test you on our core values and see if you have the drive and commitment that is required for our profession. If that's you, we will then conduct a skills assessment where we will test your knowledge in areas like marketing, technology, Internet research, networking, real estate, market trends, operations, lease negotiation and management and financial planning.  </h2>
                                  <h1 className="slide-title animated "> <br />We do this because this is only going to help you in your real estate career over the long term. </h1>

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

export default RecruitmentProcess