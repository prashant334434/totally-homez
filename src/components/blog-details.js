import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BlogSlider from './blog-components/blog-slider-v1';
import MobileNav from './global-components/Mobile-nav';
import BlogMap from './blog-components/blogMap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getBlogDetailsApi } from '../actions/blogActions';
import { currentBlogId } from '../actions/blogActions';


const BlogDetailsPage = () => {
    
    const { loading, blogDetails } = useSelector((state) => state.blogDetails);
    const dispatch = useDispatch();
    const { currentBlogId } = useSelector(
        (state) => state.currentBlogId
      );
	  
	
		  useEffect(() => {
			  dispatch(getBlogDetailsApi(currentBlogId))
		  }, [dispatch])
   
    return <div>
        <MobileNav />
        {/* <PageHeader headertitle="News Details" /> */}
        {blogDetails?.length>0 &&         <BlogDetails blogDetails={blogDetails} />
}
        <BlogMap sectionClass="pt-120" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogDetailsPage

