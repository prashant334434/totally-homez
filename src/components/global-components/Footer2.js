import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer2 extends Component {

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
		let customClass =this.props.customClass ? this.props.customClass :''


        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-1 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-8 col-12">
						<div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Best Neighborhood </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/about">Arabian Ranches</Link></li>
				                <li><Link to="/blog-grid">Downtown Dubai</Link></li>
				                <li><Link to="/shop">Dubai Creek Harbour</Link></li>
				                <li><Link to="/contact">Dubai Hills Estate</Link></li>
				                <li><Link to="/faq">Dubai Marina</Link></li>
				                <li><Link to="/contact">Jumeirah Bay Island</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-8 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Living Lifestyle </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/about">Dubai Living</Link></li>
				                <li><Link to="/blog-grid">Beachfront</Link></li>
				                <li><Link to="/shop">Downtown</Link></li>
				                <li><Link to="/contact">Golf Course</Link></li>
				                <li><Link to="/faq">Island Living</Link></li>
				                <li><Link to="/contact">Green Nature Living</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-8 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Trending </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/cart">Dubai Penthouse for Sale</Link></li>
				                <li><Link to="/wishlist">Dubai Mansion for Sale</Link></li>
				                <li><Link to="/login">Dubai Villa for Sale</Link></li>
				                <li><Link to="/checkout">Houses for Sale in Dubai</Link></li>
				                <li><Link to="/about">Plot in Dubai</Link></li>
				                <li><Link to="/shop">Office for sale in Dubai</Link></li>
				                <li><Link to="/shop">Buy Ready Apartments in Dubai</Link></li>
				                {/* <li><Link to="/shop">Buy Ready Villas in Dubai</Link></li>
				                <li><Link to="/shop">Townhouse for Sale in Dubai</Link></li>
				                <li><Link to="/shop">Buy Ready Townhouses in Dubai</Link></li>
				                <li><Link to="/shop">Lands in Dubai for Sale</Link></li> */}
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-8 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">High Demand </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">
Dubai Penthouse for Rent








</Link></li>
				                <li><Link to="/my-account">Dubai Apartment for Rent</Link></li>
				                <li><Link to="/wishlist">Dubai Villa for Rent</Link></li>
				                <li><Link to="/add-listing">Office in Dubai for Rent</Link></li>
				                <li><Link to="/faq">Townhouse for Rent in Dubai</Link></li>
				                <li><Link to="/contact">Houses for Rent in Dubai</Link></li>
				                <li><Link to="/faq">Furnished Apartments for Rent</Link></li>
				                {/* <li><Link to="/faq">Furnished Villas for Rent</Link></li>
				                <li><Link to="/faq">Furnished Townhouses for Rent</Link></li> */}

				              </ul>
				            </div>
				          </div>
				        </div>
				     
				      </div>
				    </div>
				  </div>
				
				</footer>
        )
    }
}


export default Footer2