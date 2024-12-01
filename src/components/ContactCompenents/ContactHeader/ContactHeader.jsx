import React from "react";
import ContactNav from "../ContactNav/ContactNav";
import "./contactheader.css";
import { BsSend } from "react-icons/bs";

const ContactHeader = () => {
  return (
    <div className="contact-header md:h-[160vh]">
      <ContactNav />
      <div className="text-white w-[90%] inria-sans-regular mt-20 mx-auto flex flex-col items-center">
        <h1 className="text-6xl">Contact Us</h1>
        <span
          style={{ fontWeight: "300", lineHeight: "16px" }}
          className="text-gray-300 w-[50%] md:w-[25%] text-center "
        >
          TextFree is a mobile application and web service that allows users to
          send
        </span>
        <form className="flex flex-col w-[90%] mb-10 md:w-[65%] mt-10 items-center  gap-5 inria-sans-regular">
          <div className="flex flex-col w-[100%] items-center gap-2">
            <label htmlFor="name" className="text-3xl w-[70%]">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name..."
              className="rounded-lg px-4 py-3 opacity-35 focus:opacity-100 bg-white w-[70%] h-12 text-2xl focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-[100%] items-center gap-2">
            <label htmlFor="email" className="text-3xl w-[70%]">
              E-Mail:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email..."
              className="rounded-lg px-4 py-3 opacity-35 focus:opacity-100 bg-white w-[70%] h-12 text-2xl focus:outline-none"
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
              className="rounded-lg px-4 py-3 opacity-35 focus:opacity-100 bg-white w-[70%] h-12 text-2xl focus:outline-none"
            />
          </div>
          <div className="flex flex-col w-[100%] items-center gap-2">
            <label htmlFor="message" className="text-3xl w-[70%]">
              Message:
            </label>
            <textarea
              type="text"
              rows={5}
              id="name"
              placeholder="Message..."
              className="rounded-lg px-4 py-3 opacity-35 focus:opacity-100 bg-white w-[70%]  text-2xl focus:outline-none"
            />
          </div>
          <button
            style={{ borderColor: "#E7D37F" }}
            className="bg-transparent  text-3xl 
             rounded-xl  w-[50%] px-5 py-2 border flex items-center gap-3 justify-center"
          >
            Submit <BsSend className="" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactHeader;
