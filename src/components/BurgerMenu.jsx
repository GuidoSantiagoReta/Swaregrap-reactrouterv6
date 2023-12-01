import React, { useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css'
import logoswg from "../images/logosw.png";


const BurgerMenu = () => {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
  <>
    <Navbar collapseOnSelect fixed="top" className=" animate__animated animate__fadeIn nav-bar " variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          <img className="image-logo" src={logoswg} id="inverse-rotation" height="35" alt="SwareGrap" />
          SwareGrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar " onClick={handleShow} className="toggle" />
        <Offcanvas show={show} onHide={handleClose} placement="end" className="visible nav-bar">
          <Offcanvas.Header closeButton className="close-button">
            <Offcanvas.Title> <img className="image-logo" src={logoswg} id="inverse-rotation" height="35" alt="SwareGrap" />SwareGrap</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto text-center">
              <Nav.Link href="#home" as={Link} to="/" onClick={handleClose} className="w-100 py-3 my-2 text-light">
               Home
              </Nav.Link>
              <Nav.Link href="#about" as={Link} to="/about" onClick={handleClose}className="w-100 py-3 my-2 text-light">
               Nosotros
              </Nav.Link>
              <Nav.Link href="services" as={Link} to="/services" onClick={handleClose}className="w-100 py-3 my-2 text-light">
               Servicios
              </Nav.Link>
              <Nav.Link href="contact" as={Link} to="/contact" onClick={handleClose}className="w-100 py-3 my-2 text-light">
               Contacto
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  </>
 );
};

export default BurgerMenu;