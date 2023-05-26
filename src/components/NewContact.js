import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ContactDetails from './blog-components/ContactDetails';
import ContactInfo from './section-components/contact-info';
import PhotoContact from './section-components/photocontact';
import MobileNav from './global-components/Mobile-nav';
import { getContactUsApi } from '../actions/contactActions';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMap from './section-components/GoogleMap';

const NewContact = () => {

    const {contact,loading}=useSelector((state)=>state.contact)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContactUsApi())
    },[dispatch])
    return <div>
        <MobileNav/>
        {/* <BlogDetails /> */}
                <PhotoContact contactData={contact}/>

                <GoogleMap/>

        <ContactInfo contactData={contact}/>
       {/* 
        <ContactDetails/>*/}

        {/* <PageHeader headertitle="Contact us" /> */}
        {/* <BlogDetails /> */}
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default NewContact

