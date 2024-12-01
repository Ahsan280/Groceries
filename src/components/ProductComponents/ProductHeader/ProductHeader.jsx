import React from "react";
import "./productheader.css";
import AboutNav from "../../AboutComponents/AboutHeader/AboutNav/AboutNav";
import ProductNav from "../ProductNav/ProductNav";
import ProductHero from "./ProductHero";
const ProductHeader = () => {
  return (
    <div className="product-header">
      <ProductNav />
      <ProductHero />
    </div>
  );
};

export default ProductHeader;
