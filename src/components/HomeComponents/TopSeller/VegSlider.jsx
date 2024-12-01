import React from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

import image1 from "../../../assets/home/Pic/6.jpeg";
import image2 from "../../../assets/home/Pic/7.jpg";
import image3 from "../../../assets/home/Pic/8.jfif";
import image4 from "../../../assets/home/Pic/9.jpg";
import image5 from "../../../assets/home/Pic/10.jfif";

function VegSlider() {
  const products = [
    {
      name: "Carret",

      description: "On a recent test run of all three services.",
      imageUrl: image1,
    },
    {
      name: "Calabash",

      description: "On a recent test run of all three services.",
      imageUrl: image2,
    },
    {
      name: "Kale",

      description: "On a recent test run of all three services.",
      imageUrl: image3,
    },
    {
      name: "Cabbage",

      description: "On a recent test run of all three services.",
      imageUrl: image4,
    },
    {
      name: "Ginger",
      description: "On a recent test run of all three services.",
      imageUrl: image5,
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
    <div className="container z-10 mx-auto py-5 my-10 w-[90%] px-5 inria-sans-regular">
      <h2 className="text-5xl font-semibold ml-2 mb-5">
        Vegetables
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

export default VegSlider;
