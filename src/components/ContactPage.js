import React, { useEffect } from 'react'
import MobileNav from './global-components/Mobile-nav'
import ContactForm1 from './section-components/ContactForm1'
import Footer_v1 from './global-components/footer'
import { getContactUsApi } from '../actions/contactActions'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from './Layout/MetaData'

const ContactPage = () => {
  const {LocalDining,contact}=useSelector((state)=>state.contact)
const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getContactUsApi())

  },[dispatch])
  return (
    <>
          <MetaData title={contact[0]?.seo_titel} metaKeyword={contact[0]?.seo_teg} metaDesription={contact[0]?.seo_des} />

        <MobileNav/>
        <ContactForm1 contact={contact} />
        <Footer_v1/>
    </>
  )
}

export default ContactPage
