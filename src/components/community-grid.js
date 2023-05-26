import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import MobileNav from './global-components/Mobile-nav';
import CommunityyGrid from './blog-components/communityygrid';

const CommunityGrid = () => {
    return <div>
        <MobileNav />
        <CommunityyGrid />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default CommunityGrid

