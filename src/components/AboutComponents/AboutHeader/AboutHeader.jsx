import React from "react";
import "./aboutheader.css";
import AboutNav from "./AboutNav/AboutNav";
const AboutHeader = () => {
  return (
    <div>
      <div className="relative about-header  md:h-[100vh]">
        <AboutNav />
        <div className="leftImage flex flex-col justify-center items-center text-white">
          <div className="overlay"></div>
          <div className="flex z-20 flex-col items-center md:mr-36 justify-center">
            <h1 className=" text-yellow-400 md:text-6xl kaushan-script-regular">
              About Us
            </h1>
            <p
              className="text-center md:w-[60%] text-tag"
              style={{ fontSize: "1.2rem" }}
            >
              TextFree is a mobile application and web service that allows users
              to send and receive text messages, as well as make and receive
              VoIP phone calls, for free over
            </p>
          </div>
        </div>
        <div className="rightImage">
          <div className="overlay"></div>
        </div>

        <div className="separator"></div>
      </div>
    </div>
  );
};

export default AboutHeader;
