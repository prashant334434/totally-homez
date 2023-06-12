import React from 'react'
import { Link } from 'react-router-dom';

const PageHead = (props) => {
    let HeaderTitle = props.headertitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    let Subheader = props.subheader ? props.subheader : "Villa"
	let Subheader2 = props.subheader ? props.subheader : "Jumeirah"

	let Subheader3 = props.subheader ? props.subheader : "Garden Homes"
	let Subheader4 = props.subheader ? props.subheader : "Garden Homes Frond C"


    let CustomClass = props.customclass ? props.customclass : ''
  return (
    <div>
        	<div className={"ltn__breadcrumb-area text-left   "+CustomClass} >
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title" dangerouslySetInnerHTML={{ __html: props?.propertyDetails?.property_name }}></h1>
					<div className="ltn__breadcrumb-list">
						

						{ props?.propertyDetails?.property_level ? (
							<ul>
						<li><Link to={`/${property_city}/${property_community}/${property_sub_community}/${property_type}-for-${property_for}-${property_level}`}><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> { props?.propertyDetails?.property_city }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_for }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_type }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_community }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_sub_community }</Link></li>
						<li><Link to="/level-page">{ props?.propertyDetails?.property_level }</Link></li>
						
						<li>{"TH"}{ props?.propertyDetails?.id }</li>



						</ul>
						):(
							<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> { props?.propertyDetails?.property_city }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_for }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_type }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_community }</Link></li>
						<li><Link to="/">{ props?.propertyDetails?.property_sub_community }</Link></li>
					
						
						<li>{"TH"}{ props?.propertyDetails?.id }</li>



						</ul>
						) }
					</div>
					</div>
					
				</div>
				</div>
			</div>
		</div>
		
    </div>
  )
}

export default PageHead