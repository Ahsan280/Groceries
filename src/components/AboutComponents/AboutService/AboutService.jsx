import React from "react";
import image1 from "../../../assets/about/Pics/8.jfif";
import image2 from "../../../assets/about/Pics/9.webp";
import image3 from "../../../assets/about/Pics/10.jfif";
const AboutService = () => {
  return (
    <div
      className="inria-sans-regular  py-10 my-20"
      style={{ backgroundColor: "#F0F0F0" }}
    >
      <div className="container mx-auto">
        <h2 className="text-center text-5xl">About Service</h2>
        <p
          className="text-center text-gray-500 md:w-[35%] mx-auto"
          style={{ fontSize: "1.25rem" }}
        >
          TextFree is a mobile application and web service that allows users to
          send and receive text.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 w-[90%] mx-auto gap-3 mt-10">
          <div className="">
            <img
              src={image1}
              className="w-full "
              style={{ height: "450px" }}
              alt=""
            />
            <div className="card flex flex-col gap-2 mt-5">
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
          <div>
            <img
              src={image2}
              style={{ height: "450px" }}
              className="w-full "
              alt=""
            />
            <div className="card flex flex-col gap-2 mt-5">
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
          <div>
            <img
              src={image3}
              className="w-full "
              style={{ height: "450px" }}
              alt=""
            />
            <div className="card flex flex-col gap-2 mt-5">
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
        </div>
      </div>
    </div>
  );
};

export default AboutService;
