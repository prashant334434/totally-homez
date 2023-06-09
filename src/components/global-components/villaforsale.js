import React from 'react'
import { Link } from 'react-router-dom';
import ColumnProperty from './columnproperty';

const VillaforSale = (props) => {
    let HeaderTitle = props.headertitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    let Subheader = props.subheader ? props.subheader : "Villa"
	let Subheader2 = props.subheader ? props.subheader : "Jumeirah"

	let Subheader3 = props.subheader ? props.subheader : "Garden Homes"
	let Subheader4 = props.subheader ? props.subheader : "Garden Homes Frond C"


    let CustomClass = props.customclass ? props.customclass : ''
  return (
    <div>
        	<div className={"ltn__breadcrumb-area text-left pt-200  "+CustomClass}  >
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ props?.propertyDetails?.property_type } For { props?.propertyDetails?.property_for } In Jumeirah Golf Estates</h1>
					<div className="ltn__breadcrumb-list">
					<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> { props?.propertyDetails?.property_city }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_for }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_type }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_community }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_sub_community }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_level }</Link></li>
						
						<li><Link to="/">{"TH"}{ props?.propertyDetails?.id }</Link></li>



						</ul>
					</div>
					</div>
					
					
				</div>
		
				</div>
			</div>
		</div>
		
    </div>
  )
}

export default VillaforSale