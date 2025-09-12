// pages/Gallery.js
import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'exterior', 'interior', 'before-after'];
  
  const galleryItems = [
    { id: 1, category: 'exterior', title: 'Exterior Detailing', image: 'https://via.placeholder.com/400x300?text=Exterior+Detail' },
    { id: 2, category: 'interior', title: 'Interior Cleaning', image: 'https://via.placeholder.com/400x300?text=Interior+Detail' },
    { id: 3, category: 'before-after', title: 'Paint Restoration', image: 'https://via.placeholder.com/400x300?text=Before+After' },
    { id: 4, category: 'exterior', title: 'Ceramic Coating', image: 'https://via.placeholder.com/400x300?text=Ceramic+Coating' },
    { id: 5, category: 'interior', title: 'Leather Conditioning', image: 'https://via.placeholder.com/400x300?text=Leather+Care' },
    { id: 6, category: 'before-after', title: 'Headlight Restoration', image: 'https://via.placeholder.com/400x300?text=Headlight+Restoration' },
    { id: 7, category: 'exterior', title: 'Wheel Detailing', image: 'https://via.placeholder.com/400x300?text=Wheel+Detailing' },
    { id: 8, category: 'interior', title: 'Deep Cleaning', image: 'https://via.placeholder.com/400x300?text=Deep+Cleaning' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Our Work Gallery</h1>
        <p>See the transformation of vehicles we've detailed</p>
      </div>
      
      <div className="filter-buttons">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.replace('-', ' ')}
          </button>
        ))}
      </div>
      
      <div className="gallery-grid">
        {filteredItems.map(item => (
          <div className="gallery-item" key={item.id}>
            <div className="gallery-image">
              <img src={item.image} alt={item.title} />
              <div className="image-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;