import React from 'react';
import '../css/OurRecords.css'; 
import icon1 from '../assets/work.svg';
import icon2 from '../assets/satisfied.svg';
import icon3 from '../assets/file.svg';
import icon4 from '../assets/group.svg';

const OurRecords = () => {
  return (
    <section className="our-records-section">
      <div className="our-records-overlay">
        <div className="our-records-box-container">
          <div className="our-records-box">
            <img src={icon1} alt="Icon 1" className="our-records-icon" />
            <h3 style={{color:'#48ddb6',fontSize:'50px'}}>10+</h3>
            <p><b>Years of Experience</b></p>
            <p>Over 10+ years of proven experience</p>
          </div>
          <div className="vertical-line"></div>
          <div className="our-records-box">
            <img src={icon2} alt="Icon 2" className="our-records-icon" />
            <h3 style={{color:'#48ddb6',fontSize:'50px'}}>5960</h3>
            <p><b>Satisfied Clients</b></p>
            <p>Over 5960+ Satisfied Clienst</p>
          </div>
          <div className="vertical-line"></div>
          <div className="our-records-box">
            <img src={icon3} alt="Icon 3" className="our-records-icon" />
            <h3 style={{color:'#48ddb6',fontSize:'50px'}}>50k</h3>
            <p><b>IT Problems Solved</b></p>
            <p>50000+ IT solutions solved</p>
          </div>
          <div className="vertical-line"></div>
          <div className="our-records-box">
            <img src={icon4} alt="Icon 4" className="our-records-icon" />
            <h3 style={{color:'#48ddb6',fontSize:'50px'}}>25+</h3>
            <p><b>Pro Team Members</b></p>
            <p>25+ Pro Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRecords;
