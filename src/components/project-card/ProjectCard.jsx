import React from 'react';
import "./project-card.scss";
import { NavLink } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const {Title, Thumbnail, Description, DemoLink, GitLink} = project;

    return (
        <div className='whole-container'>
            <h1 className="project-heading"></h1>
            <div className='project-container'>
                <div className='projectcard'>
                    <img src={Thumbnail} alt="thumbnail"/>
                    <h2 className='project-title'>{Title}</h2>
                    <div className='desc'>
                        <p>{Description}</p>
                    </div>
                    <div className='project-btns'>
                        <NavLink to={DemoLink} className="proj-btn">Demo</NavLink>
                        <NavLink to={GitLink} className="proj-btn">Repo</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;