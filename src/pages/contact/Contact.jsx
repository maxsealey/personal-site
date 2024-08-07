import React from 'react';
import './contact.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const Contact = () => {
    return (
        <div className="contact">
            <Navbar/>
            <ContentTemplate heading="Contact Me" subtext=""/>
        </div>
    )
}

export default Contact;