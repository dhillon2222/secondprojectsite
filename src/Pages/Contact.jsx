import React from 'react';
import { Footer, Header } from '../Components'


const Contact = () => {
  return (
    <>
    <Header/>
    <section className="container mt-5">
   
   <div className="row">

    <h1 className='text-center mb-5 fw-bold text-decoration-underline'>Contact Us</h1>
      
      <div className="col-sm-12 mb-4 col-md-5">
     
         <div className="card border-primary rounded-0">
            <div className="card-header p-0">
               <div className="bg-primary text-white text-center py-2">
                  <h3><i className="fa fa-envelope"></i> Write to us:</h3>
                  <p className="m-0">We’ll write rarely, but only the best content.</p>
               </div>
            </div>
            <div className="card-body p-3">
               
                  <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                     <input value="" type="text" name="data[name]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name"/>
                  </div>
            </div>
                  <div className="form-group">
                     <label>Your email</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="email" value="" name="data[email]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Email"/>
                     </div>
                  </div>
                  <div className="form-group">
                     <label>Subject</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="text" name="data[subject]" className="form-control" id="inlineFormInputGroupUsername" placeholder="Subject"/>
                     </div>
                  </div>
                  <div className="form-group">
                     <label>Message</label>
                     <div className="input-group mb-2 mb-sm-0">
                        <input type="text" className="form-control" name="mesg"/>
                     </div>
                  </div>
                  <div className="text-center mt-3">
                     <input type="submit" name="submit" value="Submit" className="btn btn-primary btn-block rounded-0 py-2"/>
                  </div>
             
              </div>
              
            </div>
         </div>
     
     
    
      <div className="col-sm-12 col-md-7">
        
         <div className="mb-4">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55019.78592735428!2d74.47352761665246!3d30.47189730344234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391768df2e60fe8b%3A0x571b6647fca23322!2sSri%20Muktsar%20Sahib%2C%20Punjab%20152026!5e0!3m2!1sen!2sin!4v1705300709484!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>         
      </div>
      
       </div>
        </div>
</section>
        
  
    <Footer/>
    </>
  )
}

export default Contact