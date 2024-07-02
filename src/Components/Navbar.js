import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import home from "../Assets/home.jpeg";

export default function NavBar() {
  return (
    <Navbar expand='md' className="py-3 custom-navbar" >
      <Container>
      <NavbarBrand>
          <img
            src={home}
            alt="navbrand" className="nav-logo"
            style={{ height: "80px", width: "110px" }}
          />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-3">
            <div style={{display:'flex',alignItems:'center'}}>
            <Nav.Link href="/Portfolio" className="nav-item">
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link href="/about" className="nav-item">
              <h5>About</h5>
            </Nav.Link>
            <Nav.Link href="/skills" className="nav-item">
              <h5>Skills</h5>
            </Nav.Link>
            
            <Nav.Link href="/cert" className="nav-item">
              <h5>Certifications</h5>
            </Nav.Link>
            <Nav.Link href="/resume" className="nav-item">
              <h5>Resume</h5>
            </Nav.Link>
            <Nav.Link href="/contact" className="nav-item">
              <h5>Connect</h5>
            </Nav.Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
