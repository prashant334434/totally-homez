import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import {  getBlogsApi } from '../../actions/blogActions';
import { ABOUT_IMAGE_URL } from '../../constants/config';


const BlogSlider= (props) => {

		const {blogs}=useSelector((state)=>(state.blogs))

		const dispatch = useDispatch()
		useEffect(() => {
			dispatch(getBlogsApi())
		}, [dispatch])

		let publicUrl = process.env.PUBLIC_URL + '/'
		let customClass = props.customClass ? props.customClass : ''
		let sectionClass = props.sectionClass ? props.sectionClass : ''

		
		return (
			<div className={"ltn__blog-area pt-120  go-top " + sectionClass}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h2 className="section-title">{"Explore Dubai"}</h2>
							</div>
						</div>
					</div>
					<div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
						{/* Blog Item */}
					
						
					
					</div>
				</div>
			</div>
		)
	}

export default BlogSlider;
