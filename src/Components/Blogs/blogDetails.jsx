import React from "react";
import { useParams } from "react-router-dom";
import "./blogs.css";

const blogs = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Blog Title ${i + 1}`,
  category: ["Technology", "Food", "Automobile"][i % 3],
  content: "Detailed blog content goes here. You can fetch from API or use dummy data like this.",
  image: `https://picsum.photos/id/${100 + i}/800/400`,
  author: `Author ${i + 1}`,
  time: `${i + 1}h ago`,
  authorImage: `https://randomuser.me/api/portraits/men/${40 + i}.jpg`,
}));

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div className="blog-detail">
      <section className="about-banner">
        <div className="about-content">
          <h1>{blog.title}</h1>
          <p>Home &gt; Blogs &gt; {blog.title}</p>
        </div>
      </section>

      <div className="blog-detail-content">
        <img src={blog.image} alt={blog.title} />
        <div className="meta">
          <span className="category">{blog.category}</span>
          <span>{blog.time}</span>
        </div>
        <p>{blog.content.repeat(10)}</p>

        <div className="author-detail">
          <img src={blog.authorImage} alt={blog.author} />
          <h4>Written by {blog.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
