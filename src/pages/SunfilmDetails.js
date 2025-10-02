// pages/SunfilmDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./sunfilmdetails.css";

const SunfilmDetails = () => {
  return (
    <div className="sunfilm-page-wrapper">
      <div className="sunfilm-details-page">
        <h1 className="sunfilm-title">Sun Film</h1>

        <p className="sunfilm-intro">
          Sun film is a thin, transparent or tinted layer applied to your
          vehicle’s windows. It helps reduce heat, glare, and harmful UV rays,
          keeping the interior cooler and more comfortable. Sun film also
          enhances privacy, protects your car’s upholstery from fading, and
          provides a stylish look.
        </p>

        {/* Benefits Section with Images */}
        <div className="sunfilm-benefits-section">
          <div className="sunfilm-benefits-images">
            <img src={`${process.env.PUBLIC_URL}/images/sunfilm1.jpg`} alt="Sunfilm 1" />
            <img src={`${process.env.PUBLIC_URL}/images/sunfilm2.jpg`} alt="Sunfilm 2" />
            <img src={`${process.env.PUBLIC_URL}/images/sunfilm3.jpg`} alt="Sunfilm 3" />
          </div>
        </div>

        <h2 className="sunfilm-subtitle">Why Choose Our Sun Film?</h2>
        <p className="sunfilm-intro">
          At <strong>Remake Auto Studio</strong>, we use premium-quality sun
          films that are designed for durability, heat rejection, and maximum
          clarity. Our expert technicians ensure precise installation, giving
          your car a premium finish, better comfort, and long-lasting
          protection.
        </p>

        {/* Advantages Section */}
        <h2 className="sunfilm-subtitle">Advantages of Sun Film</h2>
        <div className="advantages-section">
          <div className="adv-card">
            <h3>Heat Rejection</h3>
            <p>
              Reduces interior temperature by blocking harmful solar heat,
              providing a more comfortable driving experience.
            </p>
          </div>
          <div className="adv-card">
            <h3>UV Protection</h3>
            <p>
              Protects your car’s interior and upholstery from harmful UV rays
              and fading over time.
            </p>
          </div>
          <div className="adv-card">
            <h3>Privacy & Style</h3>
            <p>
              Tinted films offer privacy for passengers while adding a sleek
              look to your vehicle.
            </p>
          </div>
          <div className="adv-card">
            <h3>Durability</h3>
            <p>
              High-quality films are resistant to scratches, peeling, and
              bubbling, ensuring long-lasting performance.
            </p>
          </div>
        </div>

        <Link to="/book-now" className="sunfilm-cta-btn">
          Book Your Sun Film Installation
        </Link>
      </div>
    </div>
  );
};

export default SunfilmDetails;
