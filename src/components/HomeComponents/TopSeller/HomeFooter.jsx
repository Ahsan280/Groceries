import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <div
      className="inria-sans-regular w-[85%] mx-auto z-10"
      style={{ backgroundColor: "#031E00" }}
    >
      <div className="bg-transparent  ms-auto pt-10 pb-32">
        <div className="bg-transparent text-white  px-10 md:px-32 ">
          <div className="Your-logo flex flex-col gap-2">
            <h1 className="text-5xl tracking-wide">YOUR</h1>
            <h1 className="text-5xl tracking-wide">LOGO</h1>
          </div>
          <div
            className="flex flex-col md:flex-row mt-10 justify-between"
            style={{ fontSize: "1.25rem" }}
          >
            <div className="flex flex-col gap-5">
              <h1>PRODUCT</h1>
              <div className="flex flex-col inria-sans-light leading-6">
                <p>Product Overview</p>
                <p>Omni Channel</p>
                <p>Sourcing</p>
                <p>Compliance & Contracting</p>
                <p>Payments</p>
                <p>Data & ReportingPricing</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h1>WHY WORKSOME</h1>
              <div className="flex flex-col inria-sans-light leading-6">
                <p>Product Overview</p>
                <p>Omni Channel</p>
                <p>Sourcing</p>
                <p>Compliance & Contracting</p>
                <p>Payments</p>
                <p>Data & ReportingPricing</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1>Resources</h1>
              <div className="flex flex-col inria-sans-light leading-6">
                <p>Product Overview</p>
                <p>Omni Channel</p>
                <p>Sourcing</p>
                <p>Compliance & Contracting</p>
                <p>Payments</p>
                <p>Data & ReportingPricing</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-20 mr-24">
          <div className="flex gap-3 text-gray-500">
            <div className="p-1">
              <FaPhoneAlt className="text-3xl " />
            </div>
            <div className="p-1">
              <SiGmail className="text-3xl " />
            </div>
            <div className="p-1">
              <FaFacebookF className="text-3xl " />
            </div>
            <div className="border border-gray-500 rounded-md p-1">
              <FaLinkedinIn className="text-3xl" />
            </div>
            <div className="border border-gray-500 rounded-md p-1">
              <FaTwitter className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
