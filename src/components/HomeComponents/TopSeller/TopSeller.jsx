import React from "react";
import "./topseller.css";
import MySlider from "./MySlider";
import Seller1 from "./Seller1";
import VegSlider from "./VegSlider";
import CocaCola from "./CocaCola";
import Softdrinks from "./Softdrinks";

import Others1 from "./Others1";
import Seller2 from "./Seller2";
import Others2 from "./Others2";
import Gradiants from "./Gradiants";
import Others3 from "./Others3";
import HomeFooter from "./HomeFooter";
import pineapple from "../../../assets/home/Pic/pineapple.png";
import Fruits from "./Fruits";
const TopSeller = () => {
  return (
    <div className="relative top-seller">
      <div className=" h-[100%] pt-44 pb-32 ">
        <MySlider />
        <Seller1 />
        <VegSlider />
        <CocaCola />
        <Softdrinks />
        <Others1 />
        <Seller2 />
        <Fruits />
        <Others2 />
        <Gradiants />
        <Others3 />
        <HomeFooter />
      </div>
      <div
        className="pineapple1 -z-10"
        style={{ transform: "rotate(40deg)", top: "10%", left: "-20%" }}
      >
        <img src={pineapple} className="w-[100%] h-[100%]" alt="" />
      </div>
      <div
        className="pineapple2 -z-10"
        style={{ transform: "rotate(30deg)", top: "50%", left: "5%" }}
      >
        <img src={pineapple} className="w-[100%] h-[100%]" alt="" />
      </div>
      <div
        className="pineapple3 -z-10"
        style={{ transform: "rotate(-30deg)", top: "86%", left: "65%" }}
      >
        <img src={pineapple} className="w-[100%] h-[100%]" alt="" />
      </div>
    </div>
  );
};

export default TopSeller;
