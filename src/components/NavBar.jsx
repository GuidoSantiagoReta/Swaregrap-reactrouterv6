import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logosw from "../images/logosw.png";
import '../App.css'




const NavBar = () => {
const [collapsed, setCollapsed] = useState(true);

  return (
    <>
    <Navbar collapseOnSelect fixed="top" className=" animate__animated animate__fadeIn nav-bar navbar-height" variant="dark" expand="md" height={100}>
    <Container fluid>
      <Navbar.Brand as={Link} to="/home">
        <img className="image-logo" src={logosw} id="inverse-rotation" height="35" alt="SwareGrap" />
        SwareGrap
      </Navbar.Brand>
      <Navbar.Toggle
        className="toggle"
        aria-controls="basic-navbar-nav"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height="2rem"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            height="2rem"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link href="#home" as={Link} to="/">
            Home
          </Nav.Link>
      
          <Nav.Link href="#about" as={Link} to="/about">
            Nosotros
          </Nav.Link>
          
          <Nav.Link href="services" as={Link} to="/services">
            Servicios
          </Nav.Link>

          <Nav.Link href="contact" as={Link} to="/contact">
            Contacto
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
      
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar;