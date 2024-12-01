import React from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import image1 from "../../../assets/home/Pic/15.jfif";
import image2 from "../../../assets/home/Pic/16.jfif";
import image3 from "../../../assets/home/Pic/17.jfif";
import image4 from "../../../assets/home/Pic/18.jfif";
import image5 from "../../../assets/home/Pic/19.jfif";
import image6 from "../../../assets/home/Pic/20.jfif";
import image7 from "../../../assets/home/Pic/21.jpg";
import image8 from "../../../assets/home/Pic/22.jfif";

function Softdrinks() {
  const products = [
    {
      name: "Full Cream Milk",
      description: "On a recent test run of all three services.",
      amount: "1000 ML",
      imageUrl: image1,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image2,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image3,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image4,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image5,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image6,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image7,
    },
    {
      name: "Full Cream Milk",
      amount: "1000 ML",
      description: "On a recent test run of all three services.",
      imageUrl: image8,
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
    <div className="container mx-auto py-5 my-10 w-[90%] px-5 z-10 inria-sans-regular">
      <h2 className="text-5xl font-semibold ml-2 mb-5">
        Softdrinks
        <span className="md:w-[20%]  border-b-2  border-black block"></span>
      </h2>

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
                className="w-full rounded-2xl h-60 object-cover"
              />
              <div className="pt-2">
                <div className="flex flex-col text-white mt-2">
                  <h3 className="text-white text-2xl font-semibold ">
                    {product.name}
                  </h3>
                  <p>{product.amount}</p>
                  <p className="text-light">{product.description}</p>
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

export default Softdrinks;
