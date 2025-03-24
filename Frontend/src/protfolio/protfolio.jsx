import { useState } from "react";
import farmer from "../assets/farmer.jpg";
import "./PortfolioPage.css";

const SuccessStory = () => {
  const reviews = [
    {
      id: 1,
      name: "Harry",
      title: "Owner of Uber",
      rating: 5,
      review: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text.`,
    },
    {
      id: 2,
      name: "Jane",
      title: "CEO of AI Corp",
      rating: 4.5,
      review: `This AI solution transformed our business processes and improved productivity significantly.`,
    },
    {
      id: 3,
      name: "John Smith",
      title: "Founder of InnovateTech",
      rating: 4,
      review: `Highly impressed with the results. It exceeded our expectations.`,
    },
  ];

  return (
    <section className="success-story">
      <h2>
        <b>Must content the past solution and client sucess story</b>
      </h2>
      <h2>Our Success Story</h2>
      <div className="success-story-container">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Success Story Illustration"
            className="success-image"
          />
        </div>
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-text">{review.review}</p>
              <div className="review-author">
                <div className="author-info">
                  <span className="author-icon">👤</span>
                  <div>
                    <p className="author-name">{review.name}</p>
                    <p className="author-title">{review.title}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {Array(5)
                    .fill(null)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={`star ${
                          i < Math.floor(review.rating) ? "filled" : ""
                        }`}
                      >
                        ★
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProfileCardSection = () => {
  const profiles = [
    {
      id: 1,
      name: "Harry May",
      title: "Owner of Uber",
      profileImage: "https://via.placeholder.com/80",
      rating: 4.5,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.`,
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "CEO of AI Corp",
      profileImage: "https://via.placeholder.com/80",
      rating: 5,
      description: `Using this solution transformed our business outcomes. We're excited to see how AI solutions evolve and enhance our processes further.`,
    },
    {
      id: 3,
      name: "John Smith",
      title: "Founder of InnovateTech",
      profileImage: "https://via.placeholder.com/80",
      rating: 4,
      description: `An exceptional experience with AI implementation that streamlined operations and increased overall efficiency. Highly recommend their services.`,
    },
  ];

  return (
    <section className="profile-card-section">
      <h2>What Our Clients Say</h2>
      <div className="profile-card-container">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <div className="profile-header">
              <img
                src={profile.profileImage}
                alt={profile.name}
                className="profile-image"
              />
              <div>
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-title">{profile.title}</p>
              </div>
            </div>
            <div className="profile-rating">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <span
                    key={i}
                    className={`star ${
                      i < Math.floor(profile.rating) ? "filled" : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              <span className="rating-number">{profile.rating.toFixed(1)}</span>
            </div>
            <p className="profile-description">{profile.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export const HappyClients = () => {
  const [popupData, setPopupData] = useState({
    visible: false,
    title: "",
    description: "",
    image: "",
  });
  const photos = [
    {
      id: 1,
      src: farmer,
      title: "Help Saha",
      role: "Chief Executive Officer",
      description:
        "Debanjan Saha works to make businesses better with AI. He has over 20 years of leadership experience and holds 50+ patents.",
    },
    {
      id: 2,
      src: "photo2",
      title: "Jay Schuren",
      role: "Chief Revenue Officer",
      description:
        "Jay Schuren leads DataRobot's revenue growth strategies across global markets, ensuring customer success.",
    },
    {
      id: 3,
      src: "photo3",
      title: "Jane Doe",
      role: "Chief Marketing Officer",
      description:
        "Jane Doe oversees marketing initiatives to drive brand awareness and business growth.",
    },
    {
      id: 4,
      src: "photo4",
      title: "John Smith",
      role: "Head of Engineering",
      description:
        "John Smith leads engineering teams to build cutting-edge AI-powered products.",
    },
  ];

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

  return (
    <div className="gallery-container">
      {/* Leadership Team Section */}
      <h1 className="gallery-title">Our Leadership Team</h1>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="card"
            onClick={() => openPopup(photo.src, photo.title, photo.description)}
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

      {/* Popup Component */}
      {popupData.visible && (
        <div className="popup" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>
              &times;
            </span>
            <img
              src={popupData.image}
              alt={popupData.title}
              className="popup-image"
            />
            <h2 className="popup-title">{popupData.title}</h2>
            <p className="popup-description">{popupData.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div>
      <SuccessStory />
      <ProfileCardSection />
      <HappyClients />
    </div>
  );
};

export default PortfolioPage;
