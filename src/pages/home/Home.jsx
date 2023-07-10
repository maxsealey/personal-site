import React from 'react';
import { Link } from 'react-router-dom';
import "./home.scss";
import image from "../../assets/lus.jpeg";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
  return (
    <div className="home-img-container">
        <Navbar/>
        <div className='mask'>
            <img className='main-img' src={image} alt="background image, photo cred Luana"></img>
        </div>
        <div className='content'>
            <h1>Hey, my name is Max!</h1>
            <p>Skilled Programmer & Upcoming CS Graduate</p>
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