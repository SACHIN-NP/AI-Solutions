import { useEffect, useState } from "react";
import "./photo.css";

// Import all photos
import dae from "../assets/pic4.jpg";

import farmer from "../assets/pic1.jpg";
import imagees3 from "../assets/pic2.jpg";
import imagees4 from "../assets/pic3.jpg";
import sol1 from "../assets/solpic1.jpg";
import sol2 from "../assets/solpix2.jpg";
import sol3 from "../assets/solpic4.jpg";
import sol4 from "../assets/solpic5.jpg";

export const Gallery = () => {
  useEffect(() => {
        window.scrollTo(0,0)
      }, [])
  // State for managing popup visibility and content
  const [popupData, setPopupData] = useState({
    visible: false,
    image: "",
  });

  // Data for photos
  const photos = [
    {
      id: 1,
      src: farmer,
      title: " Holiday Party",
      role: "October 5, 2024",
    },
    {
      id: 2,
      src: imagees3,
      title: "Annual Kickoff Meeting",
      role: "September 10, 2024",
    },
    {
      id: 3,
      src: imagees4,
      title: "Team Building Workshop",
      role: "June 12, 2024",
    },
    {
      id: 4,
      src: dae,
      title: "Product Launch Event",
      role: "May 20, 2024",
    },
  ];

  // Upcoming Events Data
  const events = [
    {
      id: 1,
      src: sol1, // Replace with relevant event images
      title: "AI in Business Summit",
      role: "July 15, 2024",
    },
    {
      id: 2,
      src: sol2,
      title: "Tech Innovation Conference",
      role: "August 10, 2024",
    },
    {
      id: 3,
      src: sol3,
      title: "Leadership & Growth Workshop",
      role: "September 5, 2024",
    },
    {
      id: 4,
      src: sol4,
      title: "AI Growth Workshop",
      role: "September 7, 2024",
    },
  ];

  // Function to open the popup
  const openPopup = (image) => {
    setPopupData({
      visible: true,
      image,
    });
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupData({
      visible: false,
      image: "",
    });
  };

  return (
    <div className="gallery-container">
      {/* Leadership Team Section */}
      <h1 className="gallery-title">Photo</h1>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="crd"
            onClick={() => openPopup(photo.src)}
          >
            <img src={photo.src} alt={photo.title} className="card-image" />
            <div className="card-details">
              <h3 className="card-title">{photo.title}</h3>
              <p className="card-role">{photo.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events Section */}
      <h1 className="gallery-title">Upcoming Events</h1>
      <div className="gallery-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="crd"
            onClick={() => openPopup(event.src)}
          >
            <img src={event.src} alt={event.title} className="card-image" />
            <div className="card-details">
              <h3 className="card-title">{event.title}</h3>
              <p className="card-role">{event.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      {popupData.visible && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
            <img
              src={popupData.image}
              alt="Popup Content"
              className="popup-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
