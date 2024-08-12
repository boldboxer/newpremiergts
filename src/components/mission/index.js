import React from 'react';
import './style.css'; 

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-vision-container">
        <div className="mission" id="mission">MISSION</div>
        <div className="core-values" id ="core-values">CORE VALUES</div>

        <div className="vision" id="vision">VISION</div>
      </div>
      <div className="mission-item">
        <h2>Mission</h2>
        <p>
        To holistically empower learners, excel and ready to thrive in a dynamic world
        </p>
      </div>
      <div className="mission-item">
        <h2>Vision</h2>
        <p>
        To be a premier institution fostering creativity, innovation and global citizenship.
        </p>
      </div>
      <div className="mission-item">
        <h2>Core Values</h2>
        <p><ul className="values">
        <li>C Creativity</li>
        <li>I Integrity</li>
        <li>R Respect</li>
        <li>E Excellence</li>
        <li>C Collaboration</li></ul>
        </p>
      </div>
    </div>
  );
};

export default Mission;



