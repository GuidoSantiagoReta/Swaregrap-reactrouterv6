import React, { useState } from "react";
import Service from "./Service"
import CardGroup from "react-bootstrap/CardGroup";


const Images = require.context("../../images", true);



const ServicesWeb = () => {
    const [service, setService] = useState([
     {
        id:1 ,
        img:Images(`./react1.jpg`),
        title: "Desarrollo web SPA",
        text:"Todas las pantallas se muestran en un misma página, sin recargar el navegador, que aportan una agradable experiencia de usuario."
     },

     {
        id:2 ,
        img:Images(`./server2.jpg`),
        title: "Hosting, Dominio y certificado SSL",
        text:"Nos encargamos de alojar tu sitio web en un hosting con dominio personalizado con certificado SSL incluido Esto te protegerá de las violaciones de datos."
     },
     {
        id:3,
        img:Images(`./reparacion.jpg`),
        title: "Mantenimiento y Formateo de PC",
        text:"Otorgamos servicios de mantenimiento y reparación. Ya sea que necesites asistencia remota, formateo e instalación de aplicativos para diferentes usuarios."
     },
  

    ])


  return (
    

    <> 
    
    <div className=" animate__animated animate__fadeIn container-group">
    <h2 className="title-services">Servicios</h2>
    <CardGroup variant="separated" className="group-card g-3">
        {service.map((service) =>{
            return(
              <Service
              key={service.id}
              img={service.img}
              title={service.title}
              text={service.text}
              
              />
            )
        })} 
    </CardGroup>
</div>
</>
      
    
  )
}

export default ServicesWeb
