import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

/*
            <nav>              
                <a href="#home" className='home-link'>

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
                <a href="#contact" className='contact-link'>
                    contact
                </a>
            </nav>
*/

const Navigation = () => {
    return (
        <div className='navigation'>
            <Navbar fixed="top" bg="light">
                <Container>
                    <Navbar.Brand href="#home">Max Sealey</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>)
}

export default Navigation;

