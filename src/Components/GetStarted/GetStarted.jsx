import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/getstarted.json"; // Update path as per your setup
import animationData1 from "../assets/lottie/open-Book-getstarted.json"; // If used
import "./GetStarted.css"; // Assuming you have styles



const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const GetStarted= () => {
  return (
    <div className="get-started-container">
      <div className="top-section">
        <div className="illustration">
          <Lottie options={defaultOptions} />
        </div>
        <header className="header">
          <h2>
            Get Started with our <span>powerful platform</span>
          </h2>
          <p>
            Unlock the full potential of your business with our comprehensive suite of tools and features. Get started today and take your operations to new heights.
          </p>
        </header>
      </div>

      <div className="services">
        <div className="service-card">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv5GOjWa2VtyZ1AeVN5wQUxRuV5Jqd3bVkGJfA_b3m7lGWZvxw"
            alt="Earn Icon"
          />
          <h3>Let us Earn</h3>
          <p>
            A place where you can find all the possible services needed. We bring you a “Doorstep solution” to deliver services at your location.
          </p>
          <button onClick={() => window.location.href = "/partner"}>Offer Services</button>
        </div>

        <div className="service-card">
          <img
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRNrFYfHYOw612c72IM-tvewD0N-mocZE-LIiA8K6K1uBp8mjm2"
            alt="Build Icon"
          />
          <h3>Let us Build</h3>
          <p>
            A place where you can find all the possible services needed. We bring you a “Doorstep solution” to deliver services at your location.
          </p>
          <button onClick={() => window.location.href = "/customer"}>Hire Talent</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
