import React from "react";
import StarRating from "./StarRating";
import image1 from "../../../assets/product/Pics/1.jfif";
const ProductHero = () => {
  return (
    <div className=" mx-auto grid grid-cols-1 mt-5 md:mt-0 md:grid-cols-10">
      <div className="md:col-span-4 md:p-10 text-gray-400 flex flex-col ">
        <p className="text-5xl mx-auto md:w-[50%]">Testy and</p>
        <p className="text-yellow-500 mx-auto md:w-[55%] text-9xl kaushan-script-regular">
          Fresh
        </p>
        <p className="text-gray-900 mx-auto w-[60%] md:w-[50%]">
          A mango is an edible stone fruit produced by the tropical tree
          Mangifera indica
        </p>
        <div className="mx-auto w-[70%] md:w-[55%] mt-5">
          <StarRating />
        </div>
        <button
          className="mt-5 border-2 mx-auto mb-5 md:mb-0  md:ml-auto w-[80%] shadow-xl text-2xl border-yellow-500 
        rounded-xl text-black px-5 py-2 font-semibold"
        >
          BUY NOW
        </button>
      </div>
      {/* <div
        className="col-span-6"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderTopLeftRadius: "9rem",
          borderBottomLeftRadius: "9rem",
        }}
      >
        <img
          src={image1}
          className="h-[100%]  w-[100%]"
          alt=""
          style={{
            borderTopLeftRadius: "9rem",
            borderBottomLeftRadius: "9rem",
          }}
        />
      </div> */}
      <div
        className="col-span-6  h-[100%]"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderTopLeftRadius: "8.5rem",
          borderBottomLeftRadius: "8.5rem",
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <img src={image1} className="h-[100%] w-[100%] opacity-0" alt="" />
      </div>
    </div>
  );
};

export default ProductHero;
