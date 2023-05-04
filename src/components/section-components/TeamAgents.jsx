import React from 'react'
import { Link } from 'react-router-dom';

const TeamAgents = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}><div className="ltn__team-area   go-top">
	<div className="container">
	<div className="row">
		<div className="col-lg-12">
		<div className="section-title-area ltn__section-title-2--- text-center">
			<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
			<h1 className="section-title">Property Agents</h1>
		</div>
		</div>
	</div>
	<div className="row justify-content-center">
		<div className="col-lg-3 col-sm-6">
		<div className="ltn__team-item ltn__team-item-3---">
			<div className="team-img img2">
			<img className="img2" src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
			</div>
			<div className="team-info">
			<h4>Rosalina D. William</h4>
			<h6 className=" designnation ltn__secondary-color">Real Estate Broker</h6>
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
		<div className="col-lg-3 col-sm-6">
		<div className="ltn__team-item ltn__team-item-3---">
			<div className="team-img img2">
			<img className="img2" src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
			</div>
			<div className="team-info">
			<h4>Rosalina D. William</h4>
			<h6 className="designnation ltn__secondary-color">Real Estate Broker</h6>
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
		<div className="col-lg-3 col-sm-6">
		<div className="ltn__team-item ltn__team-item-3---">
			<div className="team-img img2">
			<img className="img2" src={publicUrl+"assets/img/team/2.jpg"} alt="Image" />
			</div>
			<div className="team-info">
			<h4>Rosalina D. William</h4>
			<h6 className="designnation ltn__secondary-color">Selling Agents</h6>
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
		<div className="col-lg-3 col-sm-6">
		<div className="ltn__team-item ltn__team-item-3---">
			<div className="team-img ">
			<img  className="img2" src={publicUrl+"assets/img/team/5.jpg"} alt="Image" />
			</div>
			<div className="team-info">
			<h4>Rosalina D. William</h4>
			<h6 className="designnation ltn__secondary-color">Property Seller</h6>
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
	</div>
	</div>
</div></div>
    
  )
}

export default TeamAgents