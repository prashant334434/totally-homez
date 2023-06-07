import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOffPlanCategoryApi } from '../../actions/offPlanActions';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN_PROPERTY_IMAGES_URL } from '../../constants/config';
import { getCommunityCategoryApi } from '../../actions/communityAction';

let publicUrl = process.env.PUBLIC_URL + '/'
let imagealt = 'image'





const CategoryGrid12 = () => {

	const { offPlanCategory, loading } = useSelector((state)=>state.offPlanCategory)
	const dispatch = useDispatch()

	useEffect(() => {

		dispatch(getCommunityCategoryApi())

	}, [dispatch])
	return (
		<div className="ltn__blog-area ltn__blog-item-3-normal pt-40 mb-100 go-top">
			<div className="container">

				<div className="row">
					{
						offPlanCategory?.map((offPlanCat) => (
							<div key={offPlanCat?.id} className="col-lg-4 col-sm-6 col-12">
								<div className="ltn__blog-item ltn__blog-item-3">
									<div className="ltn__blog-img">
										<Link to="/blog-details"><img src={`${ADMIN_PROPERTY_IMAGES_URL}/${offPlanCat?.img}`} alt="#" /></Link>
									</div>
									<div className="ltn__blog-brief">

										<h3 className="ltn__blog-title"><Link to="/blog-details">{offPlanCat?.name}</Link></h3>

									</div>
								</div>
							</div>

						))

					}
					{/* Blog Item */}


					{/* Blog Item */}

					{/* Blog Item */}

					{/* Blog Item */}

					{/* Blog Item */}

					{/* Blog Item */}

					{/* Blog Item */}

					{/* Blog Item */}

					{/* Blog Item */}

					{/*  */}
				</div>
				{/* <div className="row">
		<div className="col-lg-12">
		<div className="ltn__pagination-area text-center">
			<div className="ltn__pagination">
			<ul>
				<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
				<li><Link to="#">1</Link></li>
				<li className="active"><Link to="#">2</Link></li>
				<li><Link to="#">3</Link></li>
				<li><Link to="#">...</Link></li>
				<li><Link to="#">10</Link></li>
				<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
			</ul>
			</div>
		</div>
		</div>
	</div> */}
			</div>
		</div>
	)
}

export default CategoryGrid12