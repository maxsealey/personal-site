import React, { Component } from 'react'
import './home.scss'
import LuanasCoffee from '../../../assets/LuanasCoffee.JPG'
const Home = () => {
  return (
    <div className="home" id="home" style={{backgroundImage:`url(${LuanasCoffee})`, opacity:'0.7', 
    backgroundSize:'cover', backgroundRepeat: 'no-repeat', backgroundPosition:'center center'}}>
        <div className="contain text-center">
          <h1>Hey, my name is Max!</h1><br/>
          <h3>Programmer | Web Developer | CompSci Student | Problem Solver</h3>
          <div className='button-container'>
            <a href="#projects"><button className='btn btn-lg'>See my work</button></a>
            <a href="#contact"><button className='btn btn-lg'>Hit me up playa</button></a>
          </div>
        </div>
    </div>
  )
}

export default Home;