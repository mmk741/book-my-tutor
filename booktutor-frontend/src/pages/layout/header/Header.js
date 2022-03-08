import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

function Header() {
  return (
    <Navbar className='color-nav' variant="light"
    sticky="top" expand="sm" collapseOnSelect>
   
    <Navbar.Brand>
     BRAND NAME
    </Navbar.Brand>

    <Navbar.Toggle className="coloring" />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link href="#about-us">About Us</Nav.Link>
        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  )
}

export default Header