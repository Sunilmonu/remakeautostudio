// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import PpfDetails from "./pages/ppfdetails";
import CeramicDetails from "./pages/CeramicDetails";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book-now" element={<BookNow />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/ppf" element={<PpfDetails />} />
            <Route path="/ceramic" element={<CeramicDetails />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;