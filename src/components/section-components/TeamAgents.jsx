import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getTeamsApi } from '../../actions/teamActions'
import { TEAM_API_URL } from '../../constants/config'

const TeamAgents = (props) => {
	const { data } = useSelector((state) => state.team.team)
	const dispatch = useDispatch()
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''
	let arr = [1, 2, 3, 4, 5];

	useEffect(() => {
		dispatch(getTeamsApi())
	}, [dispatch])

	return (
		<div>
			<div>
				<div className="ltn__product-slider-area ltn__product-gutter  plr--7">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title-area ltn__section-title-2--- text-center">
									 <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
			  <h1 className="section-title">Our Agents</h1> 
								</div>
							</div>
						</div>
						<div className="row ltn__product-slider-item-three-active-full-width slick-arrow-1 centerclass">
							{
								data && data.map((val, idx) => {
									return <div key={val?.id} className="col-xl-3 col-xxl-3 col-lg-3 col-sm-6">
										<div className="ltn__team-item ltn__team-item-3---">
											<div className="team-img img2 wcallFlex">
												<img className="img2" src={`${TEAM_API_URL}/${val.path}`} alt="Image" />
											</div>
											<div className="team-info">
												<h4>{val.name}</h4>
												<h6 className=" designnation ltn__secondary-color">{val.designation}</h6>
											</div>
										</div>
									</div>
								})
							}
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default TeamAgents