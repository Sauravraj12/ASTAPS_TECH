import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import Lottie from 'lottie-react';
import animationData from '../../animations/robot-hand.json';
import backgroundImg from '../../assets/background.jpg';
import TransformEducation from '../../Components/TransformEducation/TransformEducation';
import Testimonials from '../Testimonials/Testimonials';
import ServicesSection from '../ServiceSection/ServiceSection';
import TrendingCourses from '../Trending/trending';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';


const HomePage = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact'); // Adjust this route if your contact page path is different
  };
  return (
    <div>
    
    <section className="contact-banner">
    <Banner/>
    </section>
      <section className="hero-container">
      
        <div className="hero-left">
          <p className="hero-tagline">– Join Job Guarantee Training with Internship</p>
          <h1 className="hero-title">
            Empowering Careers and Businesses with Expert IT Courses and Services — Master AI, Web Development, Data
            Analysis, and Digital Marketing or Grow Your Brand with Our Web and Marketing Solutions.
          </h1>
          <p className="hero-subtitle">
            Empowering individuals and businesses through tech skills and digital solutions
          </p>
          <div className="hero-buttons">
          <button className="btn orange" onClick={handleContactClick}>
              Contact us
            </button>
          </div>
        </div>
        <div className="hero-right">
          <Lottie animationData={animationData} loop={true} className="hero-animation" />
        </div>
      </section>

<TrendingCourses/>
<ServicesSection/>

      <Testimonials/>
<TransformEducation/>
    </div>
  );
};

export default HomePage;
