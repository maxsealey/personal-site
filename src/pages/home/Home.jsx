import React from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";
import image from "../../assets/abstract-hexagonal-pattern-dark-backdrop-cyber-connection_1017-53964.jpg";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className="home-img-container">
        <Navbar/>
        <div className='mask'>
            <img className='main-img' src={image}></img>
        </div>
        <div className='content'>
            <h1>Max Sealey</h1>
            <p>2024 Computer Science Graduate (BS)</p>
            <p style={{fontSize: "1.15rem"}}>Seeking Career Opportunities</p>
            <br/><br/>
            <Link to="/projects" className='btn'>Projects</Link>
            <Link to="/contact" className='btn'>Contact</Link>
            <br/><br/><br/>
            <Link to="https://www.linkedin.com/in/maxsealey" className='socials'><BsLinkedin size={35}/></Link>
            <Link to="https://www.github.com/maxsealey" className='socials'><BsGithub size={35}/></Link>
        </div>
    </div>
  )
}

export default Home;