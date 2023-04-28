import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const AboutOffPlan = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'

  return (
    <div className="ltn__about-us-area pt-120 pb-90 ">
    <div className="container">
      <div className="row">
      <div className="col-lg-7 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-20">
              <h1 className="section-title">SO UPTOWN DUBAI
           </h1>


                <h3>
                Apartments, Duplexes & Penthouses <br/>

Get Project Brochure


Discover More <br/>
by Accor x DMCC in Uptown Dubai
                </h3>
              <p>
                
              SO/ Uptown Dubai Hotel & Residences is a 340-meter tower
offering residences, office spaces and hotel suites. Among
offered residences are 1–3 bedroom apartments, 2-bedroom
duplexes and two exclusive 3-bedroom penthouses for sale
                
                </p>
            </div>
            <div className="btn-wrapper animated go-top">
              <Link to="/service" className="theme-btn-1 btn btn-effect-1">DISCOVER MORE</Link>
              <Link to="/service" className="theme-btn-1 btn btn-effect-1">GET PROJECT BROCHURE</Link>

            </div>
            <ul className="ltn__list-item-half clearfix pt-80">
              
              <li>
                <i className="flaticon-mountain" />
                AED 1,780,000
                <br/>
                Starting Price


              </li>
              <li>
                <i className="flaticon-heart" />
                Easy 20/80 <br/> handover
                


</li>
              <li>
                <i className="flaticon-secure" />
                Q3 2023          
                
                <br/>
                Payment Plan


                    </li>
            </ul>
           
           

            <div className="btn-wrapper animated go-top">
            </div>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <div className="about-us-img-wrap about-img-left">
            <img src={publicUrl+"assets/img/others/7.png"} alt="About Us Image" />
            <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
              <div className="ltn__video-img ltn__animation-pulse1">
                <img src={publicUrl+"assets/img/others/8.png" } alt="video popup bg image" />
                <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default AboutOffPlan


