import React from 'react';
import '../css/NavBar.css'; 
import logo from '../assets/logo.jpg'; 

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#top" style={{textDecoration:'none'}}> {/* Redirects to the top of the page */}
            <img src={logo} alt="Company Logo" />
            <span className="company-name">Civiccraft Technologies</span>
            </a>
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contactus">Contact Us</a></li>
        </ul>
        <a href="https://civiccraft.in/" className="get-counseling-button">Get Counseling</a>
      </nav>
    </div>
  );
};

export default NavBar;
