import React from 'react';
import './about.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const About = () => {
    return (
        <div className='about'>
            <Navbar/>
            <ContentTemplate heading="About Me" subtext=""/>
        </div>
    )
}

export default About;