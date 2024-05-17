import React from 'react';
import '../css/VideoSection.css';
import video from '../assets/video.mp4'

const VideoSection = () => {
    const playVideo = () => {
      const videoElement = document.getElementById('myVideo');
      const overlay = document.querySelector('.overlay');
      overlay.style.display = 'none';
      videoElement.play();
    };
  
    return (
      <div className="video-container">
        <video id="myVideo" controls height="600">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className="content">
            {/* Add your content here */}
            <h3 style={{color:'black'}}>Short Video</h3>
            <h1 style={{fontSize:'50px',color:'black'}}>Our Presentation</h1>
          </div>
          <button id="playButton" onClick={playVideo}>Play</button>
        </div>
      </div>
    );
  };
  
  export default VideoSection;