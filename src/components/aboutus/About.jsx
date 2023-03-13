import React, { useState } from "react";
import CardAboutUs from "./CardAboutUs";
import "../../App.css";

const Images = require.context("../../images", true);

const About = () => {
  const [about, setAboutCard] = useState([
    {
      id: 4,
      img: Images(`./codingworkshop.png`),
      description: "Desarrolladores web",
    },
    {
      id: 5,
      img: Images(`./badgateway.png`),
      description: "Técnicos de Servidores",
    },
    {
      id: 6,
      img: Images(`./servertechnician.png`),
      description: "Técnicos en reparación",
    },
  ]);

  return (
    <>
      <section className=" animate__animated animate__fadeIn aboutus">
        <div className="container">
          <h2 className="title">Nosotros</h2>
          <div className="product-container">
            {about.map((about) => {
              return (
                <CardAboutUs
                  key={about.id}
                  img={about.img}
                  description={about.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
