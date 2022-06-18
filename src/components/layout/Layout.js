import React, { Component } from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
import './layout.scss'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Footer/>
      </div>
    )
  }
}
