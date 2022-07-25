import React from 'react'
import './nav.scss'

 export default function Nav() {
    return (
        <div className='nav'>
            <a href="#home" className='profile'>
                
            </a>
            <nav>              
                <a href="#home" className='home-link'>
                    home
                </a>         
                <a href="#about" className='about-link'>
                    about
                </a>
                <a href="#projects" className='projects-link'>
                    projects
                </a>
                <a href="#experience" className='experience-link'>
                    experience
                </a>
                <a href="#skills" className='skills-link'>
                    skills
                </a>
                <a href="#contact" className='contact-link'>
                    contact
                </a>
            </nav>
        </div>
    )

}