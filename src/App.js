import React from 'react';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import Nav from './components/layout/Nav/Nav'
import Footer from './components/layout/Footer/Footer'

import Main from './components/main/Main'
import Portfolio from './components/portfolio/Portfolio'
import References from './components/references/References'
import Contact from './components/contact/Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="app">
          <Nav/>
          <div className="sections">
            <Main/>
            <Portfolio/>
            <References/>
            <Contact/>
            <Footer/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
