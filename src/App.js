import React from 'react';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from './components/layout/nav/Nav'
import Footer from './components/layout/footer/Footer'

import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app">
          <Nav/>
          <div className="sections">
            <Home/>
            <Portfolio/>
            <Experience/>
            <Contact/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
