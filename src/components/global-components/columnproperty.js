import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class ColumnProperty extends Component {

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
				  <div className="footer-top-area   plr--7">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/about">Akoya Oxygen</Link></li>
				                <li><Link to="/blog-grid">Al Barari</Link></li>
				                <li><Link to="/shop">Al Satwa</Link></li>
				                <li><Link to="/contact">Al Warqaa</Link></li>
				                <li><Link to="/faq">Culture Village</Link></li>
				                <li><Link to="/contact">Deira</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
	
				            <div className="footer-menu go-top">
				              <ul>
							  <li><Link to="/about-us">About</Link></li>
				                <li><Link to="/team">Team </Link></li>
				                <li><Link to="/blogs">Blogs</Link></li>
				                <li><Link to="/contact">Gallery</Link></li>
				                <li><Link to="/list-with-us"> Sell with us</Link></li>
				                <li><Link to="/career">Careers</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				           
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/my-account">My account</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact">Contact us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>

						<div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				          
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/my-account">My account</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact">Contact us</Link></li>
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


export default ColumnProperty