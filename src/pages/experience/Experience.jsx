import React from 'react';
import './experience.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const Experience = () => {
    return (
        <div className="experience">
            <Navbar/>
            <ContentTemplate heading="Education & Experience" subtext="What I've Been Up To"/>
        </div>
    )
}

export default Experience;