import React, { useState } from "react";
import "../Css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [personalOpen, setPersonalOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* LOGO IMAGE */}
        <div className="navbar-logo">
          <img
            src="/kubergates logo.png"
            alt="Kubergates Logo"
            className="navbar-logo-img"
          />
        </div>

        {/* NAV LINKS */}
        <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          {/* BUSINESS DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={() => setBusinessOpen(true)}
            onMouseLeave={() => setBusinessOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setBusinessOpen(!businessOpen)}
            >
              Business
            </button>
            <div className={`dropdown-menu ${businessOpen ? "show" : ""}`}>
              <a href="#">Accept Payments</a>
              <a href="#">Manage & Exchange</a>
              <a href="#">Gift Cards</a>
            </div>
          </div>

          {/* PERSONAL DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={() => setPersonalOpen(true)}
            onMouseLeave={() => setPersonalOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setPersonalOpen(!personalOpen)}
            >
              Personal
            </button>
            <div className={`dropdown-menu ${personalOpen ? "show" : ""}`}>
              <a href="#">Buy & Sell Crypto</a>
              <a href="#">Gift Cards</a>
              <a href="#">Merchant Directory</a>
            </div>
          </div>

          {/* PRICING */}
          <a href="#">Pricing</a>

          {/* DEVELOPERS DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={() => setDevelopersOpen(true)}
            onMouseLeave={() => setDevelopersOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setDevelopersOpen(!developersOpen)}
            >
              Developers
            </button>
            <div className={`dropdown-menu developers ${developersOpen ? "show" : ""}`}>
              <a href="#">
                Documentation
                <span className="dropdown-subtext">Integrate our API easily</span>
              </a>
              <a href="#">
                GitHub repository
                <span className="dropdown-subtext">Access our code & tools</span>
              </a>
              <a href="#">
                Status
                <span className="dropdown-subtext">Live system performance</span>
              </a>
            </div>
          </div>

          {/* RESOURCES DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              Resources
            </button>
            <div className={`dropdown-menu ${resourcesOpen ? "show" : ""}`}>
              <a href="#">Learning Center</a>
              <a href="#">Company</a>
            </div>
          </div>
        </nav>

        {/* AUTH BUTTONS */}
        <div className={`navbar-actions ${menuOpen ? "active" : ""}`}>
          <button className="btn-login">Login</button>
          <button className="btn-signup">Signup</button>
        </div>

        {/* MOBILE TOGGLE */}
        <div
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
