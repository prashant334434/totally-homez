import React from 'react'

const ContactForm1 = () => {
  return (
    <section class="bg-section pt-70">
    <div class="container py-5 ">
        <h4 class="text-center text-white">Contact Us</h4>
        {/* <p class="text-center  text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, voluptas?</p> */}
        <div class="row  g-4 py-5">
        <div class="col-md-7">
            <div class="card" >
                <img src="https://media.istockphoto.com/id/467829216/photo/dubai-marina.jpg?s=612x612&w=0&k=20&c=5KNh7wGSoP9i-UJzT-LtUfXgLHKKoBlPAK67R0LHRQY=" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-title">Totally Home Real Estate is incredibly enthusiastic and thrilled to assist you in finding your dream home for either purchase or rent. We are equally passionate about identifying the finest investment opportunities and facilitating the sale of your property. Our dedicated team is committed to providing exceptional service and ensuring your satisfaction throughout the entire process. Let us help you turn your real estate aspirations into reality.</p>
                </div>
              </div>
        </div>
        <div class="col-md-5">
            <div class="card" >
               <h4>Get in Touch</h4>
               {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, delectus.</p> */}
               <div class="mb-3">
                {/* <label for="exampleFormControlInput1" class="form-label">Your Name</label> */}
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder='Name' />
              </div>
              <div class="mb-3">
                {/* <label for="exampleFormControlInput1" class="form-label">Your Name</label> */}
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder='Phone' />
              </div>
               <div class="mb-3">
                {/* <label for="exampleFormControlInput1" class="form-label">Your Email</label> */}
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder='Email' />
              </div>
              <div class="mb-3">
                {/* <label for="exampleFormControlTextarea1" class="form-label">How can we help?</label> */}
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='How can we help?'></textarea>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary mt-3">Submit</button>
              </div>
            </div>
        </div>
       
          </div>
    </div>
  </section>
  )
}

export default ContactForm1
