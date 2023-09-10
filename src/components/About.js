import React from "react";
import pistol from "../img/chase-mcbride-jc7lgQhVWtY-unsplash.webp";
import ar from "../img/stngr-industries-lWubJa7-co-unsplash.webp";
import glock from "../img/Glocks.webp";
import shhhh from "../img/texas-supressor-.webp";
import browning from "../img/browning_sig_1.webp";
import sig from "../img/SIG SAUER Logo.webp";
import sandw from "../img/media-center-image1-black-PNG_1.webp";
import ca from "../img/CA_Logo-Dark-01_1.webp";
import range from "../img/gun range.webp";
import SCo from "../img/stacked-black.webp";
import rugar from "../img/wra-flat-bw-logo-_1_.webp";
const About = () => {
  return (
    <>
      <div className="about-div">
        <div className="top-info">
          <img src={pistol} />
          <p>$15 Transfers we do that.</p>
        </div>

        <div className="mid-info">
          <div className="brands-div">
            {" "}
            <p>We special order many brands and dealer exlusives.</p>
            <div className="brands">
              <img className="brand-img" src={SCo}></img>
              <img className="brand-img" src={sandw}></img>
              <img className="brand-img" src={rugar}></img>
              <img className="brand-img" src={browning}></img>
            </div>
          </div>
          <img className="ar-photo" src={ar} />
        </div>

        <div className="bottom-info">
          <img src={glock} />
          <p>
            We have a full invintory for you to find the perfect firearm to fit
            any need you may have.
          </p>
        </div>
        <div className="end-info">
          <img src={shhhh} />
          <div className="para-div">
            <p>NFA items are here. </p>
            <p>Supressors, Short Barreled Rifles and Machine guns</p>
          </div>
        </div>
        <div className="last-info">
          <img src={range} />
          <div className="para-div-2">
            <p>
              We offer a full line of traning, Weather you want to learn more
              about basic firearms safety or you are looking for more advanced
              traning for an ehanced concealed cerry lisece. We can take on all
              your traning needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
