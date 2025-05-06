import React from 'react';
import './About.css';
import Lottie from 'lottie-react';

import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
 import missionAnimation from '../../animations/mission.json';
 import visionAnimation from '../../animations/vision.json';
//  Import your Lottie JSON files
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  return (
    <div><section className="about-banner">
    <div className="about-content">
      <h1>About Us</h1>
      <p>Home &gt; About Us</p>
    </div>
  </section>
    <div className='about'>
        <div className="about-top">
        <div className="about-left">
          <img src={about_img} alt="about" className='about-img'/>
          <img src={play_icon} alt="play" className='play-icon' onClick={() => setPlayState(true)} />
        </div>
        <div className="about-right">
          <h3>ABOUT ASTAPS</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>At ASTAPS, we are passionate about empowering individuals and businesses through technology and innovation. Our academy offers industry-relevant courses in Artificial Intelligence & Machine Learning, Web Development, Data Analysis, and Digital Marketing, designed to equip students with practical skills and real-world knowledge. With experienced instructors, hands-on training, and a focus on current market trends, we prepare our learners to confidently step into the digital future and achieve their career goals.</p>
          <p>In addition to education, we extend our expertise to businesses by providing professional web development and digital marketing services. Whether you need a dynamic website, effective SEO strategies, or a complete digital growth plan, our team delivers customized solutions that drive success. At [Academy Name], we believe in creating value through learning, technology, and results-driven services — helping you grow, innovate, and lead.</p>
          <button className="about-button">Learn More About Us</button>
        </div>
      </div>

      {/* Mission Section */}
      <div className="about-section mission">
        <div className="section-text">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals with future-ready skills in AI, Web Development, Data Analysis, and Digital Marketing, while delivering innovative web development and digital marketing services that help businesses thrive in a fast-evolving digital world.
          </p>
        </div>
        <div className="section-img">
          <div className='animation1'>
          <Lottie animationData={missionAnimation} loop={true}  />
        </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="about-section vision">
        <div className="section-img">
        <div className='animation1'>
          <Lottie animationData={visionAnimation} loop={true} />
        </div>
        </div>
        <div className="section-text">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a leading hub for technology education and digital innovation, shaping the future by nurturing skilled professionals in AI, Web Development, Data Analysis, and Digital Marketing, while empowering businesses worldwide with cutting-edge web development and digital marketing solutions that drive sustainable growth and success.
          </p>
        </div>
      </div>
      {/* Founders Section */}
<div className="founders-section">
  <h2>Our Founders</h2>
  <div className="founder-cards">
    {/* Founder 1 */}
    <div className="founder-card">
      <img src={user1} alt="Jitesh Mathur" className="founder-img" />
      <h3>Jitesh Mathur</h3>
      <p className="title">Founder and CEO</p>
      <p className="quote">"Where Visionaries Shape the Future of Technology."</p>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        {/* <img src={user2} alt="LinkedIn" className="linkedin-icon" /> */}
      </a>
    </div>

    {/* Founder 2 */}
    <div className="founder-card">
      <img src={user2} alt="Swapnil Misra" className="founder-img" />
      <h3>Swapnil Misra</h3>
      <p className="title">Co Founder and CPO</p>
      <p className="quote">"Where Visionaries Shape the Future of Technology."</p>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        {/* <img src={require('../../assets/Web-1.png')} alt="LinkedIn" className="linkedin-icon" /> */}
      </a>
    </div>

    {/* Founder 3 */}
    <div className="founder-card">
      <img src={user3} alt="Devansh Raghav" className="founder-img" />
      <h3>Devansh Raghav</h3>
      <p className="title">Co Founder and CTO</p>
      <p className="quote">"Where Visionaries Shape the Future of Technology."</p>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        {/* <img src={require('../../assets/web-1.png')} alt="LinkedIn" className="linkedin-icon" /> */}
      </a>
    </div>

    {/* Founder 4 */}
    <div className="founder-card">
      <img src={user4} alt="Fariha Khan" className="founder-img" />
      <h3>Fariha Khan</h3>
      <p className="title">Co Founder and COO</p>
      <p className="quote">"Where Visionaries Shape the Future of Technology."</p>
      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
        {/* <img src={require('../../assets/web-1.png')} alt="LinkedIn" className="linkedin-icon" /> */}
      </a>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default About;
