// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Layers,ShieldCheckIcon,SunSnowIcon,BrushIcon} from "lucide-react";


const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Elevate Your Ride with Professional Detailing</h1>
          <p>Transform your car into a masterpiece.</p>
          <div className="hero-buttons">
            <Link to="/book-now" className="btn primary-btn">Book Appointment</Link>
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
            <div className="card-icon"><Layers size={40}  /></div>
            <h3>PAINT PROTECTION FILM</h3>
            <p>Paint Protection Film (PPF) is a transparent polyurethane film applied to vehicles to protect the paint from scratches, stone chips, and minor abrasions. It also helps shield the surface from UV rays, oxidation, and chemical stains. PPF is widely used to maintain a car’s glossy appearance and resale value over time.</p>
            <div className="card-arrow">Know More</div>
          </Link>
          
          <Link to="/ceramic" className="service-card">
            <div className="card-icon"><ShieldCheckIcon size={40}  /></div>
            <h3>CERAMIC COATING</h3>
            <p>Ceramic coating is a liquid polymer applied to a vehicle’s exterior that chemically bonds with the paint to create a durable protective layer. It enhances gloss, provides hydrophobic (water-repelling) properties, and protects against UV rays, dirt, and minor scratches. Unlike wax, ceramic coating lasts for years with proper maintenance.</p>
            <div className="card-arrow">Know More</div>
          </Link>
          
          <Link to="/sunfilm" className="service-card">
            <div className="card-icon"><SunSnowIcon size={40}/></div>
            <h3>SUNFILM</h3>
            <p>Sun film is a thin, transparent or tinted film applied to a vehicle’s windows or building glass. It helps reduce heat, glare, and harmful UV rays, making the interior cooler and more comfortable. Sun films also enhance privacy and protect upholstery from fading.</p>
            <div className="card-arrow">Know More</div>
          </Link>
          
          <Link to="/detailing" className="service-card">
            <div className="card-icon"><BrushIcon size={40}/></div>
            <h3>INTERIOR & EXTERIOR DETAILING</h3>
            <p>Vehicle detailing includes both interior and exterior care. Interior detailing deep cleans seats, carpets, dashboard, and other cabin areas, removing dust, stains, and odors for a fresh environment. Exterior detailing cleans and protects the car’s paint, wheels, glass, and trim through washing, polishing, waxing, and paint protection to maintain shine and guard against damage.</p>
            <div className="card-arrow">Know More</div>
          </Link>
        </div>
      </div>
      
      <div className="cta-section">
  <div className="cta-container">
    <h2>Why Choose Us?</h2>
    <p>
      At Remake Auto Studio, we believe that the true beauty of every vehicle lies in its details, 
      and our passion for automobiles drives us to deliver precision, care, and excellence in 
      everything we do. Specializing in Paint Protection Film (PPF), Ceramic Coating, Interior and 
      Exterior Detailing, and Sun Film installation, we offer complete solutions that not only 
      enhance your car’s aesthetics but also safeguard it against everyday wear and tear. We 
      understand that your vehicle is more than just a mode of transport—it is a symbol of style, 
      pride, and personality—which is why we go beyond basic cleaning to deliver a full 
      transformation that brings out its finest look and ensures long-lasting protection. Every car 
      that enters our studio is treated with unmatched attention to detail, premium-quality 
      products, and techniques designed to exceed expectations.
    </p>
  </div>
</div>

    </div>
  );
};

export default Home;