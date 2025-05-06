import React, { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player"; // Ensure this is installed

import "./Banner.css";
import heroAnimation from "../../animations/webBanner.json";
import missionAnimation from "../../animations/digitalMbanner.json";
import trainingAnimation from "../../animations/SoftwareTestBanner.json"; // Replace with your own
// Add a third image

const cardData = [
    {
      title: "DIGITAL MARKETING",
      subtitle: '"Empowering Talent, Driving Business Success."',
      leftAnim: heroAnimation,
      rightAnim: missionAnimation,
      pills: ["• Talent", "• Strategy", "• Development"]
    },
    {
      title: "AI TRAINING",
      subtitle: '"Master AI Skills to Power Your Career."',
      leftAnim: missionAnimation,
      rightAnim: trainingAnimation,
      pills: ["• Machine Learning", "• Deep Learning", "• NLP"]
    },
    {
      title: "WEB DEVELOPMENT",
      subtitle: '"Building Stunning, Scalable Websites."',
      leftAnim: trainingAnimation,
      rightAnim: heroAnimation,
      pills: ["• Frontend", "• Backend", "• Full Stack"]
    }
  ];
  

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 2000); // 0.5 seconds

    return () => clearInterval(timer); // cleanup
  }, []);

  const card = cardData[index];

  return (
    <section className="hr-banner">
  {/* <button className="arrow left" onClick={() => setIndex((index - 1 + cardData.length) % cardData.length)}>❮</button> */}

  <div className="banner-content fade-in">
    <Player autoplay loop src={card.leftAnim} className="side-animation" />

    <div className="text-content">
      <h1>
        <span className="bold">{card.title.split(" ")[0]} </span>
        <span className="outline">{card.title.split(" ").slice(1).join(" ")}</span>
      </h1>
      <p className="subtitle">{card.subtitle}</p>
      <div className="pill-container">
        {card.pills.map((pill, i) => (
          <span key={i} className="pill">{pill}</span>
        ))}
      </div>
    </div>

    <Player autoplay loop src={card.leftAnim} className="side-animation" />
  </div>

  {/* <button className="arrow right" onClick={() => setIndex((index + 1) % cardData.length)}>❯</button> */}
</section>

  );
};

export default Banner;
// import React, { useState, useEffect } from "react";
// import "./Banner.css";
// import leftImg1 from "../../assets/hero.png";
// import rightImg1 from "../../assets/mission.png";
// import leftImg2 from "../../assets/background.jpg";
// import rightImg2 from "../../assets/mission.png";
// import leftImg3 from "../../assets/mission.png";
// import rightImg3 from "../../assets/hero.png";

// const banners = [
//   {
//     leftImg: leftImg1,
//     rightImg: rightImg1,
//     title: "HR CONSULTING",
//     subtitle: "Empowering Talent, Driving Business Success.",
//     pills: ["• Talent", "• Strategy", "• Development"],
//   },
//   {
//     leftImg: leftImg2,
//     rightImg: rightImg2,
//     title: "TRAINING SOLUTIONS",
//     subtitle: "Upskill for the Future Workforce.",
//     pills: ["• Upskilling", "• Practical Learning", "• Internships"],
//   },
//   {
//     leftImg: leftImg3,
//     rightImg: rightImg3,
//     title: "DIGITAL STRATEGY",
//     subtitle: "Build Your Brand With Tech.",
//     pills: ["• Branding", "• AI Tools", "• Marketing"],
//   },
// ];

// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % banners.length);
//     }, 1000); // 0.5 second
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="carousel-wrapper">
//       <div className="carousel" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
//         {banners.map((item, index) => (
//           <div className="slide" key={index}>
//             <img src={item.leftImg} alt="left" className="side-image" />
//             <div className="text-content">
//               <h1>
//                 <span className="bold">{item.title.split(" ")[0]} </span>
//                 <span className="outline">{item.title.split(" ")[1]}</span>
//               </h1>
//               <p className="subtitle">{item.subtitle}</p>
//               <div className="pill-container">
//                 {item.pills.map((pill, i) => (
//                   <span key={i} className="pill">{pill}</span>
//                 ))}
//               </div>
//             </div>
//             <img src={item.rightImg} alt="right" className="side-image" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Banner;
