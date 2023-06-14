import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamsApi } from '../../actions/teamActions';
import { TEAM_API_URL } from '../../constants/config';
import MobileNav from '../global-components/Mobile-nav';
import Loader from '../Loader/Loader';




const TeamV2 = () => {
	
	return (
		<MobileNav/>
	)
}



export default TeamV2