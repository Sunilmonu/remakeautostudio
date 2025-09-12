// pages/Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: "paint-protection",
      title: "Paint Protection Film",
      price: "$599+",
      description: "Clear urethane film to protect your vehicle's paint from chips and scratches",
      features: ["Rock chip protection", "Self-healing properties", "UV resistant", "5-10 year warranty"]
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      price: "$499+",
      description: "Advanced ceramic coating for long-lasting paint protection and shine",
      features: ["Hydrophobic effect", "Scratch resistance", "UV protection", "2-5 year durability"]
    },
    {
      id: "sunfilm",
      title: "Sunfilm",
      price: "$199+",
      description: "High-quality window tinting for UV protection and enhanced privacy",
      features: ["UV protection", "Heat reduction", "Enhanced privacy", "Lifetime warranty"]
    },
    {
      id: "detailing",
      title: "Interior & Exterior Detailing",
      price: "$249",
      description: "Complete interior and exterior detailing for a showroom finish",
      features: ["Full exterior detail", "Full interior detail", "Paint sealant", "Headlight restoration"]
    }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <h1>Our Detailing Services</h1>
        <p>Premium services to keep your vehicle looking its best</p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} id={service.id} className="service-card">
            <div className="service-header">
              <h3>{service.title}</h3>
              <div className="service-price">{service.price}</div>
            </div>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn service-btn">Select Package</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;