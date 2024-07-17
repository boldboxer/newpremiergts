import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Contact Information</h3>
        <ul className="contact-list">
          <li>
            Address: [Your School Address]
          </li>
          <li>
            Phone: 0712345678
          </li>
          <li>
            Email: gerartalentschools2@gmail.com
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>About Our School</h3>
        <ul>
          <li>Our Headteacher's Welcome</li>
          <li>Our School</li>
          <li>Our Partners</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Students</h3>
        <ul>
          <li>Timetables</li>
          <li>Academic Support</li>
          <li>Fee Structures</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Important Links</h3>
        <ul>
          <li>Vacancies</li>
          <li>Cookies Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Affiliate Schools</h3>
        <ul>
          <li>British Curriculum</li>
          <li>Kenyan CBC Curriculum</li>
          <li>East African Curriculum</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Portal</h3>
        <ul>
          <li>Classes</li>
          <li>Teachers</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Parents</h3>
        <ul>
          <li>Fee Structure</li>
          <li>Parents Handbook</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


