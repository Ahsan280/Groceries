import React from "react";
import { Link } from "react-router-dom";
const ContactNav = () => {
  return (
    <div className="mx-auto w-[90%] pt-10 flex inria-sans-regular justify-between md:justify-normal">
      <div className="logo text-white ">
        <p style={{ fontSize: "1.5rem" }}>Your Logo</p>
      </div>

      <ul
        style={{ fontSize: "1.3rem", fontWeight: "300" }}
        className="flex flex-col
         text-white md:flex-row gap-10 items-end md:justify-center
         inria-sans-regular md:w-[85%] md:items-center order-1 md:order-2"
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Store</Link>
        </li>
        <li className="text-yellow-500 border-b border-yellow-500">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/login">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactNav;
