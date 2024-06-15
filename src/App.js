import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Banner from './components/pages/Banner';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router >
       <Routes>
        <Route path='/' element={<Home />}/>
       <Route path="/signin" element={<Signin />} />
       <Route path="/signup" element={<Signup />} />
       </Routes>
    </Router>
  )
}

export default App