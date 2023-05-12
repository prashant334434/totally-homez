import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTeamDetailsApi } from '../../actions/teamActions'
import { Link } from '@material-ui/core'
import { TEAM_API_URL } from '../../constants/config'

const AgentName = ({agentId}) => {
    const {data}=useSelector((state)=>state?.teamDetails?.teamDetails)
    console.log(agentId)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTeamDetailsApi(parseInt(agentId)))
    },[dispatch])
  return (
    <div className="real-estate-agent wcallFlex">
    <div className="agent-img go-top">
        <Link to="/team-details">
        <img src={`${TEAM_API_URL}/${data?.path}`} alt="Image" />
        </Link>
    </div>
    <div className="agent-brief go-top">
        <h6><Link to="/team-details">{data?.name}</Link></h6>

    </div>
</div>
  )
}

export default AgentName