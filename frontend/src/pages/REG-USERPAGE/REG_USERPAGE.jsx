import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Logo.jpg";
// import "./USER_PAGE.css";

function USER_PAGE() {
  return (
    <>
      <div className="container">
        <img src={logo} alt="LOGO" />

        <div className="">
          <Link to="/landing">
            <a href="" className="">
              Home
            </a>
          </Link>
          <Link to="/service">
            <a href="" className="">
              Pro Service
            </a>
          </Link>
          <div className="">
            <Link to="/AUTHEN">
              <button type="button" className="btn">
                Login
              </button>
            </Link>
            <Link to="/create">
              <button type="button" className="">
                Join
              </button>
            </Link>
          </div>
        </div>
        <h4>Enter Your Credentials</h4>

        <div className="hr"></div>

        <form className="sign-up-form">
          <label>Email</label>
          <br />
          <input type="email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />
          <label>Re-enter Password</label>
          <br />
          <input type="password" />

          <p>
            By creating an account you agree to our
            <br />
            <a href="">Privacy</a> and <a href="">Terms</a>
          </p>
          <div>
            <button type="submit">SIGN UP</button>
          </div>
        </form>

        <div className="hr"></div>

        <p>
          Already have an account? <a href="">Login here</a>
        </p>

        <footer className="term-condition-container">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </footer>
      </div>
    </>
  );
}

export default USER_PAGE;
