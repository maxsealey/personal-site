import React, { Component } from 'react'
import { useGetAllprojectsQuery } from '../../../api/projectAPI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './projects.scss'
import bg_pattern from '../../../assets/bg_pattern.png';

const Projects = () => {
  const {data, err, isLoading} = useGetAllprojectsQuery();
  return (
    <div className='projects' id="projects" 
    style={{backgroundImage:`url(${bg_pattern})`,
            backgroundRepeat:'repeat'}}>
        <div className='container projects-container'>
          <article className='project'>
            <div className='project-preview'></div>

            <h3>Title</h3>
            <p>Description</p>

            <div className='link-wrapper'>
              <a target="_blank" rel="noreferrer" href="#">
              <FontAwesomeIcon icon={faGithub} color="white"/>
              </a>
              <a target="_blank" rel="noreferrer" href="#">
              <FontAwesomeIcon icon={faLinkedin} color="white"/>
              </a>
            </div>
          </article>
        </div>
        
    </div>
  )
}

export default Projects;