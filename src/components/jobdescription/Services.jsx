import React from "react";
import './Services.css'
import reparacion from "../../images/reparacion.jpg"
import react1 from "../../images/react1.jpg"
import server2 from "../../images/server2.jpg"
const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="title">Servicios</h2>
        <div className="services-container">
          <div className="individual-product">
            <img src={react1} alt="Desarrollo web" />
            <h3>Desarrollo web y programacion</h3>
            <p>
           
              Todas las pantallas se muestran en un misma página, sin recargar
              el navegador, que aportan una agradable experiencia de usuario
            </p>
          </div>

          <div className="individual-product">
            <img src={server2} alt="Hosting" />
            <h3>Hosting, Dominio y certificado SSL</h3>
            <p>
              Nos encargamos de alojar tu sitio web en un hosting con dominio
              personalizado con certificado SSL incluido Esto te protegerá de
              las violaciones de datos.
            </p>
          </div>

          <div className="individual-product">
            <img src={reparacion} alt="Mantenimiento" />
            <h3>Mantenimiento y Formateo de PC</h3>
            <p>
              Otorgamos servicios de mantenimiento y reparación. Ya sea que
              necesites asistencia remota, formateo e instalación de aplicativos.
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
