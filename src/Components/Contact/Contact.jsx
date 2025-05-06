

import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Replace this with your actual Web3Forms access key
    formData.append("access_key", "8f73418a-0dee-42a3-bfb9-083152e4d6f8");

    // Optional customizations
    formData.append("subject", "New Contact Form Submission from Astaps");
    formData.append("from_name", "Astaps Website");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <section className="about-banner">
    <div className="about-content">
      <h1>Contact Us</h1>
      <p>Home &gt; Contact Us</p>
    </div>
  </section>
 
    <div className='contact'>
     
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below.
          Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
        </p>
        <ul>
          <li><img src={mail_icon} alt="" /> Contact@Astaps.com</li>
          <li><img src={phone_icon} alt="" /> +91 62050 42383</li>
          <li><img src={location_icon} alt="" /> Sector 15 Gurgoan<br />110059, India</li>
        </ul>

        <h3>Connect with us on Social Media</h3>
        <ul>
          <li><FaFacebookF /> Facebook</li>
            <li><FaInstagram /> Instagram</li>
            <li><FaLinkedinIn /> LinkedIn</li>
            <li><FaTwitter /> Twitter</li>
            </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          {/* Hidden fields for customization */}
          <input type="hidden" name="subject" value="New Contact Form Submission from Astaps" />
          <input type="hidden" name="from_name" value="Astaps Website" />

          <button type="submit" className='btn orange'>
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
      
    </div>
    </div>
  );
};

export default Contact;
