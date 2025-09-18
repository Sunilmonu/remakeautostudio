// pages/CeramicDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./ceramicdetails.css"; // Now using a dedicated CSS

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

        <div className="ceramic-benefits-section">
          <div className="ceramic-benefits-text">
            <h2 className="ceramic-subtitle">Benefits of Ceramic Coating</h2>
            <ul className="ceramic-benefits-list">
              <li>
                Provides long-lasting paint protection against environmental
                damage
              </li>
              <li>
                Repels water, dust, dirt, and chemical stains for easier cleaning
              </li>
              <li>
                Enhances gloss, depth, and shine for a showroom finish
              </li>
              <li>Reduces minor swirl marks and surface imperfections</li>
              <li>Protects against UV damage and oxidation</li>
            </ul>
          </div>

          {/* ✅ Replaced image with video */}
          <div className="ceramic-benefits-video">
            <video
              src="/ceramic1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="ceramic-video"
            />
          </div>
        </div>

        <h2 className="ceramic-subtitle">Why Choose Our Ceramic Coating?</h2>
        <p className="ceramic-intro">
          At <strong>Remake Auto Studio</strong>, we use professional-grade
          ceramic coatings that last for years, providing unmatched durability
          and gloss. Our expert technicians ensure precise application for a
          flawless finish, giving your car a deep, reflective shine while
          protecting it from everyday wear, weather, and contaminants.
        </p>

        <Link to="/book-now" className="ceramic-cta-btn">
          Book Your Ceramic Coating
        </Link>
      </div>
    </div>
  );
};

export default CeramicDetails;
