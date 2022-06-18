import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'
import './layout.scss'

export default class Layout extends Component {
  render() {
    return (
      <div className='app'>
        <Nav/>
        <div className='page'>
          <Outlet/>
        </div>
      </div>
    )
  }
}