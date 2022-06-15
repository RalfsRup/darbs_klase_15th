import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Login from './pages/login';
import Prod from './pages/products/products';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/signup' element={<SignUp />} />
        
        <Route path='/login'  element={<Login />}  />
        <Route path='/products'  element={<Prod />}  />
      </Routes>
     
    </Router>
     
  );
}

export default App;
