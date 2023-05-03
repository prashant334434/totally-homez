import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';





const TeamDetails = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <div> <div className="ltn__team-details-area mb-120 pt-150">
    <div className="container">
    <div className="row">
        
        <div className="col-lg-8">
        <div className="ltn__team-details-member-info-details">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="row">
            <div className="col-lg-6">
                <div className="ltn__team-details-member-about">
                <ul>
                    <li><strong>Positions:</strong> Senior Property Seller</li>
                    <li><strong>Experience:</strong> 10+ Years</li>
                    <li><strong>Location:</strong> 13/A, NYC</li>
                    <li><strong>Practice Area:</strong> Property Seller</li>
                </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="ltn__team-details-member-about">
                <ul>
                    <li><strong>Email:</strong> example@example.com</li>
                    <li><strong>Fax:</strong> +0123-456 789</li>
                    <li><strong>Phone:</strong> +0123-456 789</li>
                </ul>
                </div>
            </div>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <div className="row ltn__custom-gutter mt-50 mb-20">
            {/* <div className="col-xl-4 col-sm-6 col-12 go-top">
                <div className="ltn__feature-item ltn__feature-item-6 text-center">
                <div className="ltn__feature-icon">
                    <span><i className="icon-tire" /></span>
                </div>
              
                </div>
            </div>
            */}
          
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p> */}
          
        </div>
        </div>
        <div className="col-lg-4">
        <div className="ltn__team-details-member-info text-center mb-40">
            <div className="team-details-img">
            <img src={publicUrl+"assets/img/team/4.jpg"} alt="Team Member Image" />
            </div>
            <center>
            <h2>Rosalina D. William</h2>

            <h6 className="text-uppercase ltn__secondary-color">Property Seller</h6>
            <div className="ltn__social-media-3">
            <ul>
                <li><a href="#" title="Facebook"><i style={{fontSize:"1.5rem"}} className="fab fa-facebook-f" /></a></li>
                <li><a href="#" title="Twitter"><i style={{fontSize:"1.5rem"}}  className="fab fa-twitter" /></a></li>
                <li><a href="#" title="Linkedin"><i style={{fontSize:"1.5rem"}} className="fab fa-linkedin" /></a></li>
            </ul>
            </div>
            </center>
        </div>
        <div className="ltn__form-box contact-form-box box-shadow white-bg mt-50 ">
            <h4 className="title-2">Contact Me</h4>
            <form id="contact-form" action="mail.php" method="post">
                <div className="row">
                <div className="col-md-12">
                    <div className="input-item input-item-name ltn__custom-icon">
                    <input type="text" name="name" placeholder="Enter your name" />
                    </div>
                </div>
                {/* <hr/> */}
                <div className="col-md-12">
                    <div className="input-item input-item-email ltn__custom-icon">
                    <input type="email" name="email" placeholder="Enter email address" />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-item">
                    <select className="nice-select">
                        <option>Select Service Type</option>
                        <option>Property Management </option>
                        <option>Mortgage Service </option>
                        <option>Consulting Service</option>
                        <option>Home Buying</option>
                        <option>Home Selling</option>
                        <option>Escrow Services</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="input-item input-item-phone ltn__custom-icon">
                    <input type="text" name="phone" placeholder="Enter phone number" />
                    </div>
                </div>
                </div>
                <div className="input-item input-item-textarea ltn__custom-icon">
                <textarea name="message" placeholder="Enter message" defaultValue={""} />
                </div>
                {/* <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p> */}
                <center>
                <div className="btn-wrapper mt-0">
                <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit</button>
                </div>
                </center>
                {/* <p className="form-messege mb-0 mt-20" /> */}
            </form>
            </div>
        </div>
        
            <hr/>

            <div className="ltn__product-area ltn__product-gutter mb-100">
				<div className="container">
					<h4 className="title-2">Related Property</h4>

						<div className="row">
							<div className="col-lg-12">
							
							<div className="tab-content ">
								<div className="tab-pane fade active show" id="liton_product_grid">
								<div className="ltn__product-tab-content-inner ltn__product-grid-view">
									<div className="row">
								
									{/* ltn__product-item */}
									<div className="col-lg-4 col-sm-6 col-12">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img">
											<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
											<div className="real-estate-agent">
											<div className="agent-img">
												<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											</div>
										</div>
										<div className="product-info">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Rent</li>
											</ul>
											</div>
											<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
											<div className="product-img-location">
											<ul>
												<li className="go-top">
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
												</li>
											</ul>
											</div>
											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
												Bedrooms
											</li>
											<li><span>2 </span>
												Bathrooms
											</li>
											<li><span>3450 </span>
												square Ft
											</li>
											</ul>
											<div className="product-hover-action">
											<ul>
												<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
													<i className="flaticon-expand" />
												</a>
												</li>
												<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
													<i className="flaticon-heart-1" /></a>
												</li>
												<li>
												<span className="go-top">
												<Link to="/product-details" title="Product Details">
													<i className="flaticon-add" />
												</Link>
												</span>
												</li>
											</ul>
											</div>
										</div>
										<div className="product-info-bottom">
											<div className="product-price">
											<span>$34,900<label>/Month</label></span>
											</div>
										</div>
										</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-4 col-sm-6 col-12">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img">
											<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
											<div className="real-estate-agent">
											<div className="agent-img">
												<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											</div>
										</div>
										<div className="product-info">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Sale</li>
											</ul>
											</div>
											<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
											<div className="product-img-location">
											<ul>
												<li className="go-top">
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
												</li>
											</ul>
											</div>
											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
												Bedrooms
											</li>
											<li><span>2 </span>
												Bathrooms
											</li>
											<li><span>3450 </span>
												square Ft
											</li>
											</ul>
											<div className="product-hover-action">
											<ul>
												<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
													<i className="flaticon-expand" />
												</a>
												</li>
												<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
													<i className="flaticon-heart-1" /></a>
												</li>
												<li>
												<span className="go-top">
												<Link to="/product-details" title="Product Details">
													<i className="flaticon-add" />
												</Link>
												</span>
												</li>
											</ul>
											</div>
										</div>
										<div className="product-info-bottom">
											<div className="product-price">
											<span>$34,900<label>/Month</label></span>
											</div>
										</div>
										</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-lg-4 col-sm-6 col-12">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
										<div className="product-img">
											<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/3.jpg"} alt="#" /></Link>
											<div className="real-estate-agent">
											<div className="agent-img">
												<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											</div>
										</div>
										<div className="product-info">
											<div className="product-badge">
											<ul>
												<li className="sale-badg">For Rent</li>
											</ul>
											</div>
											<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
											<div className="product-img-location">
											<ul>
												<li className="go-top">
												<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
												</li>
											</ul>
											</div>
											<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
											<li><span>3 </span>
												Bedrooms
											</li>
											<li><span>2 </span>
												Bathrooms
											</li>
											<li><span>3450 </span>
												square Ft
											</li>
											</ul>
											<div className="product-hover-action">
											<ul>
												<li>
												<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
													<i className="flaticon-expand" />
												</a>
												</li>
												<li>
												<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
													<i className="flaticon-heart-1" /></a>
												</li>
												<li>
												<span className="go-top">
												<Link to="/product-details" title="Product Details">
													<i className="flaticon-add" />
												</Link>
												</span>
												</li>
											</ul>
											</div>
										</div>
										<div className="product-info-bottom">
											<div className="product-price">
											<span>$34,900<label>/Month</label></span>
											</div>
										</div>
										</div>
									</div>
									{/* ltn__product-item */}
								
									{/* ltn__product-item */}
									
									{/* ltn__product-item */}
									
									{/*  */}
									</div>
								</div>
								</div>
								
							</div>
						
							</div>
						</div>
				</div>
			</div>
    </div>
    </div>
</div></div>
  )
}


export default TeamDetails