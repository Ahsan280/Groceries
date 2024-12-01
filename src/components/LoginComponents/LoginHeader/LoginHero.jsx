import React from "react";
import gmailIcon from "../../../assets/login/gmail.png";
import facebookIcon from "../../../assets/login/facebook.png";
import image1 from "../../../assets/login/pic.jfif";
const LoginHero = () => {
  return (
    <div className=" mx-auto grid grid-cols-1  md:mt-0  md:grid-cols-10 ">
      <div className="md:col-span-6 md:p-10 ">
        <div className="flex items-center flex-col inria-sans-regular mt-64 md:mt-36 gap-5">
          <p className="text-6xl font-semibold">User Login</p>
          <div className="flex items-center gap-5">
            <img
              src={gmailIcon}
              className="w-10 h-10 bg-white p-1 rounded-md"
              alt=""
            />
            <p style={{ fontWeight: "500" }} className="mt-3">
              Or
            </p>
            <img src={facebookIcon} className="w-10 h-10 " alt="" />
          </div>
        </div>
        <form className="flex flex-col mt-10 items-center gap-5 inria-sans-regular">
          <div className="flex flex-col w-[100%] items-center gap-2">
            <label htmlFor="email" className="text-3xl w-[70%]">
              E-Mail:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email..."
              className="rounded-lg px-4 py-3 bg-white w-[70%] h-12 text-2xl focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-[100%] items-center gap-2">
            <label htmlFor="password" className="text-3xl w-[70%]">
              Password:
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter Your Password..."
              className="rounded-lg px-4 py-3 bg-white w-[70%] h-12 text-2xl focus:outline-none"
            />
          </div>
          <button
            style={{
              boxShadow:
                "1px 4px 10px rgba(0, 0, 0, 0.5), inset 0 0 0 2px #fde047",
            }}
            className="bg-transparent font-semibold text-3xl 
          rounded-lg border-none w-[50%] px-5 py-2"
          >
            Log In
          </button>
          <div
            className="flex flex-col text-gray-500  items-center"
            style={{ fontWeight: "300", fontSize: "1.30rem" }}
          >
            <span>Help!</span>
            <span>Forgot Password!</span>
          </div>
        </form>
      </div>

      <div
        className="col-span-4 relative md:h-[123vh]"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderTopLeftRadius: "8.5rem",

          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <img src={image1} className="h-[100%] w-[100%] opacity-0" alt="" />
        <div className="absolute text-white top-[15%] md:top-[55%] md:left-[0%]">
          <h2 className="text-center text-2xl md:text-4xl mb-5 font-semibold">
            Welcome to Website
          </h2>
          <div className="flex justify-center">
            <p className="text-center md:w-[61%]" style={{ fontWeight: "500" }}>
              TextFree is a mobile application and web service that allows users
              to send and receive text messages, as well as make and receive
              VoIP phone calls, for free over the
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
