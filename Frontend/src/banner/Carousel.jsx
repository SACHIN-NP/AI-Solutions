import React, { useEffect } from "react";
import "./EnergySection.css"; // Custom CSS file for styling
import farmer from "../assets/farmer.jpg";
import { Link } from "react-router-dom";
const Carousel = () => {
  useEffect(() => {
      window.scrollTo(0,0);
    }, [])
  return (
    <section className="energy-section">
      {/* Hero Section with Background */}
      <div className="background">
        <div className="content">
          <h1>#1 Energy Provider in the World</h1>
          <h2>Innovative Energy for a Sustainable Future</h2>
          <div className="buttons">
            
              <Link to="/contact" className="button primary-button"> Get in touch </Link>
              <Link to="/InsuranceSolutions" className="button primary-button"> Our Services  </Link>

           
          </div>
        </div>

        {/* Highlight Card */}
        <div className="overlay-card">
          <img
            src={farmer}
            alt="Recent Project - Sustainable Energy Farm"
            className="project-image"
          />
          <p>Discover Our Recent Projects</p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stat-item">
          <h3>6M+</h3>
          <p>Annual Net Income</p>
        </div>
        <div className="stat-item">
          <h3>315</h3>
          <p>Projects Completed Worldwide</p>
        </div>
        <div className="stat-item">
          <h3>120K</h3>
          <p>Employees Across the Globe</p>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
