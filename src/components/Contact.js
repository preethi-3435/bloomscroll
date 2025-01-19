import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Left Section - Contact Details */}
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:support@bloomscroll.com">support@bloomscroll.com</a></p>
        <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
        <p>Address: 123 Bloomscroll Street, Tech City</p>
      </div>

      {/* Right Section - Social Media */}
      <div className="contact-right">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
