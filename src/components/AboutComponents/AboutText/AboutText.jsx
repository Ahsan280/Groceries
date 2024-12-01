import React from "react";
import image1 from "../../../assets/about/Pics/3.jfif";
import image2 from "../../../assets/about/Pics/4.jfif";
import image3 from "../../../assets/about/Pics/5.jfif";
import "./abouttext.css";
const AboutText = () => {
  return (
    <div className="mt-10 container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="flex flex-col md:flex-row mb-20 md:mb-0 gap-16 md:gap-3 w-full col-span-4 inria-sans-regular">
          <div className="card flex flex-col gap-2">
            <img src={image1} className="imagesText" alt="" />
            <h1 className="text-2xl font-semibold text-center">
              Free Text Online
            </h1>
            <p className="text-center text-gray-500 text-sm w-10/12 mx-auto">
              TextFree is a mobile application and web service
            </p>
            <p
              style={{ fontSize: "1.25rem" }}
              className="text-center text-gray-500 w-1/3 mx-auto border-b border-gray-300"
            >
              See More...
            </p>
          </div>
          <div className="card flex flex-col gap-2">
            <img src={image2} className="imagesText" alt="" />
            <h1 className="text-2xl font-semibold text-center">
              Free Text Online
            </h1>
            <p className="text-center text-gray-500 text-sm w-10/12 mx-auto">
              TextFree is a mobile application and web service
            </p>
            <p
              style={{ fontSize: "1.25rem" }}
              className="text-center text-gray-500 w-1/3 mx-auto border-b border-gray-300"
            >
              See More...
            </p>
          </div>
          <div className="card flex flex-col gap-2">
            <img src={image3} className="imagesText" alt="" />
            <h1 className="text-2xl font-semibold text-center">
              Free Text Online
            </h1>
            <p className="text-center text-gray-500 text-sm w-10/12 mx-auto">
              TextFree is a mobile application and web service
            </p>
            <p
              style={{ fontSize: "1.25rem" }}
              className="text-center text-gray-500 w-1/3 mx-auto border-b border-gray-300"
            >
              See More...
            </p>
          </div>
        </div>
        <div className="col-span-2 px-5 flex gap-2 flex-col justify-center items-center inria-sans-regular">
          <h1 className="text-center text-3xl font-semibold">
            Free text online
          </h1>

          <p
            className="text-start w-10/12 text-gray-500"
            style={{ fontSize: "1.25rem" }}
          >
            TextFree is a mobile application and web service that allows users
            to send and receive text messages, as well as make and receive VoIP
            phone calls, for free over
          </p>
          <p
            className="text-gray-500 border-b border-gray-500"
            style={{ fontSize: "1.25rem" }}
          >
            Sign UP
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
