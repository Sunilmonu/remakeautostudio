// components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="/remakelogo.png" 
            alt="AutoShine Detailing" 
            className="logo-img"
          />
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/gallery" className="nav-link" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
          <Link to="/book-now" className="nav-link" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
          <Link to="/about-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
        </div>
        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;