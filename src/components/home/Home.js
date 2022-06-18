import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="home home-container">
        <div className="summary">
          <h1>Hey, my name is Max!</h1><br/>
          <h3>Programmer | Web Developer | Problem Solver</h3><br/>
          <h4>Currently studying Computer Science at Western Governors University.</h4><br/>
          <h4>Java | JavaScript | Python</h4>
          <Link to="/contact" className="contact">Contact Me</Link>
        </div>
      </div>
    )
  }
}