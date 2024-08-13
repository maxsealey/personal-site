import React, { useEffect, useRef } from "react";
import './contact-form.scss';

const ContactForm = () => {
    const form = useRef();

    useEffect(() => {
        document.body.style.overflow = "auto";  
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])

      const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        fetch('http://localhost:8787/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                console.log("Email sent");
            } else {
                console.error("Error sending", data.error);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
      
    return (
        <div className = "form-container">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" required></input>
                <label>Email</label>
                <input type="email" name="email" required></input>
                <label>Subject</label>
                <input type="text" name="subject" required></input>
                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Leave your message here and I'll get back to you as soon as I can" required/>
                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm;