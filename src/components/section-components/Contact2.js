import React from 'react'

const Contact2 = () => {
  return (
    <div className='body'>
           <div class="container contact-form">
	<h1>Contact form</h1>
	<hr className='hr'/>

	<div class="row">
   
       <div class="col-md-6 bbg">
       	<p>W-343 Coseis Meits UT</p>
       	<p>Email:- test@email.com</p>
       	<p>Phone:- 34563463434</p>
       </div>

       <div class="col-md-6">
       	
         <div class="form-group" >
         	<label>Name</label>
         	<input type="text" class="form-control"/>
         </div>

         <div class="form-group">
         	<label>Email</label>
         	<input type="text" class="form-control"/>
         </div>

         <div class="form-group">
         	<label>Massage</label>
         	<textarea  class="form-control" rows="7"></textarea>
         </div>

         <div class="form-group">
         	<button class="btn btn-primary btn-block">Send</button>
         </div>

       </div>

    </div>

</div>
    </div>
  )
}

export default Contact2
