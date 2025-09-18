// pages/PpfDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./ppfdetails.css";

const PpfDetails = () => {
  return (
    <div className="ppf-page-wrapper">
      <div className="ppf-details-page">
        <h1 className="title">Paint Protection Film (PPF)</h1>

        <p className="intro">
          Paint Protection Film (PPF) is a transparent polyurethane film applied
          to your vehicle’s painted surfaces to protect them from scratches,
          stone chips, bug splatters, and minor abrasions. It provides an
          invisible shield that preserves the factory paint while maintaining a
          glossy finish.
        </p>

        {/* Benefits Section with Video */}
        <div className="benefits-section">
          <div className="benefits-text">
            <h2 className="subtitle">Benefits of PPF</h2>
            <ul className="benefits-list">
              <li>Shields against scratches, rock chips, and stains</li>
              <li>Protects from UV rays and oxidation</li>
              <li>Keeps your car looking glossy and new</li>
              <li>Maintains resale value by preserving paint quality</li>
              <li>Self-healing properties for minor scratches</li>
            </ul>
          </div>
          <div className="benefits-video">
            <video autoPlay loop muted playsInline>
              <source src="/ppf.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <h2 className="subtitle">Why Choose Our PPF?</h2>
        <p className="intro">
          At <strong>Remake Auto Studio</strong>, we use premium-grade PPF that
          ensures durability, clarity, and protection for years to come. Our
          expert technicians apply the film with precision, ensuring a flawless
          finish that blends seamlessly with your vehicle.
        </p>

        <h2 className="subtitle">Advantages of PPF</h2>
        <div className="advantages-section">
          <div className="adv-card">
            <h3>Self-Healing</h3>
            <p>
              Paint Protection Film (PPF) features advanced self-healing
              technology that repairs minor scratches, swirl marks, and abrasions
              when exposed to heat or sunlight. This ensures your car maintains a
              smooth, glossy finish without constant polishing, keeping it
              showroom-fresh even under daily wear.
            </p>
          </div>
          <div className="adv-card">
            <h3>Resale Value</h3>
            <p>
              PPF protects your car from scratches, stone chips, and fading,
              maintaining its original paint condition. A pristine finish enhances
              resale value, as buyers prefer vehicles with flawless paintwork,
              making PPF both protection and a smart investment.
            </p>
          </div>
          <div className="adv-card">
            <h3>Durability</h3>
            <p>
              High-quality PPF is engineered to withstand road debris, chemicals,
              and weather conditions. Unlike wax or coatings that require frequent
              reapplication, PPF offers years of consistent protection, giving you
              peace of mind and lasting confidence in your car’s appearance.
            </p>
          </div>
          <div className="adv-card">
            <h3>UV Protection</h3>
            <p>
              Constant sun exposure can fade and oxidize paint over time. PPF
              blocks harmful UV rays, preserving your car’s color, shine, and
              paint integrity, ensuring it remains vibrant and glossy for years.
            </p>
          </div>
        </div>

        <Link to="/book-now" className="cta-btn">
          Book Your PPF Installation
        </Link>
      </div>
    </div>
  );
};

export default PpfDetails;
