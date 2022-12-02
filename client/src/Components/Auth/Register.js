import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarGuest from "../Layout/NavBarGuest";

import registerGIF from "../img/38435-register.gif";
import AuthContext from "../../Context/auth/authContext";

const Register = () => {
  const authContext = useContext(AuthContext);

  const { register, userInfo, loading, isAuthenticated } = authContext;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phone, password);
    register(name, email, phone, password);
  };

  return (
    <>
      <div className="register-page">
        {/* <NavBarGuest /> */}
        <secttion className="register-card-section">
          <div className="register-card">
            <div className="login-card-gif">
              <img src={registerGIF} alt="login-gif" />
            </div>
            <div className="login-card-main">
              <form onSubmit={onSubmit}>
                <div className="register-head">
                  user <span style={{ color: "#377dff" }}>login</span>
                </div>
                <div className="form-container1">
                  <input
                    type="text"
                    className="input"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="input"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                  />
                  <input type="submit" className="input input-btn" />
                </div>
              </form>
              <p style={loginLink}>
                Already a User?{" "}
                <Link to="/register" style={{ color: "#377dff" }}>
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </secttion>
      </div>
    </>
  );
};

export default Register;

const loginLink = {
  color: "#111",
  textAllign: "center",
};
