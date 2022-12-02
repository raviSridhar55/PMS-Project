import React from "react";
import { Link } from "react-router-dom";
import LandingNavbar from "../Layout/LandingNavbar";

const LandingScreenHome = () => {
  return (
    <div className="hero">
      <LandingNavbar />
      <div className="hero-content">
        <div className="hero-content-welcome">
          <p>Welcome</p>
        </div>
        <div className="hero-content-message">
          <h1>
            Everything you need for a
            <span style={{ color: "#377dff" }}> Happy</span> and
            <span style={{ color: "#377dff" }}> Productive</span> Team - All in
            one place
          </h1>
        </div>
        <div className="hero-content-btn">
          <button className="hero-content-btn1">
            <Link to="/register">Register</Link>
          </button>
          <button className="hero-content-btn2">
            <Link to="!#">Contact Us</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreenHome;
