import React from "react";
import "./loginheader.css";

import LoginHero from "./LoginHero";
import LoginNav from "./LoginNav";
const LoginHeader = () => {
  return (
    <div className="login-header ">
      <div className="mx-auto w-[90%] relative">
        <LoginNav />
      </div>
      <LoginHero />
    </div>
  );
};

export default LoginHeader;
