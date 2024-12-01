import React from "react";
import iamge1 from "../../../assets/home/Pic/milk.jpg";
import iamge2 from "../../../assets/home/Pic/46.jfif";
import iamge3 from "../../../assets/home/Pic/47.jfif";
import iamge4 from "../../../assets/home/Pic/48.jfif";
import iamge5 from "../../../assets/home/Pic/50.jfif";
import iamge6 from "../../../assets/home/Pic/51.jfif";
import iamge7 from "../../../assets/home/Pic/52.jfif";
import iamge8 from "../../../assets/home/Pic/53.jfif";
const Others3 = () => {
  return (
    <div
      className="w-[85%] mx-auto  rounded-lg p-5 mb-16 z-10"
      style={{ backgroundColor: "#031E00" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-9 gap-5">
        <div className="md:col-span-2 mb-5">
          <div className="h-[55%] relative">
            <img src={iamge1} alt="" className="w-[100%] h-[100%] rounded-lg" />
            <div className="image-overlay h-[100%] rounded-lg">
              <div className="text-white p-4 flex flex-col h-[100%] justify-end">
                <p
                  className="font-semibold "
                  style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                >
                  Milk
                </p>
                <p className="" style={{ color: "white", fontWeight: "300" }}>
                  Millions Of Happy Customers
                </p>
              </div>
            </div>
          </div>

          <div className="h-[45%] relative  mt-5">
            <img src={iamge5} alt="" className="w-[100%] h-[100%] rounded-lg" />
            <div className="image-overlay h-[100%] rounded-lg">
              <div className="text-white p-4 flex flex-col h-[100%] justify-end">
                <p
                  className="font-semibold "
                  style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                >
                  Milk
                </p>
                <p className="" style={{ color: "white", fontWeight: "300" }}>
                  Millions Of Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 md:col-span-3 ">
          <div className="h-[70%] relative">
            <img src={iamge2} alt="" className="rounded-lg w-[100%] h-[100%]" />
            <div className="image-overlay h-[100%]">
              <div className="text-white p-4 flex flex-col  h-[100%] justify-end">
                <p
                  className="font-semibold"
                  style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                >
                  Milk
                </p>
                <p className="" style={{ color: "white", fontWeight: "300" }}>
                  Millions Of Happy Customers
                </p>
              </div>
            </div>
          </div>
          {/* ----- */}
          <div className="h-[30%] relative mt-5">
            <img src={iamge6} alt="" className="rounded-lg w-[100%] h-[100%]" />
            <div className="image-overlay h-[100%]">
              <div className="text-white p-4 flex flex-col  h-[100%] justify-end">
                <p
                  className="font-semibold"
                  style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                >
                  Milk
                </p>
                <p className="" style={{ color: "white", fontWeight: "300" }}>
                  Millions Of Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 h-[100%] ">
          <div className="col-span-4 grid grid-cols-1 md:grid-cols-4 gap-5 md:h-[65%] ">
            <div className="md:col-span-2 h-[100%] relative">
              <img
                src={iamge3}
                alt=""
                className="h-[100%] w-[100%] rounded-lg"
              />
              <div className="image-overlay h-[100%]">
                <div className="text-white p-4 flex flex-col  h-[100%] justify-end">
                  <p
                    className="font-semibold"
                    style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                  >
                    Milk
                  </p>
                  <p className="" style={{ color: "white", fontWeight: "300" }}>
                    Millions Of Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 h-[100%] relative">
              <img
                src={iamge4}
                className="h-[100%] w-[100%] rounded-lg"
                alt=""
              />
              <div className="image-overlay h-[100%]">
                <div className="text-white p-4 flex flex-col  h-[100%] justify-end">
                  <p
                    className="font-semibold"
                    style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                  >
                    Milk
                  </p>
                  <p className="" style={{ color: "white", fontWeight: "300" }}>
                    Millions Of Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 md:grid-cols-6 md:h-[35%] gap-5 mt-5 pb-5 ">
            <div className="md:col-span-4 h-[100%] relative ">
              <img
                src={iamge7}
                className="h-[100%] w-[100%] rounded-lg"
                alt=""
              />
              <div className="image-overlay h-[100%]">
                <div className="text-white p-4 flex flex-col  h-[100%] justify-end">
                  <p
                    className="font-semibold"
                    style={{ color: "#E7D37F", fontSize: "1.25rem" }}
                  >
                    Milk
                  </p>
                  <p className="" style={{ color: "white", fontWeight: "300" }}>
                    Millions Of Happy Customers
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 h-[100%]  relative">
              <img
                src={iamge8}
                className="h-[100%] w-[100%] rounded-lg"
                alt=""
              />
              <div className="image-overlay h-[100%]">
                <div className="text-white p-4 flex flex-col  h-[100%] justify-end">
                  <p
                    className="font-semibold"
                    style={{ color: "#E7D37F", fontSize: "1rem" }}
                  >
                    Milk
                  </p>
                  <p
                    className=""
                    style={{
                      color: "white",
                      fontWeight: "300",
                      fontSize: "0.55rem",
                    }}
                  >
                    Millions Of Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others3;
