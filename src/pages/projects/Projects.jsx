import React from 'react';
import './projects.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const Projects = () => {
    return (
        <div className="projects">
            <Navbar/>
            <ContentTemplate heading="Project Portfolio" subtext="Thanks for checking out some of my work!"/>
        </div>
    )
}

export default Projects;