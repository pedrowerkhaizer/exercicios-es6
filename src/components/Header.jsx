import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'

// import { Container } from './styles';

export default function Header() {
  return (
    <div>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Exercícios ES6</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link>Aulas</Nav.Link>
      <NavDropdown title="Exercícios" id="basic-nav-dropdown">
        <NavDropdown.Item href="/m1">M1 - Módulo 1</NavDropdown.Item>
        <NavDropdown.Item href="/m2">M2 - Módulo 2</NavDropdown.Item>
        <NavDropdown.Item href="/m3">M3 - Módulo 3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  );
}
