import React, { useEffect } from 'react'
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useDispatch, useSelector } from 'react-redux';
import { getTeamDetailsApi } from '../../actions/teamActions';
import { TEAM_API_URL } from '../../constants/config';

const AgentDetails = ({agentId}) => {
	let publicUrl = process.env.PUBLIC_URL + '/'

    const {teamDetails}=useSelector((state)=>state?.teamDetails)
    console.log(agentId)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTeamDetailsApi(parseInt(agentId)))
    },[dispatch])
  return (
    <div className="widget ltn__author-widget">
								<div className="ltn__author-widget-inner text-center">
									<center>

									<img src={`${TEAM_API_URL}/${teamDetails?.path}`} alt="#" />

										<h3>{teamDetails?.name}</h3>
										
										<small>{teamDetails?.designation}</small>

									</center>

									<div className="product-ratting">

									</div>
									<br />
									<p>{teamDetails?.description?.slice(0, 200)}...</p>
									<div className="ltn__social-media">
										<center>
											{/* <Link className="btn btn-effect-3" to="/contact">Call</Link> */}
											<PopupButton
												url="https://calendly.com/totally-home-real-estate/30min"

												className="btn theme-btn-1"
												rootElement={document.getElementById("root")}
												text="Click here to schedule!"
											/>
										</center>




									</div>

								</div>
							</div>
  )
}

export default AgentDetails