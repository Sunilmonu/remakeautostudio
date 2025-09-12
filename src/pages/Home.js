// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Remake Auto Studio</h1>
          <p>Restore your vehicle's showroom shine with our premium detailing services</p>
          <div className="hero-buttons">
            <Link to="/book-now" className="btn primary-btn">Book Appointment</Link>
            <Link to="/services" className="btn secondary-btn">Our Services</Link>
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
          <Link to="/services#paint-protection" className="service-card">
            <div className="card-icon"></div>
            <h3>PAINT PROTECTION FILM</h3>
            <p>Paint Protection Film (PPF) is a transparent polyurethane film applied to vehicles to protect the paint from scratches, stone chips, and minor abrasions. It also helps shield the surface from UV rays, oxidation, and chemical stains. PPF is widely used to maintain a car’s glossy appearance and resale value over time.</p>
            <div className="card-arrow">Know More</div>
          </Link>
          
          <Link to="/services#ceramic-coating" className="service-card">
            <div className="card-icon"></div>
            <h3>CERAMIC COATING</h3>
            <p>Ceramic coating is a liquid polymer applied to a vehicle’s exterior that chemically bonds with the paint to create a durable protective layer. It enhances gloss, provides hydrophobic (water-repelling) properties, and protects against UV rays, dirt, and minor scratches. Unlike wax, ceramic coating lasts for years with proper maintenance.</p>
            <div className="card-arrow">Know More</div>
          </Link>
          
          <Link to="/services#sunfilm" className="service-card">
            <div className="card-icon"></div>
            <h3>SUNFILM</h3>
            <p>Sun film is a thin, transparent or tinted film applied to a vehicle’s windows or building glass. It helps reduce heat, glare, and harmful UV rays, making the interior cooler and more comfortable. Sun films also enhance privacy and protect upholstery from fading.</p>
            <div className="card-arrow">Know More</div>
          </Link>
          
          <Link to="/services#detailing" className="service-card">
            <div className="card-icon"></div>
            <h3>INTERIOR & EXTERIOR DETAILING</h3>
            <p>Vehicle detailing includes both interior and exterior care. Interior detailing deep cleans seats, carpets, dashboard, and other cabin areas, removing dust, stains, and odors for a fresh environment. Exterior detailing cleans and protects the car’s paint, wheels, glass, and trim through washing, polishing, waxing, and paint protection to maintain shine and guard against damage.</p>
            <div className="card-arrow">Know More</div>
          </Link>
        </div>
      </div>
      
      <div className="cta-section">
        <h2>Ready to Transform Your Vehicle?</h2>
        <p>Experience the difference with our professional detailing services</p>
        <Link to="/book-now" className="btn primary-btn">Book Now</Link>
      </div>
    </div>
  );
};

export default Home;