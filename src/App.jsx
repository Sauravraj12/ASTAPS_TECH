
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar/Navbar';
import Home from '../src/Components/Hero/Hero';
import About from '../src/Components/About/About';
import Services from '../src/Components/ServiceSection/ServiceSection';
import Courses from '../src/Components/Course/CourseList';
import Blogs from'../src/Components/Blogs/blogs';
import Footer from '../src/Components/Footer/Footer';
import Contact from '../src/Components/Contact/Contact';
import AboutServices from './Components/Service/Service';
import TrendingCourses from './Components/Trending/trending';
import BlogSection from '../src/Components/Blogs/blogs';
import BlogDetail from './Components/Blogs/blogDetails';
import CourseDetail from './Components/Course/CourseDetails';

function App() {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<AboutServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<TrendingCourses />} />
        <Route path="/course/:title" element={<TrendingCourses />} />

        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
