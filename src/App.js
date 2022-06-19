import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

// Layout components
import Nav from './components/layout/nav/Nav';
import Sidebar from './components/layout/sidebar/Sidebar';
import Footer from './components/layout/footer/Footer';

// Sections
import Home from './components/sections/home/Home'
import About from './components/sections/about/About'
import Projects from './components/sections/projects/Projects'
import Experience from './components/sections/experience/Experience';
import Skills from './components/sections/skills/Skills'
import Contact from './components/sections/contact/Contact'


class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Nav/>
          <div className="sections">
            <Home/>
            <About/>
            <Projects/>
            <Experience/>
            <Skills/>
            <Contact/>
          </div>
        </div>
      </>
    )
  }
}

export default App;
