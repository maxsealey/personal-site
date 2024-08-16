import React from 'react';
import './contact.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';
import ContactForm from '../../components/contact-form/ContactForm';

const Contact = () => {
    return (
        <div className="contact">
            <Navbar/>
            <ContentTemplate heading="Contact Me" subtext="I'm also very responsive on Linkedin and can be easily reached at: maxsealey97 @ gmail.com"/>
            <ContactForm />
        </div>
    )
}

export default Contact;