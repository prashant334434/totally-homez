import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogDetailsApi } from '../../actions/blogActions';
import { currentBlogId } from '../../actions/blogActions';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from '../Loader/Loader';
import { ABOUT_IMAGE_URL } from '../../constants/config';

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

	
const BlogDetails = ({blogDetails}) => {

	return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-120 pt-70">
			<div className="container">
			<div className="row">
				{
					blogDetails?.map((item)=>(
						<div className="col-lg-12">
				
				<div className="ltn__blog-details-wrap">
					<div className="ltn__page-details-inner ltn__blog-details-inner">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-category">
							{/* <Link to="/shop">Real Estate</Link> */}
						</li>
						</ul>
					</div>
					<h2 className="ltn__blog-title">{item?.title} 
					
					</h2>
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" />By: {item?.author}</Link>
						</li>
						<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />{item?.date}
						</li>
						</ul>
					</div>
					<img src={`${ABOUT_IMAGE_URL}/${item.blog_img}`} alt="Image" />

					<p>{item.des}</p>
					<p><a href={`#${item.sec1_h}`}>{item.sec1_h}</a></p>
					
					<p><a href={`#${item.sec2_h}`}>{item.sec2_h}</a></p>
					<p><a href={`#${item.sec3_h}`}>{item.sec3_h}</a></p>
					<p><a href={`#${item.sec4_h}`}>{item.sec4_h}</a></p>
					<p><a href={`#${item.sec5_h}`}>{item.sec5_h}</a></p>
					<p><a href={`#${item.sec6_h}`}>{item.sec6_h}</a></p>
					<p><a href={`#${item.sec7_h}`}>{item.sec7_h}</a></p>
					<p><a href={`#${item.sec8_h}`}>{item.sec8_h}</a></p>
					<p><a href={`#${item.sec9_h}`}>{item.sec9_h}</a></p>
					<p><a href={`#${item.sec10_h}`}>{item.sec10_h}</a></p>
					<p><a href={`#${item.sec11_h}`}>{item.sec11_h}</a></p>
					<p><a href={`#${item.sec12_h}`}>{item.sec12_h}</a></p>
					<p><a href={`#${item.sec13_h}`}>{item.sec13_h}</a></p>
					<hr />
					<h2 id={item.sec1_h}>{item.sec1_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec1_img}`} alt="Image" />
					<p>{item.sec1_dsc}</p>
					<h2 id={item.sec2_h}>{item.sec2_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec2_img}`} alt="Image" />
					<p>{item.sec2_dsc}</p>
					<h2 id={item.sec3_h}>{item.sec3_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec3_img}`} alt="Image" />
					<p>{item.sec3_dsc}</p>
					<h2 id={item.sec4_h}>{item.sec4_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec4_img}`} alt="Image" />
					<p>{item.sec4_dsc}</p>
					<h2 id={item.sec5_h}>{item.sec5_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec5_img}`} alt="Image" />
					<p>{item.sec5_dsc}</p>
					<h2 id={item.sec6_h}>{item.sec6_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec6_img}`} alt="Image" />
					<p>{item.sec6_dsc}</p>
					<h2 id={item.sec7_h}>{item.sec7_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec7_img}`} alt="Image" />
					<p>{item.sec7_dsc}</p>
					<h2 id={item.sec8_h}>{item.sec8_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec8_img}`} alt="Image" />
					<p>{item.sec8_dsc}</p>
					<h2 id={item.sec9_h}>{item.sec9_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec9_img}`} alt="Image" />
					<p>{item.sec9_dsc}</p>
					<h2 id={item.sec10_h}>{item.sec10_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec10_img}`} alt="Image" />
					<p>{item.sec10_dsc}</p>
					<h2 id={item.sec11_h}>{item.sec11_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec11_img}`} alt="Image" />
					<p>{item.sec11_dsc}</p>
					<h2 id={item.sec12_h}>{item.sec12_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec12_img}`} alt="Image" />
					<p>{item.sec12_dsc}</p>
					<h2 id={item.sec13_h}>{item.sec13_h}</h2>
					<img src={`${ABOUT_IMAGE_URL}/${item.sec13_img}`} alt="Image" />
					<p>{item.sec13_dsc}</p>
					
				
				
	
					</div>
				
			
				</div>
				</div>
					))
				}
				
			</div>
			</div>
		</div>
    )
}


   

export default BlogDetails;
