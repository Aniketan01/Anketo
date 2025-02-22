import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}

export default App;