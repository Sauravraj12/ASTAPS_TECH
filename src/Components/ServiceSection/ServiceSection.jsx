import React from 'react';
import './ServiceSection.css';

const services = [
  {
    title: "Learning Management System",
    description: "A comprehensive platform for course creation, delivery, and management.",
    price: "Starting at $299/month"
  },
  {
    title: "Virtual Classroom",
    description: "Interactive online classroom environment with real-time collaboration tools.",
    price: "Starting at $199/month"
  },
  {
    title: "Content Development",
    description: "Custom educational content creation services tailored to your curriculum.",
    price: "Custom pricing"
  },
  {
    title: "Assessment Tools",
    description: "Comprehensive testing and evaluation tools with detailed analytics.",
    price: "Starting at $149/month"
  },
  {
    title: "Professional Development",
    description: "Training programs for educators to enhance their teaching skills.",
    price: "Starting at $99/person"
  },
  {
    title: "Student Information System",
    description: "Centralized database for managing student records and performance.",
    price: "Starting at $249/month"
  }
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      
      <span className="tag">Services</span>
      <h2>Comprehensive Educational Solutions</h2>
      <p className="subtitle">
        We offer a wide range of services tailored to meet the needs of educational institutions,
        teachers, and students.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#!" className="price-link">{service.price}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
