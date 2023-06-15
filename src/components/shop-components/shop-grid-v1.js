import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';
import GoogleMap from '../section-components/GoogleMap';


const ShopGirdV1 = () => {
	let publicUrl = process.env.PUBLIC_URL+'/'

  return (
	<div>
			<div className="ltn__product-area ltn__product-gutter   mb-100">
				<div className="container">
				<h2 className="title-2">Property Location</h2>
				<GoogleMap/>

				</div>
			</div>
					


			</div>
  )
}


export default ShopGirdV1