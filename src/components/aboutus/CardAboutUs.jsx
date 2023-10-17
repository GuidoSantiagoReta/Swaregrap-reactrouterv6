import React from "react";
import "../../App.css";

const CardAboutUs = (props) => {
  return (
    <>
    
        <div className="individual-product">
          <img  className="title-about"src={props.img} alt="desarrolladores web" />
          <h3 className="description">{props.description}</h3>
        </div>
    
    </>
  );
};

export default CardAboutUs;
