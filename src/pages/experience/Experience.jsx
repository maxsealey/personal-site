import React from 'react';
import './experience.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const Experience = () => {
    return (
        <div className="experience">
            <Navbar/>
            <ContentTemplate heading="Education & Experience" subtext=""/>
        </div>
    )
}

export default Experience;