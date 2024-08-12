import React, { useState } from 'react';
import './style.css';  // Import the CSS file

const AboutUs = () => {
  const [currentImageIndex] = useState(0);
  const images = [
    '/images/about2.jpg',
    '/images/about1.jpg',
  ];

  const backgroundImage = images[currentImageIndex];

  return (
    <div
      className="home-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="about-us-container">
        <div className="about-banner">
          <h1>GERAR TALENT SCHOOLS (A NEW PREMIER SCHOOL)</h1>
          <p>
            Our schools cater for families seeking the Kenyan competency-based curriculum (CBC). We are enrolling
            learners as follows:
          </p>
          <ul>
            <li>Kindergarten (Pre-Primary): Day care, PP 1 &amp; PP 2</li>
            <li>Primary: Grade 1 to 6</li>
            <li>Junior Secondary School (JSS): Grade 7, 8 &amp; 9</li>
          </ul>
          <p>
            The school caters for learners from vulnerable family backgrounds for inclusivity in education for all
            through scholarships and donations from partners and well-wishers.
          </p>
          <p>
            Each learner is given individual attention to ensure their unique talents and abilities are discovered and
            allowed to develop to full potential. Hence classes are hands on, interactive and learner centered to
            help them solve problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
