import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    const navStyle = { height:'70px', display:'flex', justifyContent:'space-between', position:'absolute' }
    const linkStyle = { color:'white', textDecoration:'none', cursor:'pointer' }

    return (
      <div className='nav navbar navbar-expand-md fixed-top navbar-dark bg-dark' style={ navStyle }>
        <a href="#" style={ linkStyle }>
            <h3 style={{margin:'auto', marginLeft:'20px'}}>Max Sealey</h3>
        </a>
      </div>
    )
  }
}
