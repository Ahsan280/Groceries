import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./aboutnav.css";
const AboutNav = () => {
  return (
    <div
      className="bg-transparent conainer inria-sans-regular h-[10%]
      mx-auto w-[100%] md:w-[90%] absolute top-10% text-white z-20 inset-0 
     flex items-center justify-between"
    >
      <div>Your Logo</div>
      <div className="flex md:gap-56 ">
        <div
          style={{ backgroundColor: "#F0F0F0" }}
          className="rounded-xl flex h-[3%] border-none px-2"
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Store</Link>
          </li>
          <li className="text-yellow-400 border-b border-yellow-400">
            <Link>About Us</Link>
          </li>
          <li>
            <Link to="/contact">Help</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutNav;
