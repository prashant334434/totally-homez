import React from 'react'
import { Link } from 'react-router-dom'
import ApartmentV1 from './apartment-v1'
import { ABOUT_IMAGE_URL } from '../../constants/config'

const CommunityContentSection = (props) => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  let customClass = props.customClass ? props.customClass : ''

  return (

    <div className={customClass}>
      <div className="ltn__about-us-area">
       
        <div className="container">
          {
            props?.aboutUsData?.map((about) => (
              <div className="row pt-100">
                <div className="container-fluid">
          </div>
                <div className="col-lg-6">
            <h1 className="page-title">Community Guideline</h1>

                  <div className="about-us-info-wrap">
                    <div className="section-title-area ltn__section-title-2---  ">
                      {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
                      {/* <h1 className="section-title"><span>Our Vision</span>  </h1> */}
                      <p>{about?.vision_dsc} </p>

                      {/* <p>We aspire towards becoming a market leader, driven by an enormous passion for real estate which sets us apart from our competitors. </p> */}
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
                <div className="col-lg-6 ">
                  <div className="about-us-img-wrap about-img-right">
                    <img src={`https://www.timeoutdubai.com/cloud/timeoutdubai/2022/12/30/image.png`} alt="About Us Image" />
                  </div>
                </div>


              </div>
            ))
          }

        </div>
        {/* <ApartmentV1/> */}
      </div>

    </div>
  )
}

export default CommunityContentSection