import React from 'react'
import { Link } from 'react-router-dom';
import ColumnProperty from './columnproperty';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ExclusivePropertiesBreadCrum = ({props}) => {
	const {property_for}=useParams()
   


  return (
    <div>
        	<div className={"ltn__breadcrumb-area text-left pt-100"}  >
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ "Properties" } For {property_for } In {props?.property_city}</h1>
					
					</div>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> {props?.property_city}</Link></li>
						<li> { props?.property_type }</li>
					
						


						

						</ul>
					</div>
					
				</div>
		
				</div>
			</div>
		</div>
		
    </div>
  )
}

export default ExclusivePropertiesBreadCrum