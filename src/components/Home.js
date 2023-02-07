import React from "react";
import developer from "../images/developer.png";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
//import 'animate.css';
const Home = () => {
  return (
    <section class="contenedor sobre-nosotros">
      <div className="contenedor-sobre-nosotros">
        <img src={developer} alt="Desarrollo Web" class="imagen-about-us" />
        <div class="contenido-textos">
          <h3>
            <span>
              <BsCodeSlash className="icon-code" />
            </span>
            Desarrollo web
          </h3>
          <p>
            Nos encargamos de diseñar y desarrollar tu página web. Realizamos
            páginas landing page y de varias secciones con tecnología SPA (tipo
            de aplicación web donde todas las pantallas se muestran en un misma
            página, sin recargar el navegador, que aportan una agradable
            experiencia de usuario y rapidez al navegar por las mismas).
          </p>
          <h3>
            <span>
              <AiOutlineDesktop className="icon-code" />
            </span>
            Mantenimiento de PC
          </h3>
          <p>
            Realizamos reparación, mantenimiento, formateo e instalación de
            sistemas operativos Windows y Linux.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;
