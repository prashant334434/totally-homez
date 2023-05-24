// import { Link } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const ShopContent = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'

  return (
    <div className="ltn__about-us-area pt-200">
    <div className="container">
    <div className="row">
    <div className="col-lg-4 align-self-center pb-200">
        <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-20">
            {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Town House</h6> */}
            <h1 className="section-title">Live in style and comfort with our spacious townhouses
                <span>.</span></h1>
            <p>Over 39,000 people work for us in more than 70 countries all over the
                This breadth of global coverage, combined with specialist services</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
            
            
            {/* <div className="btn-wrapper animated">
            <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
            </div> */}
        </div>
        </div>
    <div className="col-lg-8 align-self-center">
        <div className="about-us-img-wrap about-img-left">
        <div className="ltn__banner-area">
				<div className="container">
				<div className="row">
				
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2019/03/17114621/Beach-Villa-swimming-pool.jpg"} >                        
						<div className="ltn__banner-info">
						<h1><Link to="/property/villa" className="categoryTitle" href="#aboutV4"> Villa </Link></h1>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://static.propsearch.ae/dubai-locations/verdana-townhouses_g26IB_xl.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link className="categoryTitle" to="/property/townhouse">  Townhouse</Link></h3>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://assets.cntraveller.in/photos/60b9ed9c13fda2fd38ad7756/master/pass/Intercon%202-987142274-1366x768.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link className="categoryTitle" to="/property/apartment">  Apartment</Link></h3>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					<div className="col-lg-8 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://thepenthouse.co/wp-content/uploads/2022/05/dubai-1.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link className="categoryTitle" to="/property/penthouse">  Penthouse</Link></h3>
						{/* <p> Great Deals Available</p> */}
						
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
</div>
  )
}

export default ShopContent
