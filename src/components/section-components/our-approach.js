import React from 'react'
import { Link } from 'react-router-dom'
import ApartmentV1 from './apartment-v1'

const OurApproach = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (

  <div className={customClass}>
  <div className="ltn__about-us-area pb-50  mt-50">
    <div className="container">
      <div className="row">
      <div className="col-lg-6 align-self-center">
          <div className="about-us-img-wrap about-img-right">
            <img src={"https://i.pinimg.com/564x/49/c1/96/49c196b728928fc9c51555fa31680c9c.jpg"} alt="About Us Image" />
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-30 ">
              {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
              <h1 className="section-title"><span>Our Approach</span>  </h1>
              <p>We work with our clients in a unique and personalized way, focusing on building trust through a mix of collaboration and transparency, while delivering our services in a swift and efficient manner.  </p>

              <p>We are a boutique real estate agency which means that we have the right staff to client ratio and we do not work with non professionals. We understand that our clients are the most important part of our company and thus devote enough time to them to make sure they get the best out of their experience with us. We always strive to provide them with the information they need in an accurate, transparent way.  </p>
            </div>
            {/* <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
              <li> Experience the ultimate in luxury with 24-hour concierge service</li>
              <li>Stay active with sports facilities, including tennis and golf courses</li>
              <li>Stay entertained with state-of-the-art entertainment facilities</li>
              
            </ul> */}
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
              <li><span>3 <i className="flaticon-bed" /></span>
                Bedrooms
              </li>
              <li><span>2 <i className="flaticon-clean" /></span>
                Bathrooms
              </li>
              <li><span>2 <i className="flaticon-car" /></span>
                Car parking
              </li>
              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
                square Ft
              </li>
            </ul> */}
     {/*      <div className="read-more">
	  <button className="btn theme-btn-1" >LEARN MORE</button>

      </div>*/}
         
          </div>
        </div>
        
      </div>
    </div>
    {/* <ApartmentV1/> */}
  </div>
  
  </div>
  )
}

export default OurApproach