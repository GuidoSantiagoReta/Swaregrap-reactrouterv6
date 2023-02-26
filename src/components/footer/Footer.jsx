import React from "react";
import './Footer.css'

const Footer = () => {
  return (
    <div className="bg-footer text-center text-lg-left ">
      <div className="text-center p-3 text-light">
        &copy; {new Date().getFullYear()} {"Swaregrap"}
        <a
          
          className="text-light"
          href="https://reactportfolio-guidosantiagoreta.vercel.app/"
        >
        </a>
      </div>
    </div>
  );
};
export default Footer;
