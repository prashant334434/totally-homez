import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const TakeCareEverything = (props) => {

let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'
  return (
	<div><div className={props?.customClass} >

			{
				props?.listWithUs?.map((item, index) => (
					<div key={item.id} className="container">
						<div className="row pt-40">
							<div className="col-lg-12">
								<div className="section-title-area ltn__section-title-2--- text-center">
									<h1 className="section-title"><span>{item?.sec14_h} </span></h1>

								</div>
							</div>
						</div>
						<div className="row ltn__custom-gutter--- justify-content-center go-top">
							<div className="col-lg-3 col-sm-6 col-12">
								<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
									<div className="ltn__feature-info">
										< Link className="ltn__service-btnn1" >{item?.sec14_b1}</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 col-12">
								<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">

									<div className="ltn__feature-info">
										< Link className="ltn__service-btnn1" >{item?.sec14_b2}</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 col-12">
								<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">

									<div className="ltn__feature-info">
										< Link className="ltn__service-btnn1" >{item?.sec14_b3}</Link>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-sm-6 col-12">
								<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">

									<div className="ltn__feature-info">
										< Link className="ltn__service-btnn1" >{item?.sec14_b4}</Link>
									</div>
								</div>
							</div>
						

						</div>
					</div>
				))
			}
		</div></div>  )
}

export default TakeCareEverything
