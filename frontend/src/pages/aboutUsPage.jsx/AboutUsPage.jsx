import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import Chuan from "../../assets/Image.jpg";
import "./aboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="main-container">
      <nav className="home-nav">
        <img src={Logo} alt="" className="nav--logo" />
        <ul className="nav-ul-list">
          <Link to="/how-it-works">
            <a href="">how it works</a>
          </Link>
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

      <section>
        <div className="about-us-hero">
          <div className="about-us-details">
            <div className="about-us-logo">
              <img src={Logo} className="about-us-mid-logo" alt="Logo" />
              <h1>Meet the Team</h1>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <img src={Profile} alt="Profile" className="card-image" />
              <h2>Lemi Marcel</h2>
              <p>Organization Founder</p>
            </div>
            <div className="card">
              <img src={Chuan} alt="Profile" className="card-image" />
              <h2>Chuan Haar</h2>
              <p>Organization Co-Founder</p>
            </div>
          </div>
        </div>
      </section>

      <div className="sixtth-horizontal-div"></div>

      <footer className="footer">
        <div className="footer-link-item-container">
          <a href="">About Us</a>
          <a href="">Terms Of Services</a>
          <a href="">Privacy Policy</a>
          <a href="">Help & Support</a>
        </div>
        <h3>&copy; FIXit, ALL RIGHTS RESERVED</h3>
        <hr />
      </footer>
    </div>
  );
}

export default AboutUsPage;
