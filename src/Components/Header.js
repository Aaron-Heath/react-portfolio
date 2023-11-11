import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function Header() {
  return (
    <>
    <Navbar variant="secondary-drk" id="header">
        <Container>
          <Navbar.Brand><strong>AH<span class="accent">.</span></strong></Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#1">
              About Me
            </Nav.Link>
            <Nav.Link href="#1">
              Projects
            </Nav.Link>
            <Nav.Link href="#2">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  </>
  )
}
