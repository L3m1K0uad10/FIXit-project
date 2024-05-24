import React from "react";
import Logo from "../../assets/Logo.png";
import "./authPage.css";

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="decor-1"></div>
      <div className="decor-2"></div>
      <div className="auth-core-container">
        <img className="logo" src={Logo} alt="LOGO" />

        <h4>Enter Your Credentials</h4>

        <div className="hr"></div>

        <form className="sign-in-form">
          <label>Email</label>
          <br />
          <input type="email" />
          <br />
          <label>Password</label>
          <br />
          <input type="password" />
          <br />

          <p>
            <a href="">Forgot password?</a>
          </p>
          <div>
            <button type="submit">SIGN IN</button>
          </div>
        </form>

        <div className="hr"></div>

        <p>
          New to the platform? <a href="">Create an account</a>
        </p>

        <footer className="term-condition-container">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </footer>
      </div>
    </div>
  );
}

export default AuthPage;
