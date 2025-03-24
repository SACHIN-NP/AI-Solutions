import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import blogs from "../blog/blogs";
import "./blogDescription.css"; // Add a CSS file for styling

function BlogDescription() {
  const { slug } = useParams();
  const [blogContent, setBlogContent] = useState(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDate, setBlogDate] = useState("");
  const [blogImage, setBlogImage] = useState(""); // State for the image

  useEffect(() => {
    const blog = blogs.find((b) => b.slug === slug);
    if (blog) {
      setBlogContent(blog.content);
      setBlogTitle(blog.title);
      setBlogDate(blog.date);
      setBlogImage(blog.image); // Set the image
    }
  }, [slug]);

  if (!blogContent) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-description-container">
      <header className="blog-description-header">
        <h1 className="blog-description-title">{blogTitle}</h1>
        <p className="blog-description-date">{blogDate}</p>

        {blogImage && (
          <img
            src={blogImage}
            alt={blogTitle}
            className="blog-description-image"
          />
        )}
      </header>
      <div className="blog-description-content">
        <p>{blogContent}</p>
      </div>
    </div>
  );
}

export default BlogDescription;
