import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import { NavLink } from 'react-router-dom';






function Header() {
  return (
    <>

    <Navbar className='color-nav ' variant="light"
    sticky="top" expand="sm" collapseOnSelect>
   
   
    <Navbar.Brand as={NavLink} to="/">Apna Tutor</Navbar.Brand>
    
    

    <Navbar.Toggle className="coloring" />
    <Navbar.Collapse>
      <Nav>
      <Nav.Link as={NavLink} to="/">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/tutor">Tutor</Nav.Link>
        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
  


</>
  )
}

export default Header