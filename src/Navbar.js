import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"; // Import the Nav component
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#work-experience">Work Experience</Nav.Link>
          <Nav.Link href="#contact-me">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
