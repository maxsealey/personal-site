import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'

import Layout from './components/layout/Layout';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}></Route>
            </Route>
          </Routes>
        </div>
      </>
    )
  }
}

export default App;
