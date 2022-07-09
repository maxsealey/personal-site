import React, { Component } from 'react'
import './home.scss'

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="contain text-center">
          <h1>Hey, my name is Max!</h1><br/>
          <h3>Programmer | Web Developer | CompSci Student | Problem Solver</h3>
          <div className='button-container'>
            <a href="#projects"><button className='btn btn-lg'>See my work</button></a>
            <a href="#contact"><button className='btn btn-lg'>Hit me up</button></a>
          </div>
        </div>
    </div>
  )
}

export default Home;