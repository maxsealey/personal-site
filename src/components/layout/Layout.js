import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

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
