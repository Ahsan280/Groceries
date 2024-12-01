import React from "react";
import image1 from "../../../assets/product/Pics/21.jfif";
import image2 from "../../../assets/product/Pics/avacado.jpg";
import StarRating from "../ProductHeader/StarRating";
const NormalCards = () => {
  return (
    <div className="w-[90%] h-[200vh] mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 my-10 py-5 px-10">
      <div className="relative h-[100%]">
        <img
          src={image1}
          className="h-[50%] md:h-[80%] w-[100%] rounded-2xl"
          alt=""
        />
        <div className="overlay h-[50%] md:h-[80%] rounded-2xl"></div>
        <div className="flex flex-col items-center p-5">
          <div className="flex  gap-3 md:w-[50%] mx-auto">
            <p className="text-yellow-500  kaushan-script-regular text-6xl">
              Fresh
            </p>
            <div className="flex">
              <p className="text-2xl">4.3</p>
              <StarRating myfilledStars={1} mytotalStars={1} />
            </div>
          </div>
          <p
            className="md:w-[50%] text-2xl mx-auto"
            // style={{ fontSize: "1.25rem" }}
          >
            A mango is an edible stone fruit.
          </p>
          <button className="border-2 md:w-[50%] mt-2 mx-auto border-yellow-500 px-4 py-2 rounded-2xl">
            Add Cart
          </button>
        </div>
      </div>
      <div className="h-[100%] relative">
        <img
          src={image2}
          className="h-[50%] md:h-[80%] w-[100%] rounded-2xl"
          alt=""
        />
        <div className="overlay h-[50%] md:h-[80%] rounded-2xl"></div>
        <div className="flex flex-col items-center p-5">
          <div className="flex  gap-3 md:w-[50%] mx-auto">
            <p className="text-yellow-500  kaushan-script-regular text-6xl">
              Fresh
            </p>
            <div className="flex">
              <p className="text-2xl">4.3</p>
              <StarRating myfilledStars={1} mytotalStars={1} />
            </div>
          </div>
          <p
            className="md:w-[50%] text-2xl mx-auto"
            // style={{ fontSize: "1.25rem" }}
          >
            A mango is an edible stone fruit.
          </p>
          <button className="border-2 md:w-[50%] mt-2 mx-auto border-yellow-500 px-4 py-2 rounded-2xl">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NormalCards;
