import React from "react";
import image1 from "../../../assets/about/Pics/11.jfif";

const AboutText3 = () => {
  return (
    <div className="inria-sans-regular mt-80 md:mt-0">
      <div className=" ms-2 grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <img src={image1} className="w-full h-full" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center py-48">
          <div className="flex flex-col w-[80%] md:w-[60%] gap-3">
            <h1 className="text-start text-4xl font-semibold">
              Free text online
            </h1>
            <p
              className="text-start text-gray-500 "
              style={{ fontSize: "1.25rem" }}
            >
              Free text online TextFree is a mobile application and web service
              that allows users to send and receive text messages, as well as
              make and receive VoIP phone calls, for free over . TextFree is a
              mobile application and web service that allows users to send and
              receive text messages, as well as make and receive VoIP phone
              calls, for free over .
            </p>

            <div className="flex flex-col items-center justify-center">
              <p className="text-center">See More...</p>
              <span className="border-b text-center border-black w-1/6"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutText3;
