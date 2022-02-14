import React, { useState } from 'react'
import NavBar from './NavBar';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import { Routes, Route, Navigate } from 'react-router-dom'

const App=()=>{
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  )
}

export default App;
