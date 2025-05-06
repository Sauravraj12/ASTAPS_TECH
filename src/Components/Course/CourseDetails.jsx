// import { useParams } from "react-router-dom";

// const CourseDetail = () => {
//   const { slug } = useParams();

//   return (
//     <div className="course-detail">
//       <h1>{slug.replace(/-/g, " ").toUpperCase()}</h1>
//       <p>"{slug.replace(/-/g, " ")}" course.</p>
      
//     </div>
//   );
// };

// export default CourseDetail;


// src/pages/CourseDetail.jsx
import "./Course.css";
import courseImage from "../../assets/data scientist.png"; // Save your image in assets folder

const CourseDetail = () => {
  return (
    <div className="course-detail">
      <div className="course-header">
        <div className="course-text">
          <h1>Data Analyst</h1>
          <p>
            Becoming a data analyst is a strategic career choice... (use full text from image)
          </p>
          <div className="buttons">
            <button className="btn download">Download Brochure ⬇️</button>
            <button className="btn contact">Contact Now 📞</button>
            <button className="btn enroll">Enroll Now</button>
          </div>
        </div>
        <div className="course-image">
          <img src={courseImage} alt="Course Visual" />
        </div>
      </div>

      <div className="course-body">
        <h2>Data Analytics: Mastering Data-Driven Decisions</h2>
        <div className="content">
          <div className="table-of-contents">
            <h3>Table of Contents</h3>
            <p>Week 1: Introduction to Python</p>
            <p>Week 2: Writing and Executing First Python Program</p>
            {/* Add more weeks as needed */}
          </div>
          <div className="course-details">
            <h3>Course Details</h3>
            <p><strong>Level:</strong> Beginner</p>
            <p><strong>Total Duration:</strong> 3/6 months</p>
            <p><strong>Certificate:</strong> Certificate of Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
