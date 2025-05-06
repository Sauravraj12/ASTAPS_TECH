// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//   return (
//     <div className='footer'>
//       <p>© 2024 Astaps. All rights reserved.</p>



//       <ul>
//         <li><a href="Astaps" target='_blank'>Terms of Services</a></li>
//         <li><a href="Astaps" target='_blank'>Privacy Policy</a></li>
//       </ul>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>
      <div className="footer-content">
        <div className="footer-section ">
          <h3>About Us</h3>
          <p>
          Empowering Careers and Businesses with Expert IT Courses and Services — Master AI, Web Development, Data Analysis, and Digital Marketing or Grow Your Brand with Our Web and Marketing Solutions.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Internships</li>
          
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section follow">
          <h3>Follow Us</h3>
          <ul>
            <li><FaFacebookF /> Facebook</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaLinkedinIn /> LinkedIn</li>
            <li><FaTwitter /> Twitter</li>
          </ul>
        </div>
        <div className="footer-section ">
          <h3>Contact Info</h3>
          <ul>
          <li><FaPhone /> 6205042383</li>
          <li><FaEnvelope /> Services.Astaps@Gmail.Com</li>
          <li><FaMapMarkerAlt /> Sector 15, Gurgaon, India - 110021</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <h1>ASTAPS</h1>
        © 2025 Astaps. All Rights Reserved.
        {/* <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
        <Link to="/terms-of-service" className="footer-link">Terms of Service</Link> */}
      </div>
    </footer>
  );
};

export default Footer;

