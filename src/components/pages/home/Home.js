import React from 'react'
import './home.scss'

import Navigation from '../../layout/nav/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div className="home" id="home">
      <Navigation/>
      <div className='content-wrapper'>
        <h3 className='intro'>Hey, my name is</h3>
        <h1 className='name'>Max Sealey</h1>
        <div className='title'>
          <div className='title-wrap'>
            <div className='title-el'>WGU Computer Science</div>
            <div className='title-el'>Web Developer</div>
            <div className='title-el'>Aspiring Software Engineer</div>
          </div>
        </div>
        <div className='link-wrapper'>
        <a target="_blank" rel="noreferrer" href="https://www.github.com/maxsealey">
          <FontAwesomeIcon icon={faGithub} color="white"/>
        </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maxsealey">
            <FontAwesomeIcon icon={faLinkedin} color="white"/>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Home;