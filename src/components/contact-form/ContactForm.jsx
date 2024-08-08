import React, { useEffect } from "react";
import './contact-form.scss';

const ContactForm = () => {
    useEffect(() => {
        document.body.style.overflow = "auto";  
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])
      
    return (
        <div className = "form-container">
            <form>
                <label>Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Leave your message here and I'll get back to you as soon as I can"/>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;