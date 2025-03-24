import "./Footer.css";  
import logo from "../assets/Ailogo.png";  
import { Link } from "react-router-dom"; // Ensure this is correct for your routing version  
import React from 'react';  
const Footer = () => {  
  return (  
    <footer className="footer">  
      <div className="newsletter">  
        <p>Join our newsletter to keep up to date with us!</p>  
        <div className="subscribe">  
          <input  
            type="email"  
            placeholder="Enter your email"  
            className="email-input"  
          />  
          <button className="subscribe-button">Subscribe</button>  
        </div>  
      </div>  
      <div className="divider-line"></div>  

      <div className="footer-content">  
        <div className="company-info"> 
          
          <div className="logo-text">  
            <div className="logo">  
              <Link to="home" >
              <img src={logo} alt="AI Solutions Logo" /> 
              </Link>  
            </div>  
            <p>We grow your business with personal AI manager.</p>  
          </div>  
        </div>  

        <div className="links">  
          <div className="column">  
            <h4>Solutions</h4>  
            <ul> 
               <Link to="/solution">   
              <li>Agricultural solutions</li>  
              </Link>
              <Link to="/SolutionSociety">
              <li>Finance solutions</li>  
              </Link>
              <Link to="/AutomationSolutions">
              <li>Automations solutions</li>  
              </Link>
              <Link to="/InsuranceSolutions">
              <li>Insurance solutions</li>  
              </Link>
            </ul>  
          </div>  
          <div className="column">  
            <h4>Company</h4>  
            <ul>  
              <Link to="/blogs">  
                <li>Blog</li>  
              </Link>  
              <Link to="about">
              <li>About us</li>  
              </Link>
              <Link to="contact" >
              <li>Contact us</li>  
              </Link>
            </ul>  
          </div>  
          <div className="column">  
            <h4>Resources</h4>  
            <ul>  
              <Link to="TestimonialsPopup">
              <li>Testimonials</li>  
              </Link>
              <Link to="Gallery">
              <li>Photo</li> 
              </Link> 
            </ul>  
          </div>  
        </div>  
      </div>  

      <div className="footer-bottom">  
        <p>&copy; 2025 AI Solutions.</p>  
        <ul className="legal">  
          <li>Terms of Service</li>  
          <li>Privacy Policy</li>  
          <li>Cookies</li>  
        </ul>  
      </div>  
    </footer>  
  );  
};  

export default Footer;  