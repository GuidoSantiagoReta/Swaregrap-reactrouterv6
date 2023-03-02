import React from 'react'
import badgate from '../../src/images/badgateway.png'
import coding from '../../src/images/codingworkshop.png'
import server from '../../src/images/servertechnician.png'


const AboutUs = () => {
  return (
    <section className="aboutus">
    <div className="container">
      <h2 className="title">Nosotros</h2>
      <div className="product-container">
        <div className="individual-product">
          <img src={coding} alt="desarrolladores web" />
          <h3>Desarrolladores web</h3>
          
        </div>

        <div className="individual-product">
          <img src={badgate} alt="técnicos en servidores" />
          <h3>Técnicos de servidores</h3>
          
        </div>

        <div className="individual-product">
          <img src={server} alt="técnicos en reparación de PC" />
          <h3>Técnicos en reparación</h3>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutUs
