import React from "react";

const Footer = () => {
  console.log("Rendering Home");
  return (
    <div className="bg-footer text-center text-lg-left ">
      <div className="text-center p-3 text-light-foo">
        &copy; {new Date().getFullYear()} {"SwareGrap."}
        
      </div>
    </div>
  );
};
export default Footer;
