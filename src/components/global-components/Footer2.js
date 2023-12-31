import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer2 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"
		let customClass = this.props.customClass ? this.props.customClass : ''


		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-1 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-3 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h2 className="footer-title">Best Neighborhood </h2>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="#" >Downtown Dubai</Link></li>
											<li><Link to="#">Palm Jumeirah</Link></li>
											<li><Link to="#">Emaar Beachfront</Link></li>
											<li><Link to="#">Dubai Hills Estate</Link></li>
											<li><Link to="#" >Dubai Marina</Link></li>
											<li><Link to="#" >Jumeirah Beach Residence</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h2 className="footer-title">Luxury </h2>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="#">Luxury Properties For Sale</Link></li>
											<li><Link to="#" >Luxury Properties For Rent</Link></li>
											<li><Link to="#">Luxury Penthouses For Sale</Link></li>
											<li><Link to="#">Luxury Penthouses For Rent</Link></li>
											<li><Link to="#" >Luxury Villas For Sale</Link></li>
											<li><Link to="#">Luxury Villas For Rent</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h2 className="footer-title">Trending </h2>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="#">Exclusive Properties</Link></li>
											<li><Link to="#" >Investment Property</Link></li>
											<li><Link to="#" >Investment Opportunities</Link></li>
											<li><Link to="#" >Off plan Villa Projects</Link></li>
											<li><Link to="#">Off Plan Apartment Projects</Link></li>
											<li><Link to='#'>Off Plan Townhouse Projects</Link></li>
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
									<h2 className="footer-title">Furnished </h2>
									<div className="footer-menu go-top">
										<ul>
											
											<li><Link to='#'>Furnished Villas For Sale</Link></li>
											<li><Link to="#">Furnished Villas For Rent</Link></li>
											<li><Link to="#" >Furnished Apartments For Sale</Link></li>
											<li><Link to="#">Furnished Apartments For Rent</Link></li>
											<li><Link to="#">Furnished Townhouses For Sale</Link></li>
											<li><Link to="#">Furnished Townhouses For Rent</Link></li>
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