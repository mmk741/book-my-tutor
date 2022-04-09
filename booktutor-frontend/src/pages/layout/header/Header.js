import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'








function Header() {
  return (
    <>

    <Navbar className='color-nav ' variant="light"
    sticky="top" expand="md" collapseOnSelect>
   
   
    <Navbar.Brand href="#home">StudyBuddy</Navbar.Brand>
    
    

    <Navbar.Toggle className="coloring" />
    <Navbar.Collapse>
      <Nav>
      {/* <Nav.Link as={NavLink} to="/">Home</Nav.Link> */}
      <Nav.Link  href="#aboutUs">About Us</Nav.Link>
        <Nav.Link  href="#findTutor">Find Tutor</Nav.Link>
        <Nav.Link href="#onlineTutor"> Become an online tutor</Nav.Link>
        <Nav.Link  href="#parentTestimonials"> Parent Testimonials</Nav.Link>
        <Nav.Link  href="#contactUs"> ContactUs</Nav.Link>
        <Nav.Link  href="#faq">FAQs</Nav.Link>

      </Nav>
    </Navbar.Collapse>

  </Navbar>
  


</>
  )
}

export default Header