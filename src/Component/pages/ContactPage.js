
import React from 'react';
import emailjs from 'emailjs-com';
import '../../App.css';
import  '../Button.css';
import Footer from '../Footer';




export default function ContactPage() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cdbdong', 'template_469v771', e.target, 'user_9CdY4WXSCFFy1u9aaVehy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <div>
            <br></br>
            <h1>Contact Us</h1>
            
        <div className="container">
        <form onSubmit={sendEmail}>

                <div className="row">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    </div>
                    {/* <input type="submit" value="Send Message" /> */}
                    <div className="submit">
                        <input type="submit" className="contact-btn" value="Send Message"/>
                    </div>
                </div>
            </form>
        </div>
     
        <Footer/>  
    </div>
       
    );
}