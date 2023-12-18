import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = () => {
  return (

    <Navbar bg="light" expand="lg" className='naver'>
      <Navbar.Brand href="#home" className="mr-auto">Paysita</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-5">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">Products</Nav.Link>
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#about">Blog</Nav.Link>
          <Nav.Link href="#services">FAQ</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    
  );
};

export default NavBar;
