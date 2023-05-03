import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ContactDetails from './blog-components/ContactDetails';

const NewContact = () => {
    return <div>
        <Navbar />
        {/* <BlogDetails /> */}
        <ContactDetails/>
        <Footer />
    </div>
}

export default NewContact

