// import React, { Fragment, useContext } from "react";
// import { Link } from "react-router-dom";
// import AuthContext from "../../Context/auth/authContext";
// import "../../style/responsive.css";
// import "../../style/style.css";

// const SideBar = () => {
//   const authContext = useContext(AuthContext);
//   const { user } = authContext;

//   // const { isPM } = userInfo;
//   // console.log(" jayesh", userInfo);
//   const userLinks = (
//     <Fragment>
//       <ul className="side-bar-links">
//         <li>
//           <i className="text-gray fa-solid fa-house mxr-1"></i>
//           <Link to="/dashboard">Home</Link>
//         </li>
//         <li>
//           <i className="text-gray fa-sharp fa-solid fa-user mxr-1"></i>
//           <Link to="#">Profile</Link>
//         </li>
//         <li>
//           <i className="text-gray fa-solid fa-window-restore mxr-1"></i>
//           <Link to="/storypage">Stories</Link>
//         </li>
//         <li>
//           <i className="text-gray fa-solid fa-bars-progress mxr-1"></i>
//           <Link to="/taskpage">Tasks</Link>
//         </li>
//       </ul>
//     </Fragment>
//   );

//   const projectManagerLinks = (
//     <Fragment>
//       <ul className="side-bar-links">
//         <li>
//           <i className="text-gray fa-solid fa-house mxr-1"></i>
//           <Link to="/admin">Home</Link>
//         </li>
//         <li>
//           <i className="text-gray fa-solid fa-user mxr-1"></i>
//           <Link to="#">Profile</Link>
//         </li>
//         <li>
//           <i className="text-gray fa-solid fa-users mxr-1"></i>
//           <Link to="/adminusers">Users</Link>
//         </li>
//         <li>
//           <i className="text-gray fa-solid fa-people-group mxr-1"></i>
//           <Link to="/adminteams">Teams</Link>
//         </li>
//       </ul>
//     </Fragment>
//   );

//   return (
//     <div>
//       <div id="main-side-bar">
//         <div className="main-side-bar">
//           <div className="logo">
//             <h1>
//               <i
//                 className="fa-solid fa-diagram-project"
//                 style={{ color: "#2076ff", display: "block" }}
//               ></i>
//               <span style={{ color: "#bd0e0e" }}>P</span>
//               <span style={{ color: "#6900a7" }}>M</span>
//               <span style={{ color: "#00a90b" }}>S</span>
//             </h1>
//           </div>
//           <div className="side-bar-list">
//             {user && (user.isPM ? projectManagerLinks : userLinks)}
//           </div>
//           <div className="side-bar-footer">
//             <div className="contact-us">
//               <div className="contact-us-social">
//                 <i className="text-gray fa-brands fa-linkedin fa-2x"></i>
//                 <i className="text-gray fa-brands fa-twitter fa-2x"></i>
//                 <i className="text-gray fa-brands fa-instagram fa-2x"></i>
//               </div>
//               <div className="contact-us-local">
//                 <Link to="#">Contact Us</Link>
//               </div>
//             </div>
//             <div className="footer-sign place-center">
//               <p className="text-gray" style={{ fontSize: "0.7rem" }}>
//                 &copy; PMS
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import React, { useState, useContext, Fragment, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "../../Context/auth/authContext";
import { Link } from "react-router-dom";

import Offcanvas from "react-bootstrap/Offcanvas";

function SideBar() {
  const authContext = useContext(AuthContext);
  const { logout, user, loadUser } = authContext;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadUser();
  }, []);

  console.log(user);

  const onClick = () => {
    console.log("logout");
    logout();
  };
  const close = () => {
    // console.log("logout");
    setShow(false);
  };

  const authLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="/register" onClick={close}>
            Register
          </Link>
        </li>
        <li>
          <i className="text-gray fa-sharp fa-solid fa-user mxr-1"></i>
          <Link to="/login" onClick={close}>
            Login
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  const userLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="">Home</Link>
        </li>
        <li>
          <i className="text-gray fa-sharp fa-solid fa-user mxr-1"></i>
          <Link to="">Profile</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-window-restore mxr-1"></i>
          <Link to="">Stories</Link>
        </li>
        <li>
          <i className="text-gray fa-solid fa-bars-progress mxr-1"></i>
          <Link to="">Tasks</Link>
        </li>
        <li onClick={onClick}>
          {/* <i className="text-gray fa-solid fa-people-group mxr-1"></i> */}
          <Link to="">Logout</Link>
        </li>
      </ul>
    </Fragment>
  );

  const projectManagerLinks = (
    <Fragment>
      <ul className="side-bar-links">
        <li>
          <i className="text-gray fa-solid fa-house mxr-1"></i>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <i className="text-gray fa-solid fa-user mxr-1"></i>
          <Link to="">Profile</Link>
        </li> */}
        <li>
          <i className="text-gray fa-solid fa-users mxr-1"></i>
          <Link to="">Users</Link>
        </li>
        <li onClick={onClick}>
          {/* <i className="text-gray fa-solid fa-people-group mxr-1"></i> */}
          <Link to="">Logout</Link>
        </li>
      </ul>
    </Fragment>
  );

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa-solid fa-bars"></i>
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="logo">
              <h1>
                <i
                  className="fa-solid fa-diagram-project"
                  style={{ color: "#2076ff", display: "block" }}
                ></i>
                <span style={{ color: "#bd0e0e" }}>P</span>
                <span style={{ color: "#6900a7" }}>M</span>
                <span style={{ color: "#00a90b" }}>S</span>
              </h1>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {user ? (user.isPM ? projectManagerLinks : userLinks) : authLinks}
          {/* {console.log(user && user.isPM)} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;
