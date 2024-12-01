import React from "react";
import "./banner1.css";
import image1 from "../../../assets/product/Pics/11.png";
const Banner1 = () => {
  return (
    <div className="banner-1 h-[60vh] my-16 overflow-hidden">
      <div className="grid grid-cols-1 h-[100%] md:grid-cols-2">
        <div className=" text-gray-400 flex flex-col mt-16 items-center ">
          <p
            className="text-5xl mx-auto md:w-[50%]"
            style={{ color: "#e4e4e4" }}
          >
            Testy and
          </p>
          <p className="text-yellow-500 mx-auto md:w-[55%] text-9xl kaushan-script-regular">
            Fresh
          </p>
          <p
            style={{ color: "#e4e4e4" }}
            className="text-center text-2xl mx-auto w-[70%] md:w-[60%]"
          >
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica
          </p>
        </div>
        <div className="h-[100%] mb-5 md:mb-0">
          <img src={image1} className="h-[70%] mx-auto md:h-[90%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
