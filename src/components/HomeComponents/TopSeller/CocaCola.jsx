import React from "react";
import image1 from "../../../assets/home/Pic/cocacola.PNG";
const CocaCola = () => {
  return (
    <div
      style={{ backgroundColor: "#031E00" }}
      className="mx-auto rounded-2xl z-10 w-[75%]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 px-5">
        <div className="flex justify-end px-10">
          <img src={image1} alt="" style={{ transform: "rotate(-5deg)" }} />
        </div>
        <div className="flex flex-col justify-center  md:items-start gap-3 text-white pb-5">
          <h2 className="text-4xl md:text-6xl font-bold">Coca Cola</h2>
          <h3 className="text-2xl md:text-3xl font-semibold ml-5">1 LITRE</h3>
          <p className="ml-5 " style={{ fontSize: "1.25rem" }}>
            "On A Recent Test Of
          </p>
          <p
            className="ml-5 "
            style={{ fontSize: "1.25rem", marginTop: "-20px" }}
          >
            All Three Services.
          </p>
          <button
            className="bg-transparent border-2 w-[90%] md:w-[70%] rounded-md px-4 py-1 mx-auto md:mx-0 md:ml-5"
            style={{ borderColor: "#E7D37F" }}
          >
            ADD CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default CocaCola;
