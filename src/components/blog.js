import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const BlogRightSidebarPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog" subheader="Blog" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogRightSidebarPage

