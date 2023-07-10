import React from 'react';
import './about.scss';
import Navbar from '../../components/navbar/Navbar';
import Container from '../../components/content-template/ContentTemplate';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const About = () => {
    return (
        <div className='about'>
            <Navbar/>
            <ContentTemplate heading="About Me" subtext="Just your friendly, neighborhood programmer"/>
        </div>
    )
}

export default About;