import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faBriefcase, faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {images} from '../../../data/Images'
import './nav.scss'

 export default function Nav() {



    return (
        <div className='nav'>
            <a href="#home" className='profile'>
                <img src={images[0].url} alt="my face"></img>
            </a>
            <nav>              
                <a href="#home" className='home-link'>
                    <FontAwesomeIcon icon={faHome} color="#f7fff7"/>
                </a>         
                <a href="#about" className='about-link'>
                    <FontAwesomeIcon icon={faUser} color="#f7fff7"/>
                </a>
                <a href="#projects" className='projects-link'>
                    <FontAwesomeIcon icon={faLaptop} color="#f7fff7"/>
                </a>
                {/*<a href="#experience" className='experience-link'>
                    <FontAwesomeIcon icon={faBriefcase} color="#f7fff7"/>
    </a>*/}
                <a href="#skills" className='skills-link'>
                    <FontAwesomeIcon icon={faCode} color="#f7fff7"/>
                </a>
                <a href="#contact" className='contact-link'>
                    <FontAwesomeIcon icon={faEnvelope} color="#f7fff7"/>
                </a>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/maxsealey">
                        <FontAwesomeIcon icon={faLinkedin} color="#f7fff7"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.github.com/maxsealey">
                        <FontAwesomeIcon icon={faGithub} color="#f7fff7"/>
                    </a>
                </li>
            </ul>
        </div>
    )

}