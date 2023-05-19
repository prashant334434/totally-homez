import React from 'react'
import { Link } from 'react-router-dom'
import ApartmentV1 from './apartment-v1'

const OurCulture = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (

  <div className={customClass}>
  <div className="ltn__about-us-area pb-50 pt-20 mt-50 section-bg-1">
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
              <h1 className="section-title"><span>Our Culture </span>  </h1>
              <p>Totally Home Real estate nurtures a fast-paced yet loosely structured environment that allows you to be yourself whilst working in a team of similarly-minded colleagues. This is achieved through the following core values:  </p>
              <p><span className='reddcoloringg'>Commitment</span> - We commit ourselves to doing our best every day, and we commit to building an innovative, versatile and efficient organization that can meet the ever changing needs of our clients</p>
              <p><span className='reddcoloringg'>Innovation </span> - We believe in inventing new ways of bringing value to our customers by putting ourselves in their shoes and keeping our mind open for new ideas, styles and perspectives.</p>
              <p><span className='reddcoloringg'>Empathy  </span> - We listen carefully so that we can understand where each of us stands before making decisions, so you will never feel uncomfortable or ignored.</p>
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

export default OurCulture