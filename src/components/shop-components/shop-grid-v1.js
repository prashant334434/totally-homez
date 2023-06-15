import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';
import GoogleMap from '../section-components/GoogleMap';


const ShopGirdV1 = () => {
	let publicUrl = process.env.PUBLIC_URL+'/'

  return (
	<GoogleMap/>
  )
}


export default ShopGirdV1