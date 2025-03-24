import React, { useEffect } from "react";
import { useState } from "react";
import "./about.css";
import farmer from "../assets/farmer.jpg"; // Replace with the correct path to your image
import { useTranslation } from "react-i18next";
import photo1 from "../assets/team1.jpg";
import photo2 from "../assets/team2.jpg";
import photo3 from "../assets/team3.jpg";
import photo4 from "../assets/team4.jpg";

const photos = [
  
  {
    id: 1,
    src: photo1,
    title: "ALEX REMAMN",
    role: "Chief Executive Officer",
    description:
      "ALEX REMAMN  works to make businesses better with AI. He has over 20 years of leadership experience and holds 50+ patents.",
  },
  {
    id: 2,
    src: photo2,
    title: "LAXMAN SHA",
    role: "Managing Director",
    description:
      "LAXMAN SHA leads DataRobot's revenue growth strategies across global markets, ensuring customer success.",
  },
  {
    id: 3,
    src: photo3,
    title: "PETER PARKER",
    role: "Project Manager",
    description:
      "PETER PARKER oversees marketing initiatives to drive brand awareness and business growth.",
  },
  {
    id: 4,
    src: photo4,
    title: "HELAN BOLT",
    role: "Head of Engineering",
    description:
      "HELAN BOLT leads engineering teams to build cutting-edge AI-powered products.",
  },
];

const AboutUs = () => {

  // State for managing popup visibility and content
  const [popupData, setPopupData] = useState({
    visible: false,
    title: "",
    description: "",
    image: "",
  });
  // Function to open the popup
  const openPopup = (image, title, description) => {
    setPopupData({
      visible: true,
      title,
      description,
      image,
    });
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupData({
      visible: false,
      title: "",
      description: "",
      image: "",
    });
  };
  const { t } = useTranslation();


  useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  return (

    <div style={styles.container}>
      {/* About Us Section */}
      <section className="about-us">
        <div className="about-container">
          <div className="about-image">
            <img src={farmer} alt="AI Solution" />
          </div>
          <div className="about-content">
            <h3 className="about-title"> {t("About Us")}</h3>
            <h1 className="welcome-message">Welcome to AI Solution</h1>
            <p className="about-description">
              AI solutions refer to the integration of artificial intelligence
              technologies into business processes, products, or services to
              solve complex problems, improve efficiency, and drive innovation.
            </p>
            <p className="about-details">
              We are problem-solvers, leveraging the power of AI to create
              innovative solutions tailored to meet real-world challenges. Our
              focus lies in understanding the unique needs of individuals and
              organizations, delivering intelligent systems that enhance
              decision-making, streamline operations, and provide a competitive
              edge.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission, Achievement, Vision */}
      <section className="our-values">
        <div className="box">
          <h3></h3>
          <div className="icon-container">
            <i className="fas fa-book icon"></i>
          </div>
          <h3>OUR MISSION</h3>
          <hr />
          <p>
            At AI Solution, our overarching goal is to empower individuals and
            organizations by harnessing the transformative power of artificial
            intelligence. We aim to create innovative and practical AI-driven
            solutions that address real-world challenges, enhance productivity,
            and foster sustainable growth. With a strong commitment to
            excellence and innovation, we aspire to bridge the gap between
            technology and humanity, making advanced AI accessible and
            beneficial to everyone.
          </p>
        </div>

        <div className="box">
          <div className="icon-container">
            <i className="fas fa-award icon"></i>
          </div>
          <h3>OUR ACHIEVEMENTS</h3>
          <hr />
          <p>
            As part of our vision, we seek to empower individuals to become
            global citizens and leaders in a rapidly evolving technological
            landscape. By fostering creativity, collaboration, and continuous
            learning, we aim to nurture a culture of innovation that drives
            progress and shapes a better future for all. Together, we aspire to
            build a harmonious world where technology and human potential come
            together to achieve extraordinary outcomes.
          </p>
        </div>

        <div className="box">
          <div className="icon-container">
            <i className="fas fa-globe icon"></i>
          </div>
          <h3>OUR VISION</h3>
          <hr />
          <p>
            Our mission is to provide cutting-edge AI tools and services that
            not only meet but exceed the expectations of our clients and
            partners. We strive to inspire trust and confidence by delivering
            impactful solutions tailored to the unique needs of diverse
            industries. Through our expertise and relentless pursuit of
            innovation, we aim to pave the way for a smarter, more connected
            world where AI acts as a catalyst for positive change.
          </p>
        </div>
      </section>

      {/* Leaders Section */}
      <h1 className="gallery-title">Our Leadership Team</h1>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="car"
            onClick={() => openPopup(photo.src, photo.title, photo.description)}
          >
            <img src={photo.src} alt={photo.title} className="card-image" />
            <div className="card-details">
              <h3 className="card-title">{photo.title}</h3>
              <p className="card-role">{photo.role}</p>
            </div>
          </div>
        ))}
        {/* Popup Component */}
        {popupData.visible && (
          <div className="popup" onClick={closePopup}>
            <div className="popup-ontent" onClick={(e) => e.stopPropagation()}>
              <span className="popup-close" onClick={closePopup}>
                &times;
              </span>
              <img
                src={popupData.image}
                alt={popupData.title}
                className="popup-image"
              />

              <h2 className="popup-itle">{popupData.title}</h2>
              <p className="popup-dscription">{popupData.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: "1.6",
    padding: "20px",
  },
  section: {
    marginBottom: "40px",
  },
  subheading: {
    fontSize: "28px",
    textAlign: "center",
    marginBottom: "20px",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    maxWidth: "250px",
    flex: "1 1 calc(25% - 20px)",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  cardImage: {
    marginBottom: "15px",
  },
  cardImageStyle: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "14px",
    marginBottom: "15px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AboutUs;
