import React from "react";
import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";

import "./professionalPage.css";

function ProfessionalPage() {
  return (
    <>
      <nav className="nav">
        <img src={Logo} alt="" className="nav-logo" />
        <ul className="nav-u-list">
          <li>
            <a href="">how it works</a>
          </li>
          <li>
            <a href="">Professional profiles</a>
          </li>
          <li>
            <button className="service-proposer-btn">
              SWITCH TO PROFESSIONAL
            </button>
          </li>
          <li>
            <button className="Log-out-btn">LOG OUT</button>
          </li>
          <img src={Profile} className="user-profile" />
        </ul>
      </nav>
      <div className="professional-btns">
        <button>APPLIANCE REPAIR</button>
        <button>HVAC</button>
        <button>CLEANING</button>
        <button>LANDSCAPING</button>
        <button>CARPENTRY</button>
        <button>LECTRICAL</button>
      </div>
      <h1>Plumbing professionals</h1>
      <div className="first-hr"></div>
      <h1>Service related images</h1>
      <div className="second-hr"></div>

      <div className="footer-container">
        <footer className="footer">
          <a href="">About Us</a>
          <a href="">Terms Of Services</a>
          <a href="">Privacy Policy</a>
          <a href="">Help & Support</a>
        </footer>
      </div>
      <div className="copy-right">
        <h3>&copy; FIXit, ALL RIGHTS RESERVED</h3>
      </div>
    </>
  );
}

export default ProfessionalPage;
