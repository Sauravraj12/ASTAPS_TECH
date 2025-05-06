import React, { useState } from 'react';
import Lottie from 'lottie-react';
import './trending.css';

import iotAnim from '../../animations/website.json';
import pythonAnim from '../../animations/serviceAi.json';
import analystAnim from '../../animations/serviceLearn.json';
import marketingAnim from '../../animations/Digital.json';
import businessAnim from '../../animations/stockmarket.json';
import designAnim from '../../animations/softwareTesting.json';
import { useNavigate } from 'react-router-dom';
const courses = [
  {
    title: 'Website Development',
    description: 'Build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks.',
    animation: iotAnim
  },
  {
    title: 'Artificial Intelligence',
    description: 'Learn the basics of AI, including machine learning, neural networks, and real-world applications using Python.',
    animation: pythonAnim
  },
  {
    title: 'Machine Learning',
    description: 'Learn to train machines using data for prediction, classification, and automation tasks.',
    animation: analystAnim
  },
  {
    title: 'Digital Marketing',
    description: 'Explore SEO, social media strategies, and data-driven marketing to grow brands online.',
    animation: marketingAnim
  },
  {
    title: 'Stock Market',
    description: 'Understand stock trading, investment strategies, and financial market fundamentals.',
    animation: businessAnim
  },
  {
    title: 'Automation Industrial',
    description: 'Discover industrial automation with PLCs, sensors, and control systems in real-world applications.',
    animation: designAnim
  }
];

const TrendingCourses = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentCourse = courses[activeIndex];
const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/courses'); // Adjust this route if your contact page path is different
  };
  return (
    <section className="trending-courses">
      <h2>Our Trending Courses</h2>
      <div className="courses-container">
        <div className="main-course-card">
          <div className='animation'>
          <Lottie animationData={currentCourse.animation} loop={true} />
          </div>
          
          <div className="course-info">
            <h3>{currentCourse.title}</h3>
            <p>{currentCourse.description}</p>
            <button className='or' onClick={handleCourseClick}>Explore More</button>
            </div>
        </div>
        <div className="side-courses">
          {courses.map((course, index) => (
            index !== activeIndex && (
              <div
                className="side-course"
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <span>{course.title}</span>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
