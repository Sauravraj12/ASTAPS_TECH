


import React from "react";
import { useNavigate } from "react-router-dom";
import "./blogs.css";

const blogs = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Blog Title ${i + 1}`,
  category: ["Technology", "Food", "Automobile"][i % 3],
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus.",
  image: `https://picsum.photos/id/${100 + i}/400/250`,
  author: `Author ${i + 1}`,
  time: `${i + 1}h ago`,
  authorImage: `https://randomuser.me/api/portraits/men/${40 + i}.jpg`,
}));

const BlogSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div><section className="about-banner">
    <div className="about-content">
      <h1>Blogs</h1>
      <p>Home &gt; Blogs</p>
    </div>
  </section>
    <div className="blog-container">

      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-img" />
          <div className="blog-content">
            <span className={`category ${blog.category.toLowerCase()}`}>
              {blog.category}
            </span>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="author-info">
              <img src={blog.authorImage} alt={blog.author} />
              <div>
                <h5>{blog.author}</h5>
                <span>{blog.time}</span>
              </div>
            </div>
            <button
              className="read-more-btn"
              onClick={() => handleReadMore(blog.id)}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BlogSection;
