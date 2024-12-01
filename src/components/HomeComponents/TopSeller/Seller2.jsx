import React from "react";
import backgroundImage from "../../../assets/home/Pic/26.jpg";
import image1 from "../../../assets/home/Pic/28.jfif";
const Seller2 = () => {
  return (
    <div
      className=" w-[85%] mx-auto rounded-md seller-1 mt-14 z-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[90%] mx-auto flex  md:flex-row py-10 items-center">
        <img
          src={image1}
          style={{ height: "265px", width: "250px" }}
          className="seller-2-image rounded-xl object-cover"
          alt=""
        />
        <div className="flex md:w-[55%]">
          <div className="flex flex-col gap-5 md:ml-10 text-white items-center">
            <h1 className="text-2xl md:text-5xl font-semibold text-center">
              Top Seller
            </h1>

            <p className="md:w-[100%] md:text-2xl text-center ">
              <span>On a recent test run of all three services, Text </span>
              <br />
              <span>Free was the fastest, most</span>
              <br />
              <span>reliable and easiest to use.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller2;
