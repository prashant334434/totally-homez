import React from 'react'

const BestPenthouse = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
    <div className={"ltn__about-us-area pt-80 pb-40"+customClass}>
    <div className="container">
      {props?.homePage?.map((item,index)=>(
        <div className="row" key={item.id}>
        <div className="col-lg-6">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-30">
              {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: item?.sec11_h }}/>
                  <p dangerouslySetInnerHTML={{ __html: item?.sec11_dsc }}/>
            
            </div>
            {/* <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
              <li>High-quality amenities</li>
              <li>Investment opportunities</li>
              <li>Easy access to transportation</li>
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
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before--- ltn__list-item-2-img mb-50">
              <li>
                <a href={publicUrl+"assets/img/img-slide/11.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/11.jpg"} alt="Image" />
                </a>
              </li>
              <li>
                <a href={publicUrl+"assets/img/img-slide/12.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/12.jpg"} alt="Image" />
                </a>
              </li>
              <li>
                <a href={publicUrl+"assets/img/img-slide/13.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/13.jpg"} alt="Image" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-us-img-wrap about-img-right">
            <img className='penthouseImage' src="/assets/img/02june/02june003.png" alt="About Us Image"  height="600px" width="500px"/>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  </div>
  )
}

export default BestPenthouse