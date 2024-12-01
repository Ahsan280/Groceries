import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
