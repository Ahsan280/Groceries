import React from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
const ProductNav = () => {
  return (
    <div className="mx-auto w-[95%] pt-5 flex justify-between p-5 inria-sans-regular">
      <div className="logo text-gray-500">
        <p style={{ fontSize: "1.25rem" }}>Your Logo</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:items-center">
        <div
          style={{ backgroundColor: "#F0F0F0" }}
          className="rounded-xl flex h-[10] border-none px-2 order-2 md:order-1"
        >
          <CiSearch className="h-[100%] text-black" />
          <input
            placeholder="Search.."
            type="text"
            className="outline-none px-1 text-black"
            style={{ backgroundColor: "#F0F0F0", fontSize: "0.75rem" }}
          />
        </div>
        <ul
          style={{ fontSize: "1.25rem" }}
          className="flex flex-col text-gray-500 md:flex-row gap-10 items-end md:items-center order-1 md:order-2"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Store</Link>
          </li>
          <li className="text-yellow-500 border-b border-yellow-500">
            <Link to="/product">Product</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductNav;
