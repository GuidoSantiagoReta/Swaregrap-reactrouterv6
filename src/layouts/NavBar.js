import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Slider from "../components/slider/Slider";
import logosw from "../images/logosw.png";
const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <Navbar fixed="top" className=" animate__animated animate__fadeIn nav-bar" variant="dark" expand="md">
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
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Servicios
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contacto
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/*mostrar el contenido de la vista */}
      <section>
        <Outlet></Outlet>
      </section>
      <Slider/>
      <Footer />
    </>
  );
};

export default NavBar;
