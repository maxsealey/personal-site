import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.scss';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Experience from './pages/experience/Experience';
import Contact from './pages/contact/Contact';

const App = () => {
    return (
        <>
        <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/about" element={<About/>}></Route>
            <Route path = "/projects" element={<Projects/>}></Route>
            <Route path = "/experience" element={<Experience/>}></Route>
            <Route path = "/contact" element={<Contact/>}></Route>
        </Routes>
        </>
    )
}

export default App;
