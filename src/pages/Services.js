// pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
const services = [
  {
    id: "paint-protection",
    title: "Paint Protection Film",
    description: "Clear urethane film to protect your vehicle's paint from chips and scratches",
    features: ["Rock chip protection", "Self-healing properties", "UV resistant", "10 year warranty"]
  },
  {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    description: "Advanced ceramic coating for long-lasting paint protection and shine",
    features: ["Hydrophobic effect", "Scratch resistance", "UV protection", "3-5 year durability"]
  },
  {
    id: "sunfilm",
    title: "Sunfilm",
    description: "High-quality window tinting for UV protection and enhanced privacy",
    features: ["UV protection", "Heat reduction", "Enhanced privacy", "Lifetime warranty"]
  },
  {
    id: "detailing",
    title: "Interior & Exterior Detailing",
    description: "Complete interior and exterior detailing for a showroom finish",
    features: ["Full exterior detail", "Full interior detail", "Paint sealant", "Headlight restoration"]
  },
  {
    id: "tinkering-painting",
    title: "Tinkering & Painting",
    description: "Minor repairs and painting work to maintain your vehicle's look",
    features: ["Scratch repair", "Dent removal", "Custom paint touch-ups", "Rust prevention"]
  },
  {
    id: "accessories",
    title: "Accessories",
    description: "Install and upgrade your vehicle accessories for style and functionality",
    features: ["Car audio", "LED lights", "Seat covers", "Custom trims"]
  },
  {
    id: "minor-electrical",
    title: "Minor Electrical Works",
    description: "Quick fixes for minor electrical issues in your vehicle",
    features: ["Battery check & replacement", "Lighting repair", "Fuse replacement", "Wiring fixes"]
  },
  {
    id: "mechanical-works",
    title: "Mechanical Works",
    description: "Routine maintenance and minor mechanical repairs for your car",
    features: ["Oil change", "Brake inspection", "Suspension check", "Fluid top-up"]
  }
];

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Avaliable Services</h1>
        <p>Premium services to keep your vehicle looking its best</p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-card">
            <div className="service-header">
              <h3>{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
             <Link to="/book-now" className="btn service-btn">
              Select Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
