import React from "react";
import AboutHeader from "../components/AboutComponents/AboutHeader/AboutHeader";
import AboutText from "../components/AboutComponents/AboutText/AboutText";
import AboutText2 from "../components/AboutComponents/AboutText2/AboutText2";
import AboutService from "../components/AboutComponents/AboutService/AboutService";
import AboutText3 from "../components/AboutComponents/AboutText3/AboutText3";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <AboutHeader />
      <AboutText />
      <AboutText2 />
      <AboutService />
      <AboutText3 />
      <Footer />
    </>
  );
};

export default About;
