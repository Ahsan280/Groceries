import React from "react";
import image1 from "../../../assets/product/Pics/2.webp";
import image2 from "../../../assets/product/Pics/3.jpg";
import image3 from "../../../assets/product/Pics/4.jfif";
import image4 from "../../../assets/product/Pics/5.jpg";
import image5 from "../../../assets/product/Pics/6.jpg";
import image6 from "../../../assets/product/Pics/7.webp";
import image7 from "../../../assets/product/Pics/8.jfif";
import image8 from "../../../assets/product/Pics/9.jpg";
import StarRating from "../ProductHeader/StarRating";
const ProductCards = () => {
  const fruits = [
    {
      description: "A mango is an edible stone fruit.",
      image: image1,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image2,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image3,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image4,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image5,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image6,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image7,
    },
    {
      description: "A mango is an edible stone fruit.",
      image: image8,
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto w-[90%] overflow-hidden mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-4">
        {fruits.map((fruit, index) => {
          return (
            <div key={index} className="col-span-1 my-5 card">
              <img
                src={fruit.image}
                alt=""
                className="w-[75%] h-[55%] mx-auto"
              />
              <div className="flex flex-col p-5">
                <div className="flex justify-between w-[75%] mx-auto">
                  <p className="text-yellow-500 kaushan-script-regular text-2xl">
                    Fresh
                  </p>
                  <div className="flex">
                    <p className="text-2xl">4.3</p>
                    <StarRating myfilledStars={1} mytotalStars={1} />
                  </div>
                </div>
                <p className="w-[75%] mx-auto" style={{ fontSize: "1.25rem" }}>
                  {fruit.description}
                </p>
                <button className="border-2 w-[75%] mt-2 mx-auto border-yellow-500 px-4 py-2 rounded-2xl">
                  Add Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCards;
