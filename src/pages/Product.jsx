import React from "react";
import ProductHeader from "../components/ProductComponents/ProductHeader/ProductHeader";
import ProductCards from "../components/ProductComponents/ProductCards/ProductCards";
import Banner1 from "../components/ProductComponents/Banner1/Banner1";
import ProductCards2 from "../components/ProductComponents/ProductCards2/ProductCards2";
import NormalCards from "../components/ProductComponents/NormalCards/NormalCards";
import Banner2 from "../components/ProductComponents/Banner2/Banner2";
import ProductCards3 from "../components/ProductComponents/ProductCards3/ProductCards3";
import Banner3 from "../components/ProductComponents/Banner3/Banner3";
import ProductFooter from "../components/ProductComponents/ProductFooter/ProductFooter";

const Product = () => {
  return (
    <div style={{ backgroundColor: "#e4e4e4" }}>
      <ProductHeader />
      <ProductCards />
      <Banner1 />
      <ProductCards2 />
      <NormalCards />
      <Banner2 />
      <ProductCards3 />
      <Banner3 />
      <ProductFooter />
    </div>
  );
};

export default Product;
