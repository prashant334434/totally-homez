import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class HighContent extends Component {

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
			                    <h1 className="slide-title animated "> <br /><span>HIGH-CONVERTING CONTENT ON DIGITAL CHANNELS  </span></h1>
			                    <div className="slide-brief animated">
                                <p>We focus on various digital channels in order to bring the message about your home to maximum reachable buyers </p>
            
                                  <p><span className='reddcoloringg'>Website listings</span>: We have a dedicated team that crafts the content on our website. This is a place where we showcase the best homes that are on the market and share valuable information about housing, real estate, and home buying. </p>
                                  <p ><span className='reddcoloringg'>Social Media Channels</span>: Facebook, Twitter, & LinkedIn are all avenues through which we target an audience of potential clients. We take time to craft the visuals, which will draw your potential buyers closer to the message you have to share.  </p>
                                  <p><span className='reddcoloringg'>Email Marketing</span>: We strive to get your email address out there in order to encourage further attention towards your property. </p>
                                  <p><span className='reddcoloringg'>Search & Mobile Ads</span>: The high-quality content, which is published on all channels, instantly reaches potential buyers to search engines and mobile advertisements. </p>
                                 

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

export default HighContent