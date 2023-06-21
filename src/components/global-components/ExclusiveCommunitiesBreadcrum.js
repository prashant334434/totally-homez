import React from 'react'
import { Link } from 'react-router-dom';
import ColumnProperty from './columnproperty';
import { capitalizeWords } from '../../utils/propertyUtils';

const ExclusiveCommunitiesBreadcrum = (props) => {
    let HeaderTitle = props.headertitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    let Subheader = props.subheader ? props.subheader : "Villa"
	let Subheader2 = props.subheader ? props.subheader : "Jumeirah"

	let Subheader3 = props.subheader ? props.subheader : "Garden Homes"
	let Subheader4 = props.subheader ? props.subheader : "Garden Homes Frond C"


    let CustomClass = props.customclass ? props.customclass : ''
	const url=(titleName)=>{
		return titleName?.split(" ")?.join("-")?.toLowerCase()
	}
  return (
   <h1>'
    
   </h1>
  )
}

export default ExclusiveCommunitiesBreadcrum