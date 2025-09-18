// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Remake Auto Studio</h3>
          <p>Premium automotive detailing services to keep your vehicle looking its best.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Gmail">t</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/book-now">Book Now</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 Auto Care Lane</p>
          <p>Carville, CV 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: remakeautostudio@gmail.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Remake Auto Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;