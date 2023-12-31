import React from 'react'
import { Link } from 'react-router-dom';
import ColumnProperty from './columnproperty';
import { replaceHyphensWithSpaces } from '../../utils/propertyUtils';

const TypeBreadcrums = (props) => {
    let HeaderTitle = props.headertitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    let Subheader = props.subheader ? props.subheader : "Villa"
	let Subheader2 = props.subheader ? props.subheader : "Jumeirah"

	let Subheader3 = props.subheader ? props.subheader : "Garden Homes"
	let Subheader4 = props.subheader ? props.subheader : "Garden Homes Frond C"


    let CustomClass = props.customclass ? props.customclass : ''
  return (
    <div>
        	<div className={"ltn__breadcrumb-area text-left pt-100  "+CustomClass}  >
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{replaceHyphensWithSpaces( props?.property_type) } For { props?.property_for } In {props?.property_city}</h1>
					
					</div>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> {replaceHyphensWithSpaces(props?.property_city)}</Link></li>
						<li> { replaceHyphensWithSpaces(props?.property_type) }</li>
					
						


						

						</ul>
					</div>
					
				</div>
		
				</div>
			</div>
		</div>
		
    </div>
  )
}

export default TypeBreadcrums