import React from 'react'
import { Link } from 'react-router-dom';
import ColumnProperty from './columnproperty';

const SubCommunityBreadcrum = (props) => {
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
					<h1 className="page-title">{ props?.type } For { props?.for } In {props?.subComm}</h1>
					
					</div>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> {props?.city}</Link></li>
						<li><Link to="/">{ props?.type } </Link></li>
						<li><Link to="/">{ props?.subComm } </Link></li>

					
						



						</ul>
					</div>
					
				</div>
		
				</div>
			</div>
		</div>
		
    </div>
  )
}

export default SubCommunityBreadcrum