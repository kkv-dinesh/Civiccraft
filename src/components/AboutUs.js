import React from 'react';
import '../css/AboutUs.css'; 

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <p className="about-us-title">About Us</p>
        <p style={{ fontSize: '30px', fontFamily: 'Inter, sans-serif', color: 'white' }}>Know About Us</p>
        <p style={{ fontSize: '15px', fontFamily: 'Inter, sans-serif', color: 'white' }}>
          Collaboratively administrate empowered markets plug and play
          <br />
          network dynamically procrastinated
        </p>
      </div>
      <div className="about-us-background"></div>
    </section>
  );
};

export default AboutUs;
