import React from 'react'

const ContactForm1 = () => {
  return (
    <div class="container2">
    <div class="card">
      <div class="left">
        <img src="https://totallyhomerealestate.com/admin/uploads/home/fgh.jpeg" />
      </div>
      <div class="right">
        <h2>Contact Us</h2>
        <div class="contact">
          <div class="form-container">
            <form class="form2">
              <div class="username">
                <input type="text" placeholder="Enter your Name" />
              </div>
              <div class="useremail">
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div class="usermessage">
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <div class="usersubmit">
                <input type="submit" value="Contact Us" />
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactForm1
