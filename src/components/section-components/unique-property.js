import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UniqueProperty extends Component {

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
			                    <h1 className="slide-title animated "> <br /><span>Our Unique Property Folder Feature  </span></h1>
			                    <div className="slide-brief animated">
			                      <p>We offer a unique property folder - a prospectus of sorts, which is basically a pocket in our database that contains all the details about your property. It can include your property listing, videos as well as photos, a virtual tour, and even a description of the property. </p>
								  <p>This is an uncluttered page, which is a great way to showcase your property to the world.   </p>

                                  <p>You will find this page very interesting because it allows you to give detailed information about the home that buyers want while saving yourself a lot of time by giving them everything they need at once at one place. It also gives you the ability to provide extra content that is specific to your home  </p>
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

export default UniqueProperty