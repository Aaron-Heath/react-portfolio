import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

export default function Header() {
  return (
    <>
    <Navbar variant="secondary-drk">
        <Container>
          <Navbar.Brand><strong>AH<span class="accent">.</span></strong></Navbar.Brand>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#1">
              Projects
            </Nav.Link>
            <Nav.Link href="#2">
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  </>
  )
}
