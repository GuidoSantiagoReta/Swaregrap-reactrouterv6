import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "../components/slider/Slider";
import NavBar from "../components/NavBar";
import BurgerMenu from "../components/BurgerMenu";

const MainLayout = () => {
 const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 768px)").matches);

 useEffect(() => {
   const handleResize = () => {
     setIsSmallScreen(window.matchMedia("(max-width: 768px)").matches);
   };

   window.addEventListener("resize", handleResize);

   return () => {
     window.removeEventListener("resize", handleResize);
   };
 }, []);

 return (
   <>
     {isSmallScreen ? <BurgerMenu /> : <NavBar className="hide-on-small" />}
     <section>
       <Outlet />
     </section>
     <Slider />
     <Footer />
   </>
 );
};

export default MainLayout;