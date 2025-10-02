// pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Balaji K",
      position: "Founder & Master Detailer",
      bio: "With over 15 years of experience in automotive detailing, who founded Remake Auto Studio to bring premium detailing services to our community.",
      image: "https://via.placeholder.com/150x150?text=Alex"
    },
   
    
  ];

  return (
    <div className="about-us-page">
      <div className="page-header">
        <h1>About Remake Auto Studio</h1>
        <p>Our passion for perfection in automotive care</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2016, Remake Auto Studio started as a small operation with a single goal: to provide exceptional automotive detailing services that exceed customer expectations. Over the years, we've grown into a premier detailing studio serving the entire metropolitan area.</p>
          <p>Our commitment to using only the highest quality products and latest techniques has earned us a reputation for excellence. We treat every vehicle as if it were our own, ensuring meticulous attention to detail in every service we provide.</p>
        </div>
        
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>At Remake Auto Studio, our mission is to deliver unparalleled automotive detailing services that enhance and protect your vehicle's appearance and value. We strive to provide:</p>
          <ul className="mission-list">
            <li>Exceptional quality in every service</li>
            <li>Outstanding customer experience</li>
            <li>Eco-friendly practices and products</li>
            <li>Continuous education and training</li>
            <li>Honesty and integrity in all we do</li>
          </ul>
        </div>
        
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
    <div className="values-section">
  <h2>Our Values</h2>
  <div className="values-grid">
    <div className="value-item">
      <div className="value-icon">
        <img src={`${process.env.PUBLIC_URL}/icons/search.svg`} alt="Attention to Detail" />
      </div>
      <h3>Attention to Detail</h3>
      <p>We believe perfection is in the details, and we never cut corners.</p>
    </div>
    <div className="value-item">
      <div className="value-icon">
        <img src={`${process.env.PUBLIC_URL}/icons/plant.svg`} alt="Eco-Friendly" />
      </div>
      <h3>Eco-Friendly</h3>
      <p>We use environmentally safe products and water-saving techniques.</p>
    </div>
    <div className="value-item">
      <div className="value-icon">
        <img src={`${process.env.PUBLIC_URL}/icons/protection.svg`} alt="Protection" />
      </div>
      <h3>Protection</h3>
      <p>We help protect your investment with our premium services.</p>
    </div>
    <div className="value-item">
      <div className="value-icon">
        <img src={`${process.env.PUBLIC_URL}/icons/happy.svg`} alt="Customer Satisfaction" />
      </div>
      <h3>Customer Satisfaction</h3>
      <p>Your satisfaction is our top priority and measure of success.</p>
    </div>
  </div>
</div>


      </div>
    </div>
  );
};

export default AboutUs;