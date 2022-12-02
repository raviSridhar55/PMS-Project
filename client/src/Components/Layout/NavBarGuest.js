import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBarGuest = () => {
  return (
    <>
      <div className="navbar container">
        <Logo />
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBarGuest;
