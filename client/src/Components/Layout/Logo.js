import React from "react";

const Logo = () => {
  return (
    <div style={logo}>
      <h1>
        <i className="fa-solid fa-diagram-project" style={iStyle}></i>
        <span style={logo1}>P</span>
        <span style={logo2}>M</span>
        <span style={logo3}>S</span>
      </h1>
    </div>
  );
};

export default Logo;

const logo = {
  height: "60px",
  width: "60px",
  // background: "blue",
};

const iStyle = {
  color: "#2076ff",
  display: "block",
};

const logo1 = {
  color: "#bd0e0e",
  fontSize: "1.4rem",
};

const logo2 = {
  color: "#6900a7",
  fontSize: "1.4rem",
};

const logo3 = {
  color: "#00a90b",
  fontSize: "1.4rem",
};
