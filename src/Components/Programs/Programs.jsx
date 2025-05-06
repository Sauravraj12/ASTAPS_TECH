import React from 'react'
import './Programs.css'
import program_1 from '../../assets/Web-1.png/web.png'
import program_2 from '../../assets/python.png'
import program_3 from '../../assets/data scientist.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Web Developments</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Pythons</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Data scientist</p>
        </div>
      </div>
    </div>
  )
}

export default Programs

// import React, { useState, useEffect } from "react";
// import Lottie from "lottie-react";
// import "./Programs.css";

// // Import Lottie animation JSONs
// import animation1 from "../../../public/animations/robot-hand.json";
// import animation2 from "../../../public/animations/robot-hand.json";
// import animation3 from "../../../public/animations/robot-hand.json";
// import animation4 from "../../../public/animations/robot-hand.json";
// import animation5 from "../../../public/animations/robot-hand.json";
// import animation6 from "../../../public/animations/robot-hand.json";
// import animation7 from "../../../public/animations/robot-hand.json";
// import animation8 from "../../../public/animations/robot-hand.json";
// import animation9 from "../../../public/animations/robot-hand.json";
// import animation10 from "../../../public/animations/robot-hand.json";

// const Programs = [
//   {
//     title: "Enterprise Software Solutions",
//     description: "Streamline processes and automate workflows with robust solutions.",
//     animations: animation1,
//   },
//   {
//     title: "Software Integration",
//     description: "Unify platforms with seamless software integration services.",
//     animation: animation2,
//   },
//   {
//     title: "Quality Assurance",
//     description: "Ensure software reliability through meticulous testing.",
//     animation: animation3,
//   },
//   {
//     title: "AI/ML Integration",
//     description: "Harness AI and machine learning for smart applications.",
//     animation: animation4,
//   },
//   {
//     title: "Web Development",
//     description: "Build modern, responsive, and fast websites.",
//     animation: animation5,
//   },
//   {
//     title: "Mobile Apps",
//     description: "Develop seamless Android/iOS applications.",
//     animation: animation6,
//   },
//   {
//     title: "Cloud Services",
//     description: "Deploy scalable cloud infrastructure and solutions.",
//     animation: animation7,
//   },
//   {
//     title: "UI/UX Design",
//     description: "Create stunning and intuitive user interfaces.",
//     animation: animation8,
//   },
//   {
//     title: "Digital Marketing",
//     description: "Boost online presence and drive engagement.",
//     animation: animation9,
//   },
//   {
//     title: "Data Analytics",
//     description: "Extract insights to make informed decisions.",
//     animation: animation10,
//   },
// ];

// const ServicesCarousel = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) => (prevIndex + 1) % services.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleServices = () => {
//     return [
//       services[startIndex % services.length],
//       services[(startIndex + 1) % services.length],
//       services[(startIndex + 2) % services.length],
//     ];
//   };

//   return (
//     <div className="services-carousel">
//       {getVisibleServices().map((service, index) => (
//         <div className="card" key={index}>
//           <Lottie animationData={service.animation} loop={true} />
//           <h3>{service.title}</h3>
//           <p>{service.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicesCarousel;
