import React, { useEffect } from 'react';
import '../css/OurTeam.css';
import img1 from '../assets/p1.avif';
import img2 from '../assets/p2.webp';
import img3 from '../assets/p3.jpg';

const teamData = [
  { id: 1, name: 'John Doe', imgSrc: img1, socialLinks: { instagram: '#', facebook: '#', twitter: '#' } },
  { id: 2, name: 'Jane Smith', imgSrc: img2, socialLinks: { instagram: '#', facebook: '#', twitter: '#' } },
  { id: 3, name: 'David Johnson', imgSrc: img3, socialLinks: { instagram: '#', facebook: '#', twitter: '#' } }
];

const OurTeam = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="team-container">
      <h4 className="team-title">Our Team</h4>
      <h1 className="team-subtitle">Meet Our Experts</h1>
      <div className="team-members">
        {teamData.map(member => (
          <div key={member.id} className="team-member">
            <div className="member-box">
              <img src={member.imgSrc} alt={member.name} className="member-photo" />
              <div className="member-details">
                <p className="member-name">{member.name}</p>
                <div className="social-icons">
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                  <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
