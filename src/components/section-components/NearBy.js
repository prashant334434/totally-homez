import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const NearBy = ({propertyDetails}) => {
	console.log("nearBy",propertyDetails)
	const nearByArray = propertyDetails?.property_near_by_place?.split(',');
console.log("nearByArray",nearByArray)
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

  return (
    <div className="ltn__category-area ltn__product-gutter section-bg-1--- ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Our Aminities</h6> */}
			          <h4 className="section-title">NearBy</h4>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__category-slider-active--- slick-arrow-1 go-top">
			     
				  {
					nearByArray?.map((near)=>(
						<div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
                      <center>
			            <span className="category-icon"><i className="fas fa-plane" /></span>
			            {/* <span className="category-number">02</span> */}
			            <span className="category-title">{near.trim()}</span>
			            {/* <span className="category-title">5 min</span> */}
			            {/* <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span> */}
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
                        </center>
			          </Link>
			        </div>
			      </div>
					))
				  }
			      
			     
			     
			    </div>
			  </div>
			</div>
  )
}

export default NearBy