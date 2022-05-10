import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Footer />
      </div>
    )
  }
}

export default App;
