import React, { useEffect } from 'react';
import './about.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';
import AboutContent from '../../components/about-content/AboutContent';

const About = () => {

    useEffect(() => {
        document.body.style.overflow = "auto";  
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])

    return (
        <div className='about'>
            <Navbar/>
            <ContentTemplate heading="About Me" subtext=""/>
            <AboutContent/>
        </div>
    )
}

export default About;