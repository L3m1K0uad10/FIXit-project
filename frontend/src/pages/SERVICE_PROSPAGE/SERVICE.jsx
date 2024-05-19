import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/Logo.jpg";
// import "./SERVICE.css";

function SERVICE() {
  return (
    <>
      <form action="" className="sign-up-form">
        <img src={logo} alt="LOGO" />

        <div className="">
          <Link to="/landing">
            <a href="" className="">
              Home
            </a>
          </Link>
          <Link to="/USER_PAGE">
            <a href="" className="">
              Choose Your Service
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
        <div className="user-log-in-container">
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
        </div>

        <div className="services-container">
          <div className="services-container-form">
            <div className="service-headers-container">
              <h1>Insight about your services</h1>
              <p>
                help us and clients know what you are providing as services.
              </p>
            </div>

            <label for="services">Service domain:</label>
            <br />
            <select name="services" id="services">
              <option value="">Select a service domain</option>
              <option value="plumber">Plumber</option>
              <option value="electrician">Electrician</option>
              <option value="carpenter">Carpenter</option>
              <option value="mechanic">Mechanic</option>
            </select>
            <br />
            <label>Can't find your domain? specify it here</label>
            <br />
            <input type="text" />
            <br />
            <label for="specialities">Add your specialities:</label>
            <br />
            <select name="specility" id="specialities">
              <br />
              <option value="">Select a speciality</option>
              <option value="speciality1">fixing broken pipes</option>
              <option value="speciality2">fixing and installing tap</option>
            </select>
          </div>
          <div className="service-specialities-display-container">
            <div className="speciality">
              <div>speciality 1</div>
              <i className="fa-solid fa-minus"></i>
            </div>
            <div className="speciality">
              <div>speciality 2</div>
              <i className="fa-solid fa-minus"></i>
            </div>
            <div className="speciality">
              <div>speciality 3</div>
              <i className="fa-solid fa-minus"></i>
            </div>
          </div>
        </div>

        <div className="review-container-1">
          This is a catalog that is going to be displayed according to the
          previous inputs done by the user(summary), to provide a review to the
          user
        </div>

        <div className="works-container">
          <div className="works-headers-container">
            <h1>Insight about your work</h1>
            <p>
              It is going to showcase to clients your work you have done and how
              better you do it.
            </p>
          </div>

          <div className="works-container-form">
            <label for="image">Upload Images</label>
            <input type="file" name="image" accept="image/png, image/jpeg" />
            <br />
            <label for="video">Upload Videos</label>
            <input type="file" name="video" />
            <p>
              NB: video should be short and concise, both videos and images
              should be yours, no plagiarism
            </p>
          </div>
          <div className="works-display-container">
            <div className="work-uploaded">image uploaded 1</div>
            <div className="work-uploaded">image uploaded 2</div>
            <div className="work-uploaded">video uploaded 1</div>
          </div>
        </div>

        <div className="prices-container">
          <div className="prices-headers-container">
            <h1>Insight about your price per specification</h1>
            <p>
              It is going to be used for a better estimation of how expensive or
              cheap you provide your services
              <br />
              (for our prices filtering)
            </p>
          </div>

          <div className="prices-container-form">
            <label for="currency">Speciality entered display 1</label>
            <input type="text" />
            <select name="currency" id="currency">
              <option value="">USD</option>
              <option value="">EURO</option>
              <option value="">ROUPIE</option>
              <option value="">YEN</option>
            </select>
            <br />
            <label for="">Speciality entered display 2</label>
            <input type="text" />
            <select name="currency" id="currency">
              <option value="">USD</option>
              <option value="">EURO</option>
              <option value="">ROUPIE</option>
              <option value="">YEN</option>
            </select>
            <br />
            <label for="">Speciality entered display 3</label>
            <input type="text" />
            <select name="currency" id="currency">
              <option value="">USD</option>
              <option value="">EURO</option>
              <option value="">ROUPIE</option>
              <option value="">YEN</option>
            </select>
          </div>
        </div>

        <div className="review-container-2">
          This is a catalog that is going to be displayed according to the
          previous inputs done by the user(summary), to provide a review to the
          user
        </div>

        <div className="About-user-container">
          <div>
            <h1>About you</h1>
            <p>
              give some points, clues about <br />
              you, to help clients to trust you
            </p>
          </div>
          <textarea name="" id="" cols="38" rows="18">
            about you
          </textarea>
          <div className="about-container-form">
            <label>Full Name</label>
            <br />
            <input type="text" />
            <br />
            <label for="">Add an Experience Background</label>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>

        <div className="review-container-3">
          This is a catalog that is going to be displayed according to the
          previous inputs done by the user(summary), to provide a review to the
          user
        </div>

        <p className="term-condition-paragraph">
          By creating an account you agree to our
          <br />
          <a href="">Privacy</a> and <a href="">Terms</a>
        </p>

        <button type="submit">SIGN UP</button>

        <div className="hr"></div>

        <p className="status">
          Already have an account? <a href="">Login here</a>
        </p>
      </form>
    </>
  );
}

export default SERVICE;
