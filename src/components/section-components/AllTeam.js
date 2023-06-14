import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { currentTeamMember, getTeamsApi } from '../../actions/teamActions';
import { TEAM_API_URL } from '../../constants/config';
import MobileNav from '../global-components/Mobile-nav';
import Loader from '../Loader/Loader';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';




const AllTeam = () => {
    const history = useHistory()
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    const dispatch = useDispatch()
    const { loading, team } = useSelector((state) => state?.team)

    useEffect(() => {
        dispatch(getTeamsApi())
    }, [dispatch])

    const handleLinkClick = (id, name) => {
        console.log("agentIdHome", id)

        dispatch(currentTeamMember(id))
        history.push(`/team/${name.toLowerCase().split(" ").join("-")}`)

    }
    if (loading) {
        return <Loader />
    }
    return (
        <div className="ltn__team-area ">

            <div className="container">
                <div className="row justify-content-center go-top pt-110 pb-90">
                    <h1>Meet Our Team</h1>
                    <p>What makes Totally Home Real Estate exceptional is our team of passionate and dedicated personnel. With such a unique blend, we will be able to bring together the best talent in the industry and provide our clients with exceptional services to help them live their dream home.</p>
                    <h2>Our Management</h2>
                    {
                        team?.slice(0, 4).map((item) => (
                            <div className="col-lg-3 col-sm-6">
                                <div key={item.id} className="ltn__team-item ltn__team-item-3---">

                                    <div className="team-img">
                                        <img src={`${TEAM_API_URL}/${item.path}`} alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link onClick={() => handleLinkClick(item?.id, item?.name)}>{item.name}</Link></h4>
                                        <h6 className="ltn__secondary-color">{item.designation}</h6>
                                        {/* <div className="ltn__social-media">
											<ul>
												<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="#"><i className="fab fa-twitter" /></a></li>
												<li><a href="#"><i className="fab fa-linkedin" /></a></li>
											</ul>
										</div> */}
                                    </div>
                                </div>
                            </div>



                        ))
                    }

                    <h2>Our Property Adivor</h2>
                    {
                        team?.slice(4, team?.length).map((item) => (
                            <div className="col-lg-3 col-sm-6">
                                <div key={item.id} className="ltn__team-item ltn__team-item-3---">

                                    <div className="team-img">
                                        <img src={`${TEAM_API_URL}/${item.path}`} alt="Image" />
                                    </div>
                                    <div className="team-info">
                                        <h4><Link onClick={() => handleLinkClick(item?.id, item?.name)}>{item.name}</Link></h4>
                                        <h6 className="ltn__secondary-color">{item.designation}</h6>
                                        {/* <div className="ltn__social-media">
											<ul>
												<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="#"><i className="fab fa-twitter" /></a></li>
												<li><a href="#"><i className="fab fa-linkedin" /></a></li>
											</ul>
										</div> */}
                                    </div>
                                </div>
                            </div>



                        ))
                    }

<h2>Operation</h2>

                </div>
            </div>
        </div>
    )
}



export default AllTeam