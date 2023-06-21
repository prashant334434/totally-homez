import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { postContactApi } from "../../actions/contactActions";

const ContactForm1 = () => {
  const dispatch = useDispatch();
  const { error, success, contacts } = useSelector(
    (state) => state.contactForm
  );
  const alert = useAlert();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile_no: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(postContactApi(formData, "contact"));
  };
  useEffect(() => {
    if (success) {
      alert.success("We have received your response");
    }
    if (success == false) {
      alert.error("Some error occured");
    }
  }, [alert, error, success]);
  return (
    <section class="bg-section pt-40">
      <div class="container py-5 ">
        <h4 class="text-center text-white">Contact Us</h4>
        {/* <p class="text-center  text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, voluptas?</p> */}
        <div class="row  g-4 py-5">
          <div class="col-md-7">
            <div class="card">
              <img
                src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY="
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <br />

                <h5>Phone :- +971 54 289 7686</h5>

                <h5>
                  Office 103, Building 6 Bay Square Tower,
                  <br /> Business Bay, Dubai,
                  <br /> United Arab Emirates.
                  <br /> PO Box: 418317
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="card">
              <h4>Get in Touch</h4>
              {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus.</p> */}
              <p class="card-title">
                Totally Home Real Estate is incredibly enthusiastic and thrilled
                to assist you in finding your dream home for either purchase or
                rent. We are equally passionate about identifying the finest
                investment opportunities and facilitating the sale of your
                property. Our dedicated team is committed to providing
                exceptional service and ensuring your satisfaction throughout
                the entire process. Let us help you turn your real estate
                aspirations into reality.
              </p>
              <form onSubmit={(e) => submitForm(e)}>
                <div class="">
                  {/* <label for="exampleFormControlInput1" class="form-label">Your Name</label> */}
                  <input
                    onChange={handleChange}
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div class="">
                  {/* <label for="exampleFormControlInput1" class="form-label">Your Name</label> */}
                  <input
                    class="form-control"
                    placeholder="Phone"
                    onChange={handleChange}
                    type="number"
                    id="mobile_no"
                    name="mobile_no"
                    required
                  />
                </div>
                <div class="">
                  {/* <label for="exampleFormControlInput1" class="form-label">Your Email</label> */}
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div class="">
                  {/* <label for="exampleFormControlTextarea1" class="form-label">How can we help?</label> */}
                  <textarea
                    class="fl"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="How can we help?"
                    id="message"
                    name="message"
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      SUBMIT
                    </button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm1;
