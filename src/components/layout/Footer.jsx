import React, { Component } from 'react';
import './_layout.scss';

export default class Footer extends Component {
  render() {
    return (
        <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3 copy">
          © 2022 Copyright: 
          <a className="text-dark" href="https://www.maxsealey.com/home"> MaxSealey.com</a>
        </div>
      </footer>
    )
  }
}
