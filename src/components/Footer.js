import React from "react";
import logo from "../img/2.webp";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <div className="info-h1-div">
          <a className="info-h1" href="tel:(208)996-3486">
            (208)996-3486
          </a>
          <p className="info-h1">
            Mon-Sat:<br></br>9AM-6PM
          </p>
          <p className="info-h1">466220 US-95</p>
        </div>

        <div className="logo-wrapper">
          <div className="logo-div2">
            <img src={logo} className="logo" />
          </div>
        </div>
      </div>
    </>
  );
}
