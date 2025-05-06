import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import "./Course.css";

const ServiceCard = ({ title, animationData }) => {
  const navigate = useNavigate();

  const handleExplore = () => {
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    navigate(`/courses/${slug}`);
  };

  return (
    <div className="card">
      <div className="card-Title">
        <h3>{title}</h3>
      </div>

      <div className="animationData">
        <div className="animation">
          <Player autoplay loop src={animationData} />
        </div>
      </div>

      <div className="card-buttons">
        <button className="btn brochure-btn">
          Brochure <span className="download-icon">⬇️</span>
        </button>
        <button className="btn explore-btn" onClick={handleExplore}>
          EXPLORE NOW <span className="arrow-icon">→</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
