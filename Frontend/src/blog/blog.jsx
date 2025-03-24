import React, { useEffect } from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import agr1 from "../assets/solution/agro1.jpg";
import agr2 from "../assets/solution/agro2.jpg";
import agr3 from "../assets/solution/agro3.jpg";
import agr4 from "../assets/solution/agro4.jpg";
import agr6 from "../assets/solution/agro5.jpg";
import agr from "../assets/solution/agro6.jpg";
import blogs from "./blogs";

const BlogPage = () => {
  useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  return (
    <div className="blog-page">
      {/* Header Section */}
      <header className="blog-header">
        <h1 className="blog-title">Welcome to Our Blog</h1>
        <p className="blog-subtitle">
          Stay updated with the latest insights and trends in AI and
          agriculture.
        </p>
      </header>

      {/* Featured Blog Section */}
      <section className="featured-blog">
        <img src={agr} alt="Featured Blog" className="featured-image" />
        <div className="featured-content">
          <h2 className="featured-title">AI and the Future of Agriculture</h2>
          <p className="featured-description">
            Artificial Intelligence is shaping the future of agriculture by
            improving efficiency, reducing costs, and enhancing productivity.
            Explore how technology is empowering farmers worldwide.
          </p>
          <Link to={`/blogs/how-ai-is-transforming-agriculture`}>
            <button className="read-more-btn">Read More</button>
          </Link>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="blog-cards-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-card-image"
            />
            <div className="blog-card-content">
              <p className="blog-card-date">{blog.date}</p>
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-description">{blog.description}</p>
              <Link to={`/blogs/${blog.slug}`}>
                <button className="blog-read-more-btn">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
