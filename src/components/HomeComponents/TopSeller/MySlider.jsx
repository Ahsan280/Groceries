import React from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import image1 from "../../../assets/home/Pic/2.jfif";
import image2 from "../../../assets/home/Pic/3.jfif";
import image3 from "../../../assets/home/Pic/4.jfif";

function MySlider() {
  const products = [
    {
      name: "Full Cream Milk",
      amount: "1500ml",
      description: "On a recent test run of all three services.",
      imageUrl: image1,
    },
    {
      name: "Dog Food",
      amount: "1500g",
      description: "On a recent test run of all three services.",
      imageUrl: image2,
    },
    {
      name: "Jam",
      amount: "100ml",
      description: "On a recent test run of all three services.",
      imageUrl: image3,
    },
    {
      name: "Derm Stick",
      amount: "1000g",
      description: "On a recent test run of all three services.",
      imageUrl: image2,
    },
  ];

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaChevronRight
        className={className}
        style={{ ...style, display: "block", color: "white" }}
        onClick={onClick}
      />
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FaChevronLeft
        className={className}
        style={{ ...style, display: "block", color: "white" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-5 z-10 my-10 w-[90%] px-5 inria-sans-regular">
      <h2 className="text-5xl font-semibold ml-2 mb-5">Top Seller</h2>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-4">
            <div
              className="rounded-2xl overflow-hidden p-5"
              style={{ backgroundColor: "#031E00" }}
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full rounded-tl-2xl h-60 object-cover"
              />
              <div className="pt-2">
                <div className="flex flex-col text-white mt-2">
                  <h3 className="text-white text-2xl font-semibold ">
                    {product.name}
                  </h3>
                  <span className="">{product.amount}</span>
                  <p>{product.description}</p>
                  <button
                    className="bg-transparent mt-2 w-1/2 mx-auto px-2 py-1 border rounded-lg"
                    style={{ borderColor: "#E7D37F" }}
                  >
                    Add Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MySlider;
