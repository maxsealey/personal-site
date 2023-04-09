import React from 'react'
import './home.scss'

import Navigation from '../../layout/Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import bg_pattern from '../../../assets/bg_pattern.png';

const Home = () => {
  return (
    <div className="home" id="home" 
    style={{backgroundImage:`url(${bg_pattern})`,
          backgroundRepeat:'repeat'}}>
      <Navigation/>
      <div className='content-wrapper'>
        <h1 className='name'>Hey, I'm Max Sealey</h1>
        <h5 className='intro'>Welcome to my Portfolio!</h5>
        <div className='title'>
          <div className='title-wrap'>
            <div className='title-el'>WGU Computer Science Student</div>
            <div className='title-el'>Skilled Programmer</div>
            <div className='title-el'>Aspiring Software Engineer</div>
            <div className='title-el'>Problem Solver</div>
            <div className='title-el'>Freelance Web Developer</div>
          </div>
        </div>
        <h5 className='socials'>Connect with me on Linkedin and check out my GitHub!</h5>
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