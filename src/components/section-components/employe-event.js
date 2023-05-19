import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const EmployeeEvent = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}>
		<div className="ltn__about-us-area  go-top  pt-100 mb-40">
				<div className="container">
				<div className="row">
					<div className="col-lg-5 align-self-center">
					<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
						<img src={publicUrl+"assets/img/service/11.jpg"} alt="Image" />
					</div>
					</div>
					<div className="col-lg-7 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						
						<h1 className="section-title"><span>EMPLOYEE EVENTS AND SOCIAL ACTIVITIES </span></h1>
						<p>We prioritize employee well-being and build a culture that encourages our people to be themselves at work. Whether you are a middle-aged, experienced agent, or a 20 something who loves rock music, you can count on us to make your work life fun and rewarding. </p>
						</div>
						<div className="about-us-info-wrap-inner about-us-info-devide---">
						<p>We seek to ensure that all of our employees have the freedom and flexibility they need, no matter what their personal needs are.  </p>
                        <p>We conduct cumulative outings and team building activities which result in our employees forming amazing and tight knit teams that are ready to tackle the challenges that lie ahead of them. </p>
                        <p>Our employees also have a choice to participate in any of our social events through which they can meet potential clients who may be looking for agents with specific skills and qualifications. </p>
						</div>
					
					</div>
					</div>
				</div>
				</div>
			</div>
	</div>
  )
}



    

   
		
  


export default EmployeeEvent