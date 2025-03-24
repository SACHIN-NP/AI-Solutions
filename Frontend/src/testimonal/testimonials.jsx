import { useEffect, useState } from "react";
import "./testimonials.css";
import farmer from "../assets/farmer.jpg"; // Importing the farmer image
import { useTranslation } from "react-i18next";
import logoos from "../assets/Reviewlogo/logo1.png";
import logoos2 from "../assets/Reviewlogo/logo2.png";
import logoos3 from "../assets/Reviewlogo/logo3.jpg";
import logoos4 from "../assets/Reviewlogo/logo4.jpg";
import people1 from "../assets/Reviewlogo/people1.jpg";
import people2 from "../assets/Reviewlogo/people2.jpg";
import people3 from "../assets/Reviewlogo/people3.jpg";
import people4 from "../assets/Reviewlogo/people4.jpg";
import people5 from "../assets/Reviewlogo/people5.jpg";

const TestimonialsPop = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      id: 1,

      name: t("sophiaName"),
      title: t("title1"),
      feedback: t("feed1"),
      detailedFeedback:
        "Sophia's detailed feedback: Their support team is fantastic—always ready to assist with any challenges we face. The timely and expert advice they provide ensures that we stay ahead in leveraging AI technology for maximum benefit. I highly recommend them for businesses looking to innovate and optimize processes.",
      rating: 5,
      src: people4,
    },

    {
      id: 3,
      name: t("Alex peter"),
      title: t("title2"),
      feedback: t("feed2"),
      detailedFeedback:
        "Michael's detailed feedback: The AI systems they implemented not only saved us countless hours of manual work but also introduced predictive analytics that gave us a competitive edge in the market. Their ongoing support and dedication to ensuring success are commendable.",
      rating: 5,
      src: people2,
    },
    {
      id: 4,
      name: t("Emily Davis"),
      title: t("title4"),
      feedback: t("feed3"),
      detailedFeedback:
        "Emily's detailed feedback: The training provided by their team empowered our employees to fully utilize the tools. Their attention to detail and customer-centric approach are what set them apart in the industry.",
      rating: 5,
      src: people3,
    },
    {
      id: 5,
      name: t("Sarah Johnson"),
      title: t("title5"),
      feedback: t("feed4"),
      detailedFeedback:
        "Sarah's detailed feedback: The team at AI Solution not only delivered exceptional products but also ensured we were well-versed in using them effectively. Their commitment to delivering value is truly impressive.",
      rating: 5,
      src: people5,
    },
    {
      id: 6,
      name: t("David Wilson"),
      title: t("title6"),
      feedback: t("feed5"),
      detailedFeedback:
        "David's detailed feedback: Their focus on understanding our goals and providing custom-tailored solutions was evident throughout the collaboration. They are the perfect partner for businesses looking to leverage AI for sustainable growth.",
      rating: 5,
      src: people1,
    },
  ];

  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const openDetailModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTestimonial(null);
  };

  // Helper Function for Rendering Stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>
      );
    }
    if (halfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }
    while (stars.length < 5) {
      stars.push(
        <span key={`empty-${stars.length}`} className="star">
          ☆
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <section className="testimonial-popup-section">
      <h2 className="section-title">Happy Clients</h2>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <div className="testimonial-header">
            <img
              src={testimonial.src}
              alt={testimonial.name}
              className="testimonial-avatar"
            />
            <div>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-title">{testimonial.title}</p>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          </div>
          <p className="testimonial-feedback">
            <strong>{testimonial.name}</strong> {testimonial.feedback}
          </p>
          <div className="testimonial-buttons">
            <button
              className="btn btn-primary"
              onClick={() => openImageModal(testimonial.src)}
            >
              View
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => openDetailModal(testimonial)}
            >
              Show More
            </button>
          </div>
        </div>
      ))}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}

      {/* Popup Modal */}
      {selectedTestimonial && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevents closing on modal click
          >
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-header">
              <h2>{selectedTestimonial.name}</h2>
              <p>{selectedTestimonial.title}</p>
              <div className="modal-rating">
                {renderStars(selectedTestimonial.rating)}
              </div>
            </div>
            <p className="modal-feedback">
              {selectedTestimonial.detailedFeedback}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export const ReviewSection = () => {
  // const { t } = useTranslation();

  const reviews = [
    {
      name: "AGRO CULTURE",
      title: "Excellent Service!",
      review:
        "The product quality is outstanding, and the support team was very helpful. Highly recommended!",
      rating: 5,
      src: logoos,
    },
    {
      name: "SOLAR HOME",
      title: "Great Experience",
      review:
        "I’ve been using their services for months, and it’s been a fantastic experience overall.",
      rating: 4,
      src: logoos2,
    },
    {
      name: "FINANCE GROWTH",
      title: "Satisfied Customer",
      review:
        "The customer service was great, and the delivery was on time. I’m very happy with my purchase!",
      rating: 5,
      src: logoos3,
    },
    {
      name: "BILLANT BIOTECH",
      title: "Satisfied Customer",
      review:
        "The customer service was great, and the delivery was on time. I’m very happy with my purchase!",
      rating: 5,
      src: logoos4,
    },
  ];

  return (
    <div className="review-section">
      <h2 className="section-title">Customer Reviews on AI solutions</h2>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img
              src={review.src}
              alt={`${review.name}`}
              className="revie-image"
            />
            <div className="review-content">
              <h3 className="review-title">{review.title}</h3>
              <p className="review-text">{review.review}</p>
              {/* Star Rating */}
              <div className="review-stars">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)}
              </div>
              <p className="review-author">- {review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsPopup = () => {
  return (
    <>
      <TestimonialsPop />
      <ReviewSection />
    </>
  );
};

export default TestimonialsPopup;
