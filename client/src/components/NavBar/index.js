import React from "react";
import { Nav, Navbar } from 'react-bootstrap';

function NavBar(props) {
  return (
    <Navbar sticky="top" expand="lg" bg="light" variant="info">
      <h2>Google Books</h2>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>

        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
