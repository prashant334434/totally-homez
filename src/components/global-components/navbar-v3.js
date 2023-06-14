import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';


const NavbarV3 = () => {
	const [activeMenuItem, setActiveMenuItem] = useState('');

	let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = 'logo'
		let anchor = '#'
		useEffect(() => {
			const currentPath = window.location.pathname;
			if (currentPath === '/') {
			  setActiveMenuItem('Home');
			} else if (currentPath === '/off-plan') {
			  setActiveMenuItem('off-plan');
			} else if (currentPath === '/rent') {
			  setActiveMenuItem('rent');
			}

			
		  }, []);

		  
  return (
	<div>
				<header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">

					<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="site-logo-wrap">
										<div className="site-logo go-top">
											<Link to="/"><img src={publicUrl + "assets/img/totallyhomeznewicon.png"} alt="Logo" /></Link>
										</div>
										<div className="get-support clearfix d-none">
											<div className="get-support-icon">
												<i className="icon-call" />
											</div>
											<div className="get-support-info">
												<h6>Get Support</h6>
												<h4><a href="tel:+123456789">123-456-789-10</a></h4>
											</div>
										</div>
									</div>
								</div>
								<div className="col header-menu-column menu-color-white">
									<div className="header-menu d-none d-xl-block go-top">
										<nav>
											<div className="ltn__main-menu">
												<ul>
													{/* <li ><a href="/">Home</a> */}
													{/* <ul className="sub-menu menu-pages-img-show">
									<li>
										<Link to="/">Home Style 01</Link>
										<img src={publicUrl+"assets/img/home-demos/home-1.jpg"} alt="#" />
									</li>
									<li>
										<Link to="/home-v2">Home Style 02</Link>
										<img src={publicUrl+"assets/img/home-demos/home-2.jpg"} alt="#" />
									</li>
									<li>
										<Link to="/home-v3">Home Style 03</Link>
										<img src={publicUrl+"assets/img/home-demos/home-3.jpg"} alt="#" />
									</li>
									<li>
									<Link to="/home-v4">Home Style 04</Link>
									<img src={publicUrl+"assets/img/home-demos/home-4.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></Link>
										<img src={publicUrl+"assets/img/home-demos/home-5.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/home-v6">Home Style 06</Link>
										<img src={publicUrl+"assets/img/home-demos/home-6.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/home-v7">Home Style 07</Link>
										<img src={publicUrl+"assets/img/home-demos/home-7.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/home-v8">Home Style 08</Link>
										<img src={publicUrl+"assets/img/home-demos/home-8.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/home-v9">Home Style 09</Link>
										<img src={publicUrl+"assets/img/home-demos/home-9.jpg" } alt="#" /> 
									</li>
									<li>
										<Link to="/home-v10">Home Style 10</Link>
										<img src={publicUrl+"assets/img/home-demos/home-11.jpg"}  alt="#" />
									</li>
			                    </ul> */}
													{/* </li> */}
													<li className={activeMenuItem === 'Home' ? 'active' : ''} ><Link to="/">Home</Link></li>
													<li className="menu-icon a-inactive"><Link to="#">Buy</Link>
														<ul>
															<li><Link to="/apartment-for-sale-dubai">Apartments </Link></li>

															<li><Link to="/villa-for-sale-dubai">Villas </Link></li>

															<li><Link to="/villa-for-sale-dubai" >Penthouses </Link></li>

															<li><Link to="/villa-for-sale-dubai" >Townhouses </Link></li>

															<li><Link to="#" >Off Plan </Link></li>

														</ul>
													</li>
													<li className="menu-icon a-inactive"><Link to="#">Rent</Link>
														<ul>
															<li className="menu-icon a-inactive-child"><Link to="#">Apartments </Link></li>

															<li className="menu-icon a-inactive-child"><Link to="#">Villas </Link></li>

															<li className="menu-icon a-inactive-child"><Link to="#" >Penthouses </Link></li>

															<li className="menu-icon a-inactive-child"><Link to="#">Townhouses </Link></li>
														</ul>
													</li>
													<li className={activeMenuItem === '/off-plan' ? 'active' :"menu-icon a-inactive"}><Link to="/off-plan">OffPlan</Link></li>

													<li className="menu-icon a-inactive" ><a href="#">Exclusive Properties </a>

													</li>
													<li className="menu-icon a-inactive"><Link to="#">Explore Dubai </Link></li>
													<li className="menu-icon a-inactive"><Link to="/about-us">Our Mission </Link></li>

													<li className="menu-icon a-inactive"><Link to="/contact-us">Contact</Link></li>
													{/* <li className="special-link">
			                    <Link to="/add-listing">Add Listing</Link>
			                  </li> */}
												</ul>
											</div>
										</nav>
									</div>
								</div>
								<div className="col--- ltn__header-options ltn__header-options-2 ">
									{/* Mobile Menu Button */}
									<div className="mobile-menu-toggle d-xl-none">
										<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
											<svg viewBox="0 0 800 600">
												<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
												<path d="M300,320 L540,320" id="middle" />
												<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
					<div className="ltn__utilize-menu-inner ltn__scrollbar">
						<div className="ltn__utilize-menu-head">
							<div className="site-logo">
								<Link to="/"><img src={publicUrl + "assets/img/totallyhomeznewicon.png"} alt="Logo" /></Link>
							</div>
							<button className="ltn__utilize-close">×</button>
						</div>
						<div className="ltn__utilize-menu-search-form">
							<form action={"#"}>
								<input type="text" placeholder="Search..." />
								<button><i className="fas fa-search" /></button>
							</form>
						</div>
						<div className="ltn__utilize-menu">
							<ul>
								<li className='active'><a href="#">Home</a>
									<ul className="sub-menu">
										<li><Link to="/">Home Style 01</Link></li>
										<li><Link to="/home-v2">Home Style 02</Link></li>
										<li><Link to="/home-v3">Home Style 03</Link></li>
										<li><Link to="/home-v4">Home Style 04</Link></li>
										<li><Link to="/home-v5">Home Style 05 <span className="menu-item-badge">video</span></Link></li>
										<li><Link to="/home-v6">Home Style 06</Link></li>
										<li><Link to="/home-v7">Home Style 07</Link></li>
										<li><Link to="/home-v8">Home Style 08</Link></li>
										<li><Link to="/home-v9">Home Style 09</Link></li>
										<li><Link to="/home-v10">Home Style 10</Link></li>
									</ul>
								</li>
								<li><Link to="/about">About</Link>
									<ul className="sub-menu">
										<li><Link to="/about">About</Link></li>
										<li><Link to="/service">Services</Link></li>
										<li><Link to="/service-details">Service Details</Link></li>
										<li><Link to="/portfolio">Portfolio</Link></li>
										<li><Link to="/portfolio-v2">Portfolio - 02</Link></li>
										<li><Link to="/portfolio-details">Portfolio Details</Link></li>
										<li><Link to="/team">Team</Link></li>
										<li><Link to="/team-details">Team Details</Link></li>
										<li><Link to="/faq">FAQ</Link></li>
										<li><Link to="/location">Google Map Locations</Link></li>
									</ul>
								</li>
								<li><Link to="/shop">Shop</Link>
									<ul className="sub-menu">
										<li><Link to="/shop">Shop</Link></li>
										<li><Link to="/shop-grid">Shop Grid</Link></li>
										<li><Link to="/shop-left-sidebar">Shop Left sidebar</Link></li>
										<li><Link to="/shop-right-sidebar">Shop Right sidebar</Link></li>
										<li><Link to="/product-details">Shop Details</Link></li>
										<li><Link to="/cart">Cart</Link></li>
										<li><Link to="/checkout">Checkout</Link></li>
										<li><Link to="/my-account">My Account</Link></li>
										<li><Link to="/login">Sign in</Link></li>
										<li><Link to="/register">Register</Link></li>
									</ul>
								</li>
								<li><Link to="/blog-grid">News</Link>
									<ul className="sub-menu">
										<li><Link to="/blog">News</Link></li>
										<li><Link to="/blog-grid">News Grid</Link></li>
										<li><Link to="/blog-left-sidebar">News Left sidebar</Link></li>
										<li><Link to="/blog-right-sidebar">News Right sidebar</Link></li>
										<li><Link to="/blog-details">News details</Link></li>
									</ul>
								</li>
								<li><Link to="#">Pages</Link>
									<ul className="sub-menu">
										<li><Link to="/about">About</Link></li>
										<li><Link to="/service">Services</Link></li>
										<li><Link to="/service-details">Service Details</Link></li>
										<li><Link to="/portfolio">Portfolio</Link></li>
										<li><Link to="/portfolio-2">Portfolio - 02</Link></li>
										<li><Link to="/portfolio-details">Portfolio Details</Link></li>
										<li><Link to="/team">Team</Link></li>
										<li><Link to="/team-details">Team Details</Link></li>
										<li><Link to="/faq">FAQ</Link></li>
										<li><Link to="/history">History</Link></li>
										<li><Link to="/add-listing">Add Listing</Link></li>
										<li><Link to="/locations">Google Map Locations</Link></li>
										<li><Link to="/404">404</Link></li>
										<li><Link to="/contact">Contact</Link></li>
										<li><Link to="/coming-soon">Coming Soon</Link></li>
									</ul>
								</li>
								<li><Link to="/contact-us">Contact</Link></li>
							</ul>
						</div>
						
						<div className="ltn__social-media-2">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
								<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
  )
}

export default NavbarV3


