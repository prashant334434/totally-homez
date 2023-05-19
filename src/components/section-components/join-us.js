import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class JoinUs extends Component {

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
			                    <h1 className="slide-title animated "> <br /><span>JOIN US </span></h1>
			                    <div className="slide-brief animated">
			                      <p>We promise our clients only the best, and for that, we hire only the best! </p>
								  <p>We are looking to hire motivated and talented people and add them to our team of winners. If you're interested in becoming a part of the best real estate company, we'd love to have a chat with you.  </p>

								  <p>We offer a friendly work environment where you will join the best - with cutting edge technologies, innovative ideas and emerging concepts that add value to our clients. We take utmost care of your long term interests by giving space for career growth and development through encouraging you to collaborate and share your ideas and aspirations.  </p>
                                  <p>Marking an inclusive space and providing equal opportunities to all is the keystone of Totally Home’s culture.  </p>
                                  <p>So if you're big on the concept of working in an exciting, dynamic and innovative environment and willing to embrace a brand new working experience in real estate, we invite you to join us!   </p>
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

export default JoinUs