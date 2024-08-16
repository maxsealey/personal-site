import React from 'react';
import "./project-card.scss";
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
    return (
        <div className='project-container'>
            <div className='projectcard'>
                <img src={props.imgsrc} alt="thumbnail"/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='desc'>
                    <p>{props.desc}</p>
                    <div className='project-btns'>
                    <NavLink to={props.repo} className="proj-btn">Repo</NavLink>
                        {props.demo ? <NavLink to={props.demo} className="proj-btn">Demo</NavLink> : <NavLink to={props.demo} className="proj-btn-null">Demo</NavLink>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
