import React from "react";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import SearchArea from "../SearchArea/SearchArea";
import ProfilePortion from "../ProfilePortion/ProfilePortion";

function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <SearchArea />
      <ProfilePortion />
    </div>
  );
}

export default Navbar;
