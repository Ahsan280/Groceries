import React from "react";
import "./banner3.css";

const Banner3 = () => {
  return (
    <div className="banner-3 h-[75vh] mt-16 overflow-hidden">
      <div className="grid grid-cols-1 h-[100%]">
        <div className=" text-gray-400 flex flex-col justify-center items-end  pr-10">
          <p
            className="text-5xl text-start mx-auto md:mx-0 md:mr-52"
            style={{ color: "#e4e4e4" }}
          >
            Testy and
          </p>
          <p className="text-yellow-500 mx-auto md:mx-0 text-center md:mr-48  text-9xl kaushan-script-regular">
            Fresh
          </p>
          <p
            style={{ color: "#e4e4e4", fontSize: "1.65rem", fontWeight: "300" }}
            className="text-center mx-auto md:mx-0 md:mr-24 md:w-[30%]"
          >
            A mango is an edible stone fruit produced by the tropical tree
            Mangifera indica
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
