import React from "react";
import "./ProfilePortion.css";
import { IoIosMenu } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { GoPersonFill } from "react-icons/go";

function ProfilePortion() {
  return (
    <div className="profilePortion">
      <div className="airbnb_home">Airbnb your home</div>
      <div className="language_currency_icon">
        <TbWorld />
      </div>
      <div className="profile_menu_icon">
        <div className="menu">
          <IoIosMenu />
        </div>
        <div className="profile">
          <GoPersonFill className="icon" />
          <div className="notification">{1}</div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePortion;
