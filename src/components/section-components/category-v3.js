import React, { Component, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ApartmentV1 from './apartment-v1';
import AboutV4 from './about-v4';
import ProductGrid from '../shop-components/ProductGrid';
import ProductSliderV1 from './product-slider-v1';
import Video from '../section-components/video-v2';



const CategoryV3 = () => {
	let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'
const myDivRef = useRef(null);

useEffect(() => {
  if (myDivRef.current) {
	myDivRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, []);

const categories=["Villa","Apartment","Penthouse","Townhouse"]
	return (
		<>
			<div className="ltn__banner-area pt-120 go-top">
						<div className="container">
						<div className="row">
							<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Property</h6>
								<h1 className="section-title">Property By Categories</h1>
							</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-8 col-md-6">
							<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/2.jpg"} >                        
								<div className="ltn__banner-info">
								<h1><a className="categoryTitle" href="aboutV4"> Villa </a></h1>
								<p> Great Deals Available</p>
								
								</div>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/3.jpg"} >                        
								<div className="ltn__banner-info">
								<h3><Link className="categoryTitle" to="/shop">  Townhouse</Link></h3>
								<p> Great Deals Available</p>
								
								</div>
							</div>
							</div>
							<div className="col-lg-4 col-md-6">
							<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/7.jpg"} >                        
								<div className="ltn__banner-info">
								<h3><Link className="categoryTitle" to="/shop">  Apartment</Link></h3>
								<p> Great Deals Available</p>
								
								</div>
							</div>
							</div>
							<div className="col-lg-8 col-md-6">
							<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {publicUrl+"assets/img/gallery/8.jpg"} >                        
								<div className="ltn__banner-info">
								<h3><Link className="categoryTitle" to="/shop">  Penthouse</Link></h3>
								<p> Great Deals Available</p>
								
								</div>
							</div>
							</div>
							
						</div>
						</div>
					</div>
					<ProductGrid />
		
		<ApartmentV1 CustomClass="ltn__feature-area section-bg-3 pt-120 pb-90 mb-120---" />
		
		{/* <UpcomingProductV1 /> */}
		{  //      <BestVilla customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---" />
		}        <ProductSliderV1/>
		{/* <BestApartment customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}
		<>
		<Video  className=' pb-50'/>
		
		</>
		
		{/* <ProductSliderV1/> */}
		{/* <BestTownhouse customClass="ltn__feature-area section-bg-6 pt-40 pb-50 mb-120---"  />
		 */}
		 <div >
		 <AboutV4 />

		 </div>
		 <div id="aboutV4" ref={myDivRef}>
		 <ProductGrid />

		 </div>
		
		
			</>
			
			)
}



export default CategoryV3