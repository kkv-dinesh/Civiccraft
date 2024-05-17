import React, { useState } from 'react';
import '../css/Footer.css';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <h2 className="footer-company-name">Civiccraft Technologies</h2>
        </div>
        <div className="footer-right">
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <span>123-456-7890</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>accounts@civiccraft.in</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Koirajpur Bairajpur, Near Ring Road Phase-2, Varanasi, Uttar Pradesh - 221105</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-middle">
        <div className="footer-lists">
          <div className="footer-list">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Our Partners</h3>
            <ul>
              <li>ABC</li>
              <li>Utopia</li>
              <li>Drewy</li>
              <li>HCL</li>
              <li>Twin Rvers</li>
              <li>UDAA</li>
              <li>DA</li>
              <li>Sung</li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Our Services</h3>
            <ul>
              <li>Financial Consulting</li>
              <li>Business Management</li>
              <li>Consultant and Programs</li>
              <li>Company Management</li>
              <li>Insurance & Finance</li>
            </ul>
          </div>
          <div className="footer-list">
            <h3>Developers</h3>
            <ul>
              <li>Web Development</li>
              <li>SEO Marketing</li>
              <li>Development</li>
            </ul>
          </div>
        </div>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <p>Join our mailing list</p>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubscribe}>Subscribe</button>
          {subscribed && <p>Thank you for subscribing!</p>}
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>&copy; 2024 Civiccraft Technologies. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
