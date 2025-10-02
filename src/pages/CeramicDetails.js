// pages/CeramicDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./ceramicdetails.css"; // Using dedicated CSS

const CeramicDetails = () => {
  return (
    <div className="ceramic-page-wrapper">
      <div className="ceramic-details-page">
        <h1 className="ceramic-title">Ceramic Coating</h1>

        <p className="ceramic-intro">
          Ceramic coating is a liquid polymer applied to your vehicle’s exterior
          surfaces. It chemically bonds with the paint to form a durable,
          protective layer that enhances gloss, repels water, dirt, and
          contaminants, and safeguards your car from minor scratches.
        </p>

        {/* ✅ Benefits Section with 3 Horizontal Images */}
        <div className="ceramic-images-section">
          <img
            src={`${process.env.PUBLIC_URL}/images/ceramic1.jpg`}
            alt="Ceramic Example 1"
            className="ceramic-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/ceramic2.jpg`}
            alt="Ceramic Example 2"
            className="ceramic-image"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/ceramic3.jpg`}
            alt="Ceramic Example 3"
            className="ceramic-image"
          />
        </div>

        <h2 className="ceramic-subtitle">Why Choose Our Ceramic Coating?</h2>
        <p className="ceramic-intro">
          At <strong>Remake Auto Studio</strong>, we use professional-grade
          ceramic coatings that last for years, providing unmatched durability
          and gloss. Our expert technicians ensure precise application for a
          flawless finish, giving your car a deep, reflective shine while
          protecting it from everyday wear, weather, and contaminants.
        </p>

        <h2 className="ceramic-subtitle">Advantages of Ceramic Coating</h2>
        <div className="advantages-section">
          <div className="adv-card">
            <h3>Durability</h3>
            <p>
              Ceramic coating is engineered to withstand road debris, chemicals,
              and weather conditions, providing long-lasting protection without
              frequent reapplication.
            </p>
          </div>
          <div className="adv-card">
            <h3>Gloss & Shine</h3>
            <p>
              Enhances the depth and gloss of your paint, keeping your car
              looking showroom-fresh and reflective for years.
            </p>
          </div>
          <div className="adv-card">
            <h3>UV Protection</h3>
            <p>
              Blocks harmful UV rays that can fade or oxidize your car's paint,
              preserving its color and finish.
            </p>
          </div>
          <div className="adv-card">
            <h3>Easy Maintenance</h3>
            <p>
              Reduces the accumulation of dirt and contaminants, making your
              vehicle easier to clean and maintain.
            </p>
          </div>
        </div>

        <Link to="/book-now" className="ceramic-cta-btn">
          Book Your Ceramic Coating
        </Link>
      </div>
    </div>
  );
};

export default CeramicDetails;
