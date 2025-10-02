// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Elevate Your Ride with Professional Detailing</h1>
          <p>Transform your car into a masterpiece.</p>
          <div className="hero-buttons">
            <Link to="/book-now" className="btn primary-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="service-cards-section">
        <div className="section-header">
          <h2>Our Premium Services</h2>
          <p>Click on any service to learn more</p>
        </div>

        <div className="service-cards-grid">
          <Link to="/ppf" className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/ppf.jpg`}
              alt="PPF"
              className="service-img"
            />
            <div className="overlay">
              <h3 className="overlay-title">PAINT PROTECTION FILM</h3>
              <span className="overlay-text">Know More</span>
            </div>
          </Link>

          <Link to="/ceramic" className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/ceramic.jpg`}
              alt="Ceramic Coating"
              className="service-img"
            />
            <div className="overlay">
              <h3 className="overlay-title">CERAMIC COATING</h3>
              <span className="overlay-text">Know More</span>
            </div>
          </Link>

          <Link to="/sunfilm" className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/sunfilm.jpg`}
              alt="Sunfilm"
              className="service-img"
            />
            <div className="overlay">
              <h3 className="overlay-title">SUNFILM</h3>
              <span className="overlay-text">Know More</span>
            </div>
          </Link>

          <Link to="/detailing" className="service-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/detailing.jpg`}
              alt="Detailing"
              className="service-img"
            />
            <div className="overlay">
              <h3 className="overlay-title">INTERIOR AND EXTERIOR DETAILING</h3>
              <span className="overlay-text">Know More</span>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2>Why Choose Us?</h2>
          <p>
            At Remake Auto Studio, we believe that the true beauty of every vehicle lies in its
            details, and our passion for automobiles drives us to deliver precision, care, and
            excellence in everything we do. Specializing in Paint Protection Film (PPF), Ceramic
            Coating, Interior and Exterior Detailing, and Sun Film installation, we offer complete
            solutions that not only enhance your car’s aesthetics but also safeguard it against
            everyday wear and tear. We understand that your vehicle is more than just a mode of
            transport—it is a symbol of style, pride, and personality—which is why we go beyond
            basic cleaning to deliver a full transformation that brings out its finest look and
            ensures long-lasting protection. Every car that enters our studio is treated with
            unmatched attention to detail, premium-quality products, and techniques designed to
            exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
