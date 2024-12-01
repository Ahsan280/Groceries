import React from "react";
import "./homeheader.css";
import image1 from "../../../assets/home/Pic/1.jfif";
import HomeNav from "../HomeNav/HomeNav";

const HomeHeader = () => {
  return (
    <div
      className="relative home-header naloo h-[100vh]"
      style={{ zIndex: "11" }}
    >
      <div className="md:px-5 res  pt-10 z-30 aloo absolute top-10">
        <div
          className="rounded-lg w-[80%] basket mx-auto h-[100vh] z-10 p-5"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            marginBottom: "-100px",
          }}
        >
          <HomeNav />
          <div className="flex flex-col gap-5 justify-center items-center h-[90%]">
            <h1 className="text-white text-4xl md:text-8xl w-[70%] text-center kaushan-script-regular">
              Millions Of Happy
            </h1>
            <p className="text-center inria-sans-regular text-white md:w-[50%] md:text-2xl">
              Send unlimited free texts and make WiFi calls from a free phone
              number. Download the free app or sign up online to pick your free
              phone number
            </p>
            <button
              className="bg-transparent px-4 py-2 border rounded-md md:w-[25%]"
              style={{
                borderColor: "#E7D37F",
                color: "#E7D37F",
                borderWidth: "2px",
              }}
            >
              Star Now
            </button>
          </div>
        </div>
      </div>

      {/* <div className="moverlay"></div> */}
    </div>
  );
};

export default HomeHeader;
