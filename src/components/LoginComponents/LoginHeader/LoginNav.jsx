import React from "react";
import { Link } from "react-router-dom";
const LoginNav = () => {
  return (
    <div className="mx-auto w-[100%] absolute z-40 pt-5 flex justify-between p-5 inria-sans-regular">
      <div className="logo text-black font-semibold">
        <p style={{ fontSize: "1.5rem" }}>Your Logo</p>
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:items-center">
        <ul
          style={{ fontSize: "1.3rem" }}
          className="flex flex-col text-white md:flex-row gap-10 items-end md:items-center order-1 md:order-2"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Store</Link>
          </li>
          <li className="text-yellow-500 border-b border-yellow-500">
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginNav;
