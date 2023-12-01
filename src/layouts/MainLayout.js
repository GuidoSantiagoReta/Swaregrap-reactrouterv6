import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "../components/slider/Slider";
import NavBar from "../components/NavBar";




const MainLayaout = () => {


  return (
    <>

      <NavBar/>

      <section>
        <Outlet></Outlet>   
      </section>
      <Slider/>
      <Footer />
    </>
  );
};

export default MainLayaout;
