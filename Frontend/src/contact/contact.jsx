import { useState, useEffect } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import "./contact.css";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    job_title: "",
    job_details: "",
  });

  const [contacts, setContacts] = useState([]); // Store all contacts
  const [editMode, setEditMode] = useState(false); // Track edit mode
  const [editId, setEditId] = useState(null); // Track the contact being edited

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/contacts/contact/add/"
      );
      setContacts(response.data);
    } catch (error) {
      console.error(
        "Error fetching contacts:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    fetchContacts(); // Fetch contacts on component mount
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editMode) {
        // Update existing contact
        await axios.put(
          `http://127.0.0.1:8000/api/contacts/${editId}/`,
          formData
        );
        alert("Contact updated successfully!");
      } else {
        // Create new contact
        await axios.post("http://127.0.0.1:8000/api/contacts/", formData);

        // Send an email using Email.js
        emailjs
          .send(
            "service_dfjhrgg", // Replace with your Email.js Service ID
            "template_xtrheoe", // Replace with your Email.js Template ID
            {
              first_name: formData.first_name,
              last_name: formData.last_name,
              email: formData.email,
              phone: formData.phone,
              company: formData.company,
              country: formData.country,
              job_title: formData.job_title,
              job_details: formData.job_details,
            },
            "P-IH2FUw88IYY7r-z" // Replace with your Email.js Public Key
          )
          .then(
            (result) => {
              console.log("Email sent successfully:", result.text);
              alert("Contact submitted successfully, and email has been sent!");
            },
            (error) => {
              console.error("Failed to send email:", error);
              alert(
                "Contact submitted successfully, but email could not be sent."
              );
            }
          );
      }

      // Reset the form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        job_title: "",
        job_details: "",
      });
      setEditMode(false);
      setEditId(null);
      fetchContacts(); // Refresh the contact list
    } catch (error) {
      console.error("Error details:", error.response?.data || error.message);
      alert("Failed to submit the form. Please try again.");
    }
  };

  const handleEdit = (contact) => {
    setFormData(contact);
    setEditMode(true);
    setEditId(contact.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/contacts/${id}/`);
      alert("Contact deleted successfully!");
      fetchContacts(); // Refresh the contact list
    } catch (error) {
      console.error(
        "Error deleting contact:",
        error.response?.data || error.message
      );
      alert("Failed to delete the contact.");
    }
  };

  return (
    <div className="contact-container">
      <div className="right_panel">
        <h2>Contact Us</h2>
        <p>Email, call, or complete the form to connect with us.</p>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> Aisolutions@email.com
          </p>
          <p>
            <strong>Phone:</strong> 32-221-231
          </p>
          <a href="#">Customer Support</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
          pattern="[A-Za-z\s]{2,50}" // Only allows letters and spaces, minimum 2 characters
          title="First name should only contain letters and spaces."
        />
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
          pattern="[A-Za-z\s]{2,50}" // Only allows letters and spaces, minimum 2 characters
          title="Last name should only contain letters and spaces."
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email (e.g., sachin122np@example.com)"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number (e.g., 9124049407)"
          required
          pattern="[0-9]{10}" // Only allows 10-digit numbers
          title="Phone number must be 10 digits."
        />
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Enter your company name"
        />
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
          <option value="India">India</option>
        </select>
        <input
          type="text"
          name="job_title"
          value={formData.job_title}
          onChange={handleChange}
          placeholder="Enter your job title"
          pattern="[A-Za-z\s]{2,50}" // Only allows letters and spaces
          title="Job title should only contain letters and spaces."
        />
        <textarea
          name="job_details"
          value={formData.job_details}
          onChange={handleChange}
          placeholder="Provide job details (minimum 20 characters)"
          rows="4"
          required
          minLength="20" // Enforces a minimum character count
        />
        <button type="submit">{editMode ? "Update" : "Submit"}</button>
      </form>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>
              {contact.first_name} {contact.last_name} - {contact.email}
            </p>
            <button onClick={() => handleEdit(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
