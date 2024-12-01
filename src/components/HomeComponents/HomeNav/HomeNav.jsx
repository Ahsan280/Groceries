import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <div
      className="bg-transparent conainer inria-sans-regular h-[10%]
      mx-auto w-[100%] md:w-[90%]  text-white   
     flex items-center justify-between md:text-2xl"
    >
      <div>Your Logo</div>
      <div className="flex flex-col md:flex-row mt-48 md:mt-0 gap-4 md:gap-10 ">
        <div
          style={{ backgroundColor: "#F0F0F0" }}
          className="rounded-xl flex h-4 border-none px-2 mt-3"
        >
          <CiSearch className="h-[100%] text-black" />
          <input
            placeholder="Search.."
            type="text"
            className="outline-none px-1 text-black"
            style={{ backgroundColor: "#F0F0F0", fontSize: "0.75rem" }}
          />
        </div>
        <ul className="flex flex-col md:flex-row gap-10 inria-sans-regular">
          <li
            to="/"
            className="text-yellow-400 ml-auto md:ml-0 border-b border-yellow-400"
          >
            <Link to="/">Home</Link>
          </li>
          <li className="ml-auto md:ml-0">
            <Link to="/product">Store</Link>
          </li>
          <li className="ml-auto md:ml-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="ml-auto md:ml-0">
            <Link to="/contact">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeNav;
