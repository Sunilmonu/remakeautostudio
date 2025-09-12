// pages/BookNow.js
import React, { useState } from 'react';
import './BookNow.css';

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Booking request submitted! We will contact you shortly to confirm your appointment.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicleType: '',
      service: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <div className="book-now-page">
      <div className="page-header">
        <h1>Book Your Detailing Appointment</h1>
        <p>Schedule your vehicle detailing service with our easy online booking system</p>
      </div>
      
      <div className="booking-container">
        <div className="booking-form-container">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleType">Vehicle Type</label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
                <option value="van">Van</option>
                <option value="sports">Sports Car</option>
                <option value="luxury">Luxury Vehicle</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Select Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select Service</option>
                <option value="express">Express Wash & Wax - $79</option>
                <option value="interior">Full Interior Detail - $149</option>
                <option value="premium">Premium Detail Package - $249</option>
                <option value="ceramic">Ceramic Coating - $499+</option>
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time</option>
                  <option value="9am">9:00 AM</option>
                  <option value="10am">10:00 AM</option>
                  <option value="11am">11:00 AM</option>
                  <option value="12pm">12:00 PM</option>
                  <option value="1pm">1:00 PM</option>
                  <option value="2pm">2:00 PM</option>
                  <option value="3pm">3:00 PM</option>
                  <option value="4pm">4:00 PM</option>
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any special requests or information about your vehicle..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn primary-btn submit-btn">Book Appointment</button>
          </form>
        </div>
        
        <div className="booking-info">
          <div className="info-card">
            <h3>Booking Information</h3>
            <p>Our operating hours are Monday to Saturday, 9:00 AM to 6:00 PM. We are closed on Sundays.</p>
            <p>Appointments typically last between 2-5 hours depending on the service selected.</p>
            <p>Please arrive 10 minutes before your scheduled appointment time.</p>
            
            <div className="contact-info">
              <h4>Contact Us</h4>
              <p>📞 (555) 123-4567</p>
              <p>✉️ info@autoshinedetailing.com</p>
              <p>📍 123 Auto Care Lane, Carville, CV 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;