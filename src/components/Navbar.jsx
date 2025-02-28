import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Flavor<span id="highlight">Haven.</span></h1>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Recipes</Link></li>
          <li><Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link></li>
          <li><Link to="#footer" >Contact</Link></li>
          <li><button className="signup-btn">Sign Up</button></li>
        </ul>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
