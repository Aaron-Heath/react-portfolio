import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function Header({setPage}) {

  // Event handler to change page
  const handleClick = function(event) {
    if(event.target.matches("span")) {
      console.log(event.target);
      setPage(event.target.id);
      if(event.target.id === 'home') {
        window.location = '/';
        return;
      }
      window.location=`/`+event.target.id;
    }

  }

  return (
    <>
    <Navbar sticky="top" variant="secondary-drk" id="header" onClick={handleClick}>
        <Container>
          <Navbar.Brand><strong>AH<span className="accent">.</span></strong></Navbar.Brand>
          <Nav>
            <span id="home" className="header-link">Home</span>
            <span className="header-link" id="about">About Me</span>
            <span className="header-link" id="projects" >Projects</span>
            <span  className="header-link" id="contact">Contact</span>
          </Nav>
        </Container>
    </Navbar>
  </>
  )
}
