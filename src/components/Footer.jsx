import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPizzaSlice, FaUtensils, FaHamburger } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* Left - Brand Name with Logo */}
      <div className="footer-left">
        <div className="logo">
          <FaUtensils className="logo-icon" />
          <span id="highlight">FlavorHaven</span>
        </div>
        <div>
          <p>Discover & Share Delicious Recipes</p>
        </div>
      </div>

      {/* Center - Quick Links */}
      <div className="footer-center">
        <h3 id="highlight">Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Right - Subscribe & Social Icons */}
      <div className="footer-right">
        <h3 id="highlight">Stay Updated</h3>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
