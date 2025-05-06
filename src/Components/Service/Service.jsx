import React from 'react';
import './Service.css';
import Lottie from 'lottie-react';

import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import websiteAnimation from '../../animations/website.json';
import digitalTeamAnimation from '../../animations/Digital.json';
import { Player } from "@lottiefiles/react-lottie-player";
import animation1 from "../../animations/serviceTeam.json";
import animation2 from "../../animations/website.json";
import animation3 from "../../animations/serviceLearn.json";
import animation4 from "../../animations/serviceAi.json";

const AboutServices = () => {
  return (
    <div>{/* About Us Banner */}
    <section className="about-banner">
    <div className="about-content">
      <h1>Service</h1>
      <p>Home &gt; Service</p>
    </div>
  </section>
 

<div className="about-services">
  {/* Services Intro Section */}
  <section className="services-intro">
    <div className="intro-left">
      <h3>Services</h3>
      <h1>Unlocking Brilliance! <br /> One Step at a Time</h1>
      <p>
        We offer expert-led courses in AI/ML, Web Development, Data Analysis, and Digital Marketing,
        alongside professional web development and digital marketing services to help individuals build careers
        and businesses achieve growth.
      </p>
      <button className="know-more-btn">Know More</button>
    </div>

    <div className="intro-right">
      <div className="image-grid">
        <Player
          autoplay
          loop
          src={animation1}
          className="rounded-rect"
        />
        <Player
          autoplay
          loop
          src={animation2}
          className="rounded-rect"
        />
        <Player
          autoplay
          loop
          src={animation3}
          className="circle"
        />
        <Player
          autoplay
          loop
          src={animation4}
          className="half-circle"
        />
      </div>
    </div>
  </section>


      

      {/* Website Development Section */}
      <section className="website-development">
        <div className="left">
          <Lottie animationData={websiteAnimation} loop={true} />
        </div>
        <div className="right">
          <h2>Website Development</h2>
          <p>
          Our website development service creates custom, responsive, and user-friendly websites tailored to your business needs, ensuring seamless functionality, modern design, and an optimal user experience for maximum online presence.
          </p>
          <ul>
            <li>Custom Website Design</li>
            <li>Responsive Layouts</li>
            <li>E-commerce Integration</li>
            <li>Content Management Systems (CMS)</li>
            <li>Speed & SEO Optimization</li>
            <li>Secure & Scalable Architecture</li>
          </ul>
          <div className="stats">
            <div><h3>4+</h3><p>Projects Completed</p></div>
            <div><h3>98%</h3><p>Happy Customers</p></div>
          </div>
          
          <button>Explore More</button>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="digital-marketing">
        <div className="text">
          <h2>Digital Marketing</h2>
          <p>
          Our digital marketing service helps businesses grow online through targeted strategies in SEO, social media marketing, content creation, and paid advertising, driving traffic, engagement, and measurable results to boost your brand.
          </p>
          <ul>
            <li>Website Development</li>
            <li>Search Engine Optimisation</li>
            <li>Social Media Optimisation</li>
            <li>E-mail Marketing</li>
          </ul>
          <p>Click here to explore further ↓</p>
          <button className='digital-button'>Explore More</button>
        </div>
        <div className="image">
          <Lottie animationData={digitalTeamAnimation} loop={true} />
          <div className="bubble">"Boost Your Business with Powerful Digital Marketing Strategies"</div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutServices;
