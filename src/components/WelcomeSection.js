import React from 'react';
import '../css/WelcomeSection.css'; 
import check from '../assets/check.png'
import welcomeImage from '../assets/welcome.jpg';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-left">
        <img 
          src={welcomeImage} 
          alt="Team working together" 
          className="welcome-image" 
        />
       <p style={{ fontSize: '30px', marginLeft: '10px' }} className="welcome-content">
        <b>We're Ready to Grow Your<br></br> Business With Us.</b>
        </p>
        <p style={{ fontSize: '20px', marginLeft: '10px',color:'#666666'}} >Leverage agile frameworks to provide a robust <br></br>synopsis for high level overviews, thinking<br></br> to further the overall value proposition.</p>
        <a href='https://civiccraft.in/'><p style={{ fontSize: '20px',textDecoration:'underline',marginRight: '280px'}} ><b>Get In Touch</b></p></a>
      </div>

      <div className="welcome-right">
        <h2 className='welcome-title'>Welcome to Our Company</h2>
        <p style={{fontSize:'50px',lineHeight:'0.9',color:'black'}}>
          <b>We Care About Your<br></br> Business Plan.</b>
        </p>
        <p style={{color:'#666666'}}>
          Welcome to Civiccraft Technologies! We are dedicated to providing innovative solutions 
          that drive success<br></br> and create value for our clients.
          <br></br>
          <br></br>
          Our team of experts is here to help you navigate the challenges of the modern business 
          landscape with <br></br>confidence and creativity.
        </p>

  <p style={{ border: '1px solid #b3b3b3', padding: '25px', display: 'inline-block', verticalAlign: 'middle'}}>
    <img src={check} alt="Check Icon" style={{ verticalAlign: 'middle', marginRight: '10px', height: '20px', width: '24px' }} />
    <b>Our Vision</b><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Capitalize on how hanging fruit to identify the ballpark value added activity to <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;beta clickthroughs.
  </p>

  <p style={{ border: '1px solid #b3b3b3', padding: '25px', display: 'inline-block', verticalAlign: 'middle'}}>
    <img src={check} alt="Check Icon" style={{ verticalAlign: 'middle', marginRight: '10px', height: '20px', width: '24px' }} />
    <b>Our Mision</b><br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podcasting the operational change management inside of workflows to establish<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a framework.
  </p>
<br></br>
<div>
  <a href='https://civiccraft.in/'><button className="more-about-button">More About Us</button></a>
</div>
      </div>
    </section>
  );
};

export default WelcomeSection;
