import React from "react";
import Logo from "../../assets/Logo.png";
import Agreement from "../../assets/Agreement.png";
import GoodDeal from "../../assets/GoodDeal.jpg";

import "./OffersPage.css";

function OffersPage() {
  return (
    <>
      <nav className="nav">
        <img src={Logo} alt="" className="nav-logo" />
        <ul className="nav-u-list">
          <li>
            <a href="">Propose your services</a>
          </li>
          <li>
            <button className="service-proposer-btn">Log in</button>
          </li>
          <li>
            <button className="Log-out-btn">Join</button>
          </li>
        </ul>
      </nav>

      <h1 className="page-discription">Benefits of our services</h1>
      <div className="first-hr">
        <div className="inner-hr">
          <h1>1</h1>
        </div>
      </div>

      <div className="Warranty">
        <h1>A Good Deal With Us</h1>

        <p className="first-paragraph">
          At FIXit we prioritize your peace of mind by offering a <br />
          robust warranty on all services provided through our
          <br />
          platform. We understand that urgent repairs demand both <br />
          speed and reliability, and our warranty assurance is <br />
          designed to deliver just that. Here's what you can expect:
        </p>

        <div>
          <ul>
            <li>
              Comprehensive Coverage: Our warranty covers all <br />
              aspects of the repair service, ensuring that any issues <br />
              related to the work performed are promptly addressed. <br />
              Whether it's a recurring problem or an oversight, <br />
              we've got you coveredÏ
            </li>

            <li>
              Qualified Professionals: Every technician in our <br />
              network undergoes rigorous vetting to meet our <br />
              high standards of quality and expertise. This means you can trust
              <br />
              that the work is done right the first time
            </li>
            <li>
              Prompt Response: Should any issues arise after <br />
              the initial repair, our dedicated customer support <br />
              team is available 24/7 to assist you. We will promptly arrange
              <br />
              for the necessary follow-up service at no additional
            </li>
            <li>
              Satisfaction Guarantee: If you are not completely
              <br />
              satisfied with the service provided, we offer a <br />
              hassle-free refund policy. Our goal is to ensure your complete
              <br />
              satisfaction, and if we fall short, we will make it right with
              <br />
              either a full refund or a reservice at no additional cost.
            </li>
          </ul>
          <img
            src={Agreement}
            alt="agreement illustration"
            width="400"
            height="400"
          />
        </div>
        <p>
          Your satisfaction and trust are our top priorities.
          <br />
          We stand behind the work of our skilled <br />
          technicians and are committed to ensuring that your
          <br />
          repairs are durable and reliable. With [Your Platform Name],
          <br />
          you can have confidence that your urgent repair needs will <br />
          be met with the highest standards of quality and service
        </p>
      </div>
      <div className="second-hr">
        <h1>2</h1>
      </div>

      <div className="good-deal">
        <h1>A Good Deal with Us</h1>
        <p>
          Choosing means optingfor excellent value and
          <br />
          convenience every time. We are dedicated to providing
          <br />
          top-notch services at competitive rates, ensuring you <br />
          get the best possible deal. Our transparent pricing
          <br />
          model ensures that you know exactly what <br />
          you're paying for, with no hidden fees or unexpected charges.
          <br />
          To further enhance your experience, we offer
          <br />a variety of discounts and special deals:
        </p>
        <ul>
          <li>
            First Time User Discount: Enjoy a 15 discount
            <br />
            on your first service when you sign up with us
          </li>
          <li>
            Loyalty Rewards: Earn points with every service booked,
            <br />
            which can be redeemed for future <br />
            discounts or exclusive offers
          </li>
          <li>
            Referral Program: Refer friends and family <br />
            to our platform and receive credits towards your next <br />
            service for each successful referralÏ
          </li>
          <li>
            Seasonal Promotions: Take advantage of our special
            <br />
            seasonal promotions and limited-time offers to get even more value.
          </li>
        </ul>
        <img src={GoodDeal} alt="Deal Image" width="400px" height="400px" />
        <p>
          By connecting you with top-rated professionals <br />
          available at your requested time, we ensure <br />
          that you receive prompt, high-quality service
          <br />
          without breaking the bank. Our goal is to provide not
          <br />
          only the urgent repair assistance you need <br />
          but also to deliver exceptional value that respects <br />
          your budget and exceeds your expectations. <br />
          Trust [Your Platform Name] for reliable, affordable service every
          time.
        </p>
      </div>

      <div></div>

      <div className="get-started">
        <h1>Ready to get started?</h1>
        <p>Join thousands of satisfied customers today</p>
        <button>JOIN</button>
      </div>
      <div></div>
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
export default OffersPage;
