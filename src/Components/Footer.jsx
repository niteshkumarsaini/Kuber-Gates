import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "../Styles/Footer.css";
import logo from "../Assets/logo.png"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand + Logo */}
        <div className="footer-brand">
          <img src={logo} alt="KuberGates Logo" className="footer-logo" />
          <p>Secure, seamless, and smart crypto transactions at your fingertips.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for crypto insights and updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 KuberGates. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
