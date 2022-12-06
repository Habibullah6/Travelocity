import React from 'react';
import contactImg from "../../images/24-7.jpg";
import "./Contact.css";

const Contact = () => {
    
    return (
        <div className='mt-5 container' id="contact">  
        <div className='row align-items-center'>
           <div className='col-md-6' >
            <img src={contactImg} alt="" className='img-fluid w-100'/>
           </div>

           <div className='col-md-6'>
           <div className="row contact-form">
            <h4>SEND US A MESSAGE</h4>
           <form action="">
             <input type="text" name="" id="" placeholder='Your Name'/>
             <input type="email" name="" id="" placeholder='Your Email'/>
             <textarea placeholder='Your Message...'></textarea>
             <input type="button" className='rounded-pill' value="Send" style={{backgroundColor: "#00c1a2", color: "#FFF"}}/>
             </form>
           </div>
           </div>
        </div >
        </div>
    );
};

export default Contact;