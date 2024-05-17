import React from 'react';
import '../css/Header.css'; // Adjusted import path
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Header = () => {
  return (
    <header className="header">
      <div className="contact-info">
        <p><i className="fas fa-map-marker-alt"></i> Koirajpur Bairajpur, Near Ring Road Phase-2, Varanasi, Uttar Pradesh - 221105</p>
        <p><i className="fas fa-envelope"></i> accounts@civiccraft.in</p>
        <p><i className="fas fa-clock"></i> Mon - Fri, 8.00 AM - 6.00 PM</p>
      </div>
      <div className="social-links">
        <a href="https://www.instagram.com/civiccraftindia/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/civiccraft/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.linkedin.com/company/civiccraft/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
