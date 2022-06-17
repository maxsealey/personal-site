import React from 'react';
import { Link } from 'react-router-dom';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact'
import Layout from './components/layout/Layout';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <Layout/>
        </div>
      </>
    )
  }
}

export default App;
