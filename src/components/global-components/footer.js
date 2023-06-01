import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-4 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo.png"} alt="Logo" />
				              </div>
				            </div>
				            {/* <p>To Get In Touch</p> */}
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Office 103, Building 6 Bay Square Tower, Business Bay, Dubai, United Arab Emirates. PO Box: 418317</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
								 
				                    <p><a  href="tel:+97145548620">+971 54 289 7686</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:support@totallyhomerealestate.ae">sales@totallyhomerealestate.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Living LifeStyle </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link >Beachfront Properties</Link></li>
				                <li><Link >Waterfront Properties</Link></li>
				                <li><Link >Downtown Properties</Link></li>
				                <li><Link >Golf Course Properties</Link></li>
				                <li><Link >Island Living Properties</Link></li>
				                <li><Link >Green Nature Living Properties</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Navigate </h4>
				            <div className="footer-menu go-top">
				              <ul>
							  <li><Link >Best Property In Dubai</Link></li>
				                <li><Link >Off Plan Apartments </Link></li>
				                <li><Link >Off Plan Villas</Link></li>
				                <li><Link > Off Plan Townhouses</Link></li>
				                <li><Link >Brand New Apartments</Link></li>

								<li><Link >Brand New Villas</Link></li>

				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Community Guides </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link >Business Bay</Link></li>
				                <li><Link >Creek Harbour</Link></li>
				                <li><Link >Til Al Ghaf</Link></li>
				                <li><Link >La Mer</Link></li>
				                <li><Link >Bluewaters</Link></li>
				                <li><Link >Madinat Jumeirah Living </Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>

						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Explore </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link >Waterfront Properties for Sale</Link></li>
				                <li><Link >Waterfront Properties for Rent</Link></li>
				                <li><Link >Seaview Properties for Sale</Link></li>
				                <li><Link >Seaview Properties for Rent</Link></li>
				                <li><Link >Oceanview Properties for Sale</Link></li>
				                <li><Link >Oceanview Properties for Rent</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1