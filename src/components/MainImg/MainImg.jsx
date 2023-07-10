import React from 'react';
import { Link } from 'react-router-dom';
import "./mainimg.scss";
import image from "../../assets/lus.jpeg";

const MainImg = () => {
  return (
    <div className="img-container">
        <div className='mask'>
            <img className='main-img' src={image} alt="background image, photo cred Luana"></img>
        </div>
        <div className='content'>
            <h1>Hey, my name is Max!</h1>
            <p>Skilled Programmer & Upcoming CS Graduate</p>
            <br/><br/>
            <Link to="/projects" className='btn'>Projects</Link>
            <Link to="/contact" className='btn'>Contact</Link>
        </div>
    </div>
  )
}

export default MainImg;