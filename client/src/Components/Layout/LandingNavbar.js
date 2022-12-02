import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const LandingNavbar = () => {
  return (
    <>
      <div className="navbar container">
        <Logo />
        <button className="nav-acc-btn">
          <Link to="/login">
            <i className="fa-solid fa-user"></i> Login
          </Link>
        </button>
      </div>
    </>
  );
};

export default LandingNavbar;
