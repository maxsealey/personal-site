import React, { Component } from 'react'
import './projects.scss'

import bg_pattern from '../../../assets/bg_pattern.png';

const Projects = () => {
  return (
    <div className='projects' id="projects" 
    style={{backgroundImage:`url(${bg_pattern})`,
            backgroundRepeat:'repeat'}}>
      
    </div>
  )
}

export default Projects;