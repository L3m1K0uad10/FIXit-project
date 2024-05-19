import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Logo.jpg";
// import "./CREATE.css";

function CREATE() {
  return (
    <div className="container">
      <img src={logo} className="page_logo" alt="LOGO" />

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
          <Link to="/user_page">
            <button type="button" className="">
              Join
            </button>
          </Link>
        </div>
      </div>

      <h4>Create an account</h4>

      <div className="hr"></div>

      <form className="type-user-container">
        <p>Choose the type of account</p>
        <div>
          <button>REGULAR USER</button>
          <button>SERVICE PROPOSER</button>
        </div>
      </form>

      <div className="hr"></div>

      <footer className="term-condition-container">
        <a href="">Privacy</a>
        <a href="">Terms</a>
      </footer>
    </div>
  );
}

export default CREATE;
