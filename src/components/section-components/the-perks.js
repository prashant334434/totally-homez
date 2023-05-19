import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ThePerks extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__team-area pt-115 pb-90 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h1 className="section-title"><span>THE PERKS </span></h1>
					</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link to="/team-details">Office in the prime location of Business Bay, Dubai. </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link to="/team-details">Partnering opportunity for a learning experience with seasoned partners.  </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link to="/team-details">Unlimited earning potential.  </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link to="/team-details">Develop your personal growth and learning through participation in our various events, workshops and training sessions.  </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link to="/team-details">Outstanding career opportunities.  </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link to="/team-details">Growth potential with the company that is always striving to be better. . </Link></h4>
					
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ThePerks