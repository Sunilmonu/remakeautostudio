// pages/DetailingDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./detailingdetails.css"; // Dedicated CSS

const DetailingDetails = () => {
  return (
    <div className="detailing-page-wrapper">
      <div className="detailing-details-page">
        <h1 className="detailing-title">Interior & Exterior Detailing</h1>

        <p className="detailing-intro">
          Vehicle detailing includes thorough cleaning, restoration, and finishing of both interior
          and exterior surfaces to produce a high-quality finish. It enhances the appearance, protects
          surfaces, and prolongs the lifespan of your car’s materials.
        </p>

        {/* Benefits Section with 3 Horizontal Images */}
        <div className="detailing-images-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/detailing1.jpg`}
            alt="Detailing Example 1"
            className="detailing-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/detailing2.jpg`}
            alt="Detailing Example 2"
            className="detailing-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/detailing3.jpg`}
            alt="Detailing Example 3"
            className="detailing-image"
          />
        </div>

        <h2 className="detailing-subtitle">Why Choose Our Detailing Services?</h2>
        <p className="detailing-intro">
          At <strong>Remake Auto Studio</strong>, our expert technicians use premium-quality products and
          professional techniques to ensure your vehicle looks flawless inside and out. Every surface,
          from leather and carpets to paint and wheels, is treated with meticulous care.
        </p>

        <h2 className="detailing-subtitle">Advantages of Detailing</h2>
        <div className="advantages-section">
          <div className="adv-card">
            <h3>Interior Protection</h3>
            <p>
              Deep cleans and protects interior surfaces, preventing fading, stains, and odor buildup, keeping your cabin fresh.
            </p>
          </div>
          <div className="adv-card">
            <h3>Exterior Shine</h3>
            <p>
              Polishes and protects paint, wheels, and trims to restore gloss and maintain a showroom finish.
            </p>
          </div>
          <div className="adv-card">
            <h3>Long-Lasting Care</h3>
            <p>
              Protects all surfaces from environmental damage, oxidation, and contaminants, extending the life of your vehicle.
            </p>
          </div>
          <div className="adv-card">
            <h3>Easy Maintenance</h3>
            <p>
              After professional detailing, your car stays cleaner for longer and is easier to maintain at home.
            </p>
          </div>
        </div>

        <Link to="/book-now" className="detailing-cta-btn">
          Book Your Detailing Service
        </Link>
      </div>
    </div>
  );
};

export default DetailingDetails;
