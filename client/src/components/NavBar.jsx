import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from "../assets/img/logo.png"

const NavBar = () => {
  return (

    <Navbar bg="light" expand="lg" className='naver px-2'>
      <Navbar.Brand href="#home" className="mr-auto">
      <img
          src={logo}
          alt="Your Logo"
          width="50"
          height="30"
          className="d-inline-block align-top"
        /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="ml-5">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/privacy">Privacy Policy</Nav.Link>
          <Nav.Link href="/frequent">FAQ</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    
  );
};

export default NavBar;
