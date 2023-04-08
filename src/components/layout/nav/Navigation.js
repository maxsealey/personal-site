import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <div className='navigation'>
            <Navbar fixed="top" bg="light">
                <Container>
                    <Navbar.Brand href="#home">MaxSealey.com</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <NavDropdown title="Projects" id="projects-dropdown">
                                <NavDropdown.Item href="#projects">View All Projects</NavDropdown.Item>
                                <NavDropdown.Divider/>

                                <NavDropdown.Item href="#">Scheduling App Demo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Project 2 Demo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Inventory Tracker Demo</NavDropdown.Item>
                                <NavDropdown.Divider/>

                                <NavDropdown.Item href="https://www.github.com/maxsealey">All Github Repositories</NavDropdown.Item>
                                <NavDropdown.Divider/>

                                <NavDropdown.Item href="#">Portfolio Site Repo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Scheduling App Repo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Project 2 Repo</NavDropdown.Item>
                                <NavDropdown.Item href="#">Inventory Tracker Repo</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>)
}

export default Navigation;

