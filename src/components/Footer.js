import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer text-center text-lg-left ">
      <div className="text-center p-3 text-light">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="text-light"
          href="https://swaregrap-reactrouterv6.vercel.app/"
        >
         SwareGrap
        </a>
      </div>
    </div>
  );
};
export default Footer;
