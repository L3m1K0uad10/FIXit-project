import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./professionalProfilePage.css";
import Logo from "../../assets/Logo.png";
import Profile from "../../assets/profile.jpeg";
import Paint from "../../assets/painting.png";
import Mechanic from "../../assets/mechanic.png";
import Plumbing from "../../assets/plumbing.png";

function ProfessionalProfilePage() {
  return (
    <>
      <div className="professions-page-container">
        <nav className="professions-nav">
          <div className="nav-image-container">
            <div>
              <img src={Logo} alt="" className="nav-logo" />
            </div>
          </div>
          <div className="nav-list-container">
            <ul className="nav-ul-list">
              <a href="">how it works</a>

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
          </div>
        </nav>
        <main className="main-container">
          <div className="professionals">
            <div className="professional-welcoming">
              <h3>
                I will help you out with everything <br />
                plumbing
              </h3>
            </div>
            <div className="professional-user-messages">
              <div className="professional-container">
                <div className="professional-details">
                  <div>
                    <img src={Profile} alt="professional image" />
                  </div>
                  <div className="professional-info">
                    <h5>Yvan Kwame</h5>
                    <p>20 Repairs</p>
                    <p>
                      <FontAwesomeIcon icon={faStar} />
                      4.8
                    </p>
                  </div>
                </div>
                <div className="professional-experience-text">
                  Experienced and certified plumber with <br />
                  over 15 years in the plumbing industry,
                  <br />
                  v specializing in residential and commercial
                  <br />
                  plumbing systems. Adept at installing, <br />
                  repairing, and maintaining a wide variety of
                  <br />
                  plumbing fixtures and systems. Recognized for <br />
                  excellent problem-solving skills and a commitment <br />
                  to customer satisfaction.
                </div>
                <div className="professional-suggestion-container">
                  <p className="first-suggestion">
                    Installing and repairing faucets, sinks, showers, and
                    bathtubs
                  </p>
                  <p className="second-suggestion">
                    Replacing outdated or damaged fixtures
                  </p>
                  <p className="third-suggestion">
                    Upgrading to water-saving fixtures
                  </p>
                  <p className="fourth-suggestion">
                    Installing new plumbing fixtures
                  </p>
                  <p className="fifth-suggestion">
                    Sewer line repair and replacement
                  </p>
                </div>
                <div className="professional-rating">
                  <div className="professional-rating-header">
                    <h3>What people loved about this professional</h3>
                    <p>See all reviews</p>
                  </div>
                  <div className="professional-rating-texts">
                    <div className="professional-title">
                      <h3>June Olade</h3>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <h3>5</h3>
                    </div>
                    <div>
                      I recently had the pleasure of working <br />
                      with John Mitchell from ABC Plumbing <br />
                      Services to repair my kitchen sink, and I <br />
                      couldn't be more satisfied with <br />
                      the experience. From start to finish, Jo...
                    </div>
                  </div>
                </div>
              </div>
              <div className="messages-container">
                <div className="message-chat-box">
                  <h2>Messaging</h2>
                </div>
                <div className="customer-messages">
                  <div>
                    <div className="user-message">
                      <p>At which time the would like the fix?</p>
                    </div>
                    <div className="professional-text">
                      <p>
                        As i told you my sink right now need to be <br />
                        fix and in the bathroom there are some job to be done.
                      </p>
                    </div>
                    <div className="user-message">
                      <p>
                        Alright sorry for any inconvenience of misunderstanding
                      </p>
                    </div>
                    <div className="user-message">
                      <p>Can i have some picture ?</p>
                    </div>
                  </div>
                  <div className="user-text">
                    <p>how much do you think it's gonna cost me?</p>
                  </div>
                </div>
                <div className="message-submit-btn">
                  <button>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section>
          <div className="portfolio-page-container">
            <div>
              <h1>Portfolio</h1>
            </div>
            <div className="portfolio-images">
              <div>
                <img src={Plumbing} alt="professional image" />
              </div>
              <div>
                <img src={Mechanic} alt="professional image" />
              </div>
              <div>
                <img src={Paint} alt="professional image" />
              </div>
            </div>
          </div>
        </section>
        <div className="sixth-horizontal-div"></div>
        <footer className="footer">
          <div className="footer-link-item-container">
            <a href="">About Us</a>
            <a href="">Terms Of Services</a>
            <a href="">Privacy Policy</a>
            <a href="">Help & Support</a>
          </div>
          <p>&copy; FIXit, ALL RIGHTS RESERVED</p>
          <hr />
        </footer>
      </div>
    </>
  );
}
export default ProfessionalProfilePage;
