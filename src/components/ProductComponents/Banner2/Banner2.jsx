import React from "react";
import "./banner2.css";

const Banner2 = () => {
  return (
    <div className="banner-2 h-[60vh] my-16 overflow-hidden">
      <div className="grid grid-cols-1 h-[100%]">
        <div className=" text-gray-400 flex flex-col justify-center    items-center ">
          <p className="text-5xl md:-ml-16" style={{ color: "#e4e4e4" }}>
            Testy and
          </p>
          <p className="text-yellow-500 text-7xl md:text-9xl kaushan-script-regular">
            Fresh
          </p>
          <p
            style={{ color: "#e4e4e4", fontSize: "1.65rem", fontWeight: "300" }}
            className="text-center  mx-auto md:w-[30%]"
          >
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
