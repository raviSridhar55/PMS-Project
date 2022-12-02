import { Link } from "react-router-dom";
import React, { useContext } from "react";
import AuthContext from "../../Context/auth/authContext";
import SideBar from "./SideBar";

const NavbarUser = () => {
  const authContext = useContext(AuthContext);
  // const { logout, userInfo } = authContext;

  // const onLogout = () => {
  //   logout();
  // };
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-search">
          <Link to="/">
            <div className="logo">
              <h1>
                <span style={{ color: "#bd0e0e" }}>P</span>
                <span style={{ color: "#6900a7" }}>M</span>
                <span style={{ color: "#00a90b" }}>S</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="logout-btn ">
          <SideBar />
          {/* <p>{userInfo && userInfo.name} </p>
          <Link to="#">
            <i className="fa-solid fa-right-from-bracket fa-2x"></i>
          </Link> */}
        </div>
      </nav>
    </>
  );
};

export default NavbarUser;
