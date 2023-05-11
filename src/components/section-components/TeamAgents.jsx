

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getTeamsApi } from '../../actions/teamActions';

const TeamAgents = (props) => {
	const dispatch=useDispatch()
const {
   data
  } = useSelector((state) => state?.team?.team);
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''
	useEffect(() => {
	
	
		dispatch(getTeamsApi());
	  }, [dispatch]);
console.log(data)
	return (
		<h1>
			{data?.length}
		</h1>
	)
}

export default TeamAgents