import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { currentTeamMember, getTeamsApi } from '../../actions/teamActions'
import { TEAM_API_URL } from '../../constants/config'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loader from '../Loader/Loader'
const TeamAgents = (props) => {
	const history=useHistory()
	let carouselItems = [
		{ id: 1, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 2, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 3, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 4, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		{ id: 5, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		{ id: 6, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		// Add more items as needed
	];
	const { loading,team } = useSelector((state) => state.team)
	const dispatch = useDispatch()
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''
	let arr = [1, 2, 3, 4, 5];

	useEffect(() => {
		dispatch(getTeamsApi())
	}, [dispatch])

	if (team?.length > 0) {


		carouselItems = team


	}

	const handleLinkClick = (id,name) => {
		console.log("agentIdHome",id)

		dispatch(currentTeamMember(id))
		history.push(`/team/${name.toLowerCase().split(" ").join("-")}`) 

	}
	
if(loading){
	return <Loader/>
}
const url = (titleName) => {
    return titleName?.split(" ")?.join("-")?.toLowerCase()
  }
	return (
		<div>
			<div>
				<div className="ltn__product-slider-area ltn__product-gutter  plr--7">
					<div className="container-fluid">

						<div className="row">
							<div className="col-lg-12">
								<div className="section-title-area ltn__section-title-2--- text-center">
									<h3 className="section-title">{props?.homePage[0]?.sec19_h}</h3>
								</div>
							</div>
						</div>
						<div className="row ltn__product-slider-full-width slick-arrow-1 centerclass">
							<Carousel
								additionalTransfrom={0}
								arrows

								centerMode={false}
								containerClass="carousel-container"
								dotListClass=""
								draggable
								focusOnSelect={false}
								infinite
								itemClass=""
								keyBoardControl
								minimumTouchDrag={80}
								renderButtonGroupOutside={false}
								renderDotsOutside={false}
								responsive={{
									desktop: {
										breakpoint: { max: 3000, min: 1024 },
										items: 4,
									},
									tablet: {
										breakpoint: { max: 1024, min: 464 },
										items: 2,
									},
									mobile: {
										breakpoint: { max: 464, min: 0 },
										items: 1,
									},
								}}
								showDots={false}
								sliderClass=""
								slidesToSlide={1}
								swipeable
							>
								{

									carouselItems.map((item) => (

										<div key={item?.id} className=" col-lg-12 col-sm-6">
											<div className="ltn__team-item ltn__team-item-3---">
												<div className="team-img img2 wcallFlex">
													<img className="img2" src={`${TEAM_API_URL}/${item.path}`} alt="Image" />
												</div>
												<div className="team-info">
													<Link onClick={() => handleLinkClick(item?.id,item?.name)} ><h4>{item.name}</h4></Link>

													<h5 className=" designnation ltn__secondary-color">{item.designation}</h5>
												</div>
											</div>
										</div>

									))}
							</Carousel>

						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default TeamAgents