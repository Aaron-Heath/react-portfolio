import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function Header({setPage}) {

  // Event handler to change page
  const handleClick = function(event) {
    if(event.target.matches("span")) {
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
            <span id="home" class="header-link">
              Home
              </span>
            <span class="header-link" >
              About Me
            </span>
            <span class="header-link" >
              Projects
            </span>
            <span  class="header-link" id="contact">
              Contact
            </span>
          </Nav>
        </Container>
    </Navbar>
  </>
  )
}
