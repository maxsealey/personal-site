import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCode, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './nav.scss'

export default class Nav extends Component {
    render(){
        return (
            <div className='nav'>
                <nav>
                    <NavLink exact="true" activeclassname="active" className="home-link" to="/home">
                        <FontAwesomeIcon icon={faHome} color="#f7fff7"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                        <FontAwesomeIcon icon={faUser} color="#f7fff7"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                        <FontAwesomeIcon icon={faCode} color="#f7fff7"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="experience-link" to="/experience">
                        <FontAwesomeIcon icon={faBriefcase} color="#f7fff7"/>
                    </NavLink>
                    <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} color="#f7fff7"/>
                    </NavLink>
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
}