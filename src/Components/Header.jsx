import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function Header({setPage}) {

  // Event handler to change page
  const handleClick = function(event) {
    if(event.target.matches("a")) {
      console.log(event.target);
      setPage(event.target.id);
    }

  }

  return (
    <>
    <Navbar variant="secondary-drk" id="header" onClick={handleClick}>
        <Container>
          <Navbar.Brand><strong>AH<span class="accent">.</span></strong></Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets" id="home">Home</Nav.Link>
            <Nav.Link href="#1">
              About Me
            </Nav.Link>
            <Nav.Link href="#1">
              Projects
            </Nav.Link>
            <Nav.Link href="#2" id="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  </>
  )
}
