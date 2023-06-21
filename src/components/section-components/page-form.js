import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useState } from "react";
import { postContactApi } from "../../actions/contactActions";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
const Pageform = () => {
  const {error,success,contacts}=useSelector((state)=>state.contactForm)
  const alert=useAlert()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    message: "Hello! I came across your property with reference No (Ref No). I am highly interested, so kindly get in touch. Thank you",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  let publicUrl = process.env.PUBLIC_URL + "/";

  


  const submitForm = (e) => {
    e.preventDefault()
    dispatch(postContactApi(formData));
  };
  useEffect(()=>{
    if(success){
      alert.success("We have received your response")
    }
    if(success==false){
      alert.error("Some error occured")
    }

  },[alert,error,success])
  return (
    <div>
      <div
        className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-40 "
        data-bs-bg={publicUrl + "assets/img/bg/22.jpg"}
      >
        <div className="container positioning1 col-lg-12">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">
                Area Guide - Dubai Hills Estate
              </h3>
              <p className=" white-color textsizingsmall">
                Dubai Hills Estate is an extensive residential and lifestyle
                development comprising villas, low-rise apartments and
                townhouses. It is a key part of the growing MBR City. The very
                finest properties and leisure destinations can be found in Dubai
                Hills, including a championship golf course.
              </p>
              <div className="btn-wrapper animated go-top">
                <Link to="/contact" className="theme-btn-1 btn btn-effect-1">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="ltn__upcoming-project-info ltn__menu-widget pt-20">
                <form
                  onSubmit={(e) => submitForm(e)}
                  className="contact-form whitecoloringbg"
                >
                  <h3>Contact Form</h3>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      onChange={handleChange}
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      onChange={handleChange}
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      onChange={handleChange}
                      type="number"
                      id="mobile_no"
                      name="mobile_no"
                      required
                    />
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      onChange={handleChange}
                      value={formData.name && formData.email && formData.mobile_no.length === 10 ? "Hello! I came across your property with reference No (Ref No). I am highly interested, so kindly get in touch. Thank you" : ""}
                      required
                    />
                  </div>
                  <div className="btn-wrapper animated go-top">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* upcoming-project-item */}
        </div>
      </div>
    </div>
  );
};

export default Pageform;
