import React from "react";
import "./Logo.css";
import logo from "../../../assets/images/logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
