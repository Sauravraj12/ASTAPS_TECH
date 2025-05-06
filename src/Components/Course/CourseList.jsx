import ServiceCard from "./CourseCard";
import website from "../../animations/website.json";
import video from "../../animations/Video.json";
import software from "../../animations/softwareTesting.json";
import seo from "../../animations/Digital.json";
import interior from "../../animations/graphics.json";
import book from "../../animations/stockmarket.json";
import "./Course.css";

const services = [
  { title: "Web Development", animationData: website },
  { title: "Artificial Intelligence", animationData: video },
  { title: "Machine Learning", animationData: software },
  { title: "Digital Marketing", animationData: seo },
  { title: "Industrial Automation", animationData: interior },
  { title: "Stock Market", animationData: book },
];

const ServicesList = () => {
  return (
    <div>
      <section className="about-banner">
      <div className="about-content">
        <h1>Course</h1>
        <p>Home &gt; Course</p>
      </div>
    </section>
    <div className="services-container">
      
      {services.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
    </div>
  );
};

export default ServicesList;
