import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import home from "../Assets/home.jpeg";
import {Link} from 'react-router-dom';
export default function NavBar() {
  return (
    <Navbar expand='md' className="py-3 custom-navbar" >
      <Container className="navcontainer">
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
            <Link to="/Portfolio" className="nav-item">
              <h4>Home</h4>
            </Link>
            <Link to="/about" className="nav-item">
              <h4>About</h4>
            </Link>
            <Link to="/skills" className="nav-item">
              <h4>Skills</h4>
            </Link>
            
            <Link to="/cert" className="nav-item">
              <h4>Certifications</h4>
            </Link>
            <Link to="/resume" className="nav-item">
              <h4>Resume</h4>
            </Link>
            <Link to="/contact" className="nav-item">
              <h4>Connect</h4>
            </Link></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
