import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarGuest from "../Layout/NavBarGuest";
import AuthContext from "../../Context/auth/authContext";
import loginGIF from "../img/login.gif";

const Login = () => {
  const authContext = useContext(AuthContext);

  const { login, userInfo, isAuthenticated, loading } = authContext;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
    login(email, password);
    console.log(userInfo);
  };

  return (
    <>
      {/* <div className="login-page">
        {loading && console.log("loading")}
        <secttion className="login-card-section">
          <div className="login-card">
            <div className="login-card-gif">
              <img src={loginGIF} alt="login-gif" />
            </div>
            <div className="login-card-main">
              <form onSubmit={onSubmit}>
                <div className="login-head">
                  user <span style={{ color: "#377dff" }}>login</span>
                </div>
                <div className="form-container1">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      console.log(email);
                    }}
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input type="submit" className="input input-btn" />
                </div>
              </form>
              <p style={registerLink}>
                New User?{" "}
                <Link to="/register" style={{ color: "#377dff" }}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </secttion>
      </div> */}
      <>
        <div className="auth-page">
          <div className="login-card-gif">
            <img src={loginGIF} alt="login-gif" />
          </div>
          <div className="auth-inputs">
            <div className="form-container1">
              <form onSubmit={onSubmit}>
                <div className="login-head place-center">
                  user <span style={{ color: "#377dff" }}>login</span>
                </div>
                <div className="form-container1">
                  <input
                    type="email"
                    className="input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input type="submit" className="input input-btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Login;

const registerLink = {
  color: "#111",
  textAllign: "center",
};
