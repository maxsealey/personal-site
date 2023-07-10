import React from 'react';
import './contact.scss';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/content-template/ContentTemplate'
import ContentTemplate from '../../components/content-template/ContentTemplate';

const Contact = () => {
    return (
        <div className="contact">
            <Navbar/>
            <ContentTemplate heading="Contact Me" subtext="Let's connect!"/>
        </div>
    )
}

export default Contact;