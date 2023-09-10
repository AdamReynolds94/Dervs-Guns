import React from "react";
import logo from "../img/2.webp";

const Header = () => {
  return (
    <>
      <div className="contianer">
        <div className="logo-div">
          <img src={logo} className="logo" />
        </div>
        <div className="name-div">DERV'S GUNS</div>
        <div className="info-div">
          <h1>Call us</h1>
          <a className="info-h1" href="tel:(208)996-3486">
            (208)996-3486
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
