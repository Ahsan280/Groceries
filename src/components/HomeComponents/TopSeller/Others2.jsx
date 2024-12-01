import React from "react";
import image1 from "../../../assets/home/Pic/37.jpg";
import image2 from "../../../assets/home/Pic/38.jpg";
import image3 from "../../../assets/home/Pic/39.jpg";
import image4 from "../../../assets/home/Pic/fusuili.jpg";
import image5 from "../../../assets/home/Pic/donuts.webp";
const Others2 = () => {
  return (
    <div className="w-[85%] mx-auto grid grid-cols-1 gap-7 mt-10 md:grid-cols-4 z-10">
      <div className="flex flex-col py-2 col-span-1 gap-7">
        <div className="rounded-2xl h-60 w-[100%] bg-white overflow-y-hidden">
          <img
            src={image1}
            className="w-[60%] h-[100%] rounded-2xl mx-auto"
            alt=""
          />
        </div>
        <div className="rounded-2xl">
          <img
            src={image2}
            className="w-[100%] h-60 rounded-2xl object-cover"
            alt=""
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 ">
        <img
          src={image3}
          className="md:w-[100%] rounded-2xl py-2"
          alt=""
          style={{ height: "33rem" }}
        />
      </div>
      <div className="col-span-1 ">
        <div className="flex flex-col py-2 col-span-1 gap-7">
          <div className="rounded-2xl">
            <img src={image4} className="w-[100%] h-60 rounded-2xl" alt="" />
          </div>
          <div className="rounded-2xl">
            <img src={image5} className="w-[100%] h-60 rounded-2xl" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others2;
