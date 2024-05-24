import React from "react";
import Logo from "../../assets/Logo.png";
import Profile from "../../assets/center1.jpeg";
import "./homePage.css";

function HomePage() {
  return (
    <div>
      <nav className="nav">
        <img src={Logo} alt="" className="nav--logo" />
        <ul className="nav-ul-list">
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">HOW IT WORKS</a>
          </li>
          <li>
            <a href="">Professional profiles</a>
          </li>
          <li>
            <button className="service-proposer-btn">
              SWITCH TO SERVICE PROPOSER
            </button>
          </li>
          <li>
            <button className="Log-out-btn">LOG OUT</button>
          </li>
          <img src={Profile} className="user-profile" />
        </ul>
      </nav>

      <main>
        <div>
          <h1>Welcome To Fixit</h1>
          <p>
            Connecting you with qualified professionals for quick assistance.
          </p>
          <a>
            <button>select the repair domain</button>
          </a>
          <a>
            <button>select the service type</button>
          </a>
          <a>
            <button>FIND A PROFESSIONAL</button>
          </a>
        </div>
      </main>

      <div className="first-horizontal-div"></div>

      <div>
        <h1>Our available domains</h1>
        <p>insight of domains catalog</p>
      </div>

      <div className="second-horizontal-div"></div>

      <div className="user-service">
        <h1>Want to see Professionals profiles?</h1>
        <p>click any domain service</p>
        <ul className="user-service-ul">
          <li>
            <button>Plumbing</button>
          </li>
          <li>
            <button>Appliance repair</button>
          </li>
          <li>
            <button>HVAC</button>
          </li>
          <li>
            <button>Cleaning</button>
          </li>
        </ul>

        <ul className="user-service-ul-inner">
          <li>
            <button>Landscaping</button>
          </li>
          <li>
            <button>Carpentry</button>
          </li>
          <li>
            <button>Electrical</button>
          </li>
        </ul>
      </div>

      <div className="third-horizontal-div"></div>
      <div>
        <h1>How it works</h1>
        <p>1-Post Your Repair Need</p>
        <p>2-Connect with a Professional</p>
        <p>3-Get it Fixed</p>
        <button>LEARN MORE</button>
      </div>
      <div className="fourth-horizontal-div"></div>
      <div>
        <h1>Ready to get started?</h1>
        <p>Join thousands of satisfied customers today</p>
        <button>JOIN</button>
      </div>

      <div className="fifth-horizontal-div"></div>

      <div>
        <h1>Why choose our platform?</h1>
        <p>
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
          XXXXXXXXXXXXXXXXXXX
        </p>
        <button>LEARN MORE</button>
      </div>

      <div className="sixtth-horizontal-div"></div>

      <div className="page-help">
        <ul className="page-help-ul">
          <li>About Us</li>
          <li>Terms of service</li>
          <li>Privacy Policy</li>
          <li>Help & Support</li>
        </ul>
      </div>

      <footer className="footer">
        <small>&copy; FIXit, ALL RIGHTS RESERVED</small>
      </footer>
    </div>
  );
}
export default HomePage;
