import React from 'react';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from '../src/components/layout/nav/Nav'

import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Projects from './components/pages/projects/Projects'
import Experience from './components/pages/experience/Experience';
//import Skills from './components/pages/skills/Skills'
import Contact from './components/pages/contact/Contact'


const App = () => {
    return (
      <div className="app">
        <Nav/>
        <div className="sections">
          <Home/>
          <About/>
          <Projects/>
          <Experience/>
          <Contact/>
        </div>
      </div>
    )
}

export default App;
