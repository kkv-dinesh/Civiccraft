import React from 'react';
import '../css/WorkProcess.css';
import calendarIcon from '../assets/calendar.svg';  // Replace with your actual icon path
import puzzleIcon from '../assets/puzzle.svg';      // Replace with your actual icon path
import securityIcon from '../assets/security.svg';  // Replace with your actual icon path

const WorkProcess = () => {
    return (
      <section className="work-process-section">
        <div className="work-process-title-container">
          <h2 className="work-process-title">Work Process</h2>
          <h1 className="work-process-subtitle">HOW WE WORK</h1>
        </div>
        <br></br>
        <div className="work-process-box-container">
          <div className="work-process-box">
            <div className="work-process-icon-container">
              <img src={calendarIcon} alt="Calendar Icon" className="work-process-icon" />
            </div>
            <h3>Make Appointment</h3>
            <p>Schedule your appointment with ease <br></br>
            using our online system.</p><br></br>
            <p style={{color:'blue'}}>Testimonials</p>
          </div>
          <div className="work-process-box">
            <div className="work-process-icon-container">
              <img src={puzzleIcon} alt="Puzzle Icon" className="work-process-icon" />
            </div>
            <h3>Consultation</h3>
            <p>Receive expert consultation to address <br></br>
            your specific needs.</p><br></br>
            <p style={{color:'blue'}}>Testimonials</p>
          </div>
          <div className="work-process-box">
            <div className="work-process-icon-container">
              <img src={securityIcon} alt="Security Icon" className="work-process-icon" />
            </div>
            <h3>Enjoy the Service</h3>
            <p>Experience the highest quality of service<br></br>
            tailored to you.</p><br></br>
            <p style={{color:'blue'}}>Testimonials</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkProcess;