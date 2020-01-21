import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
    return (
        < Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">UNIC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/hats">Hats</Nav.Link>
                    <Nav.Link href="/jackets">Jackets</Nav.Link>
                    <Nav.Link href="/sneakers">Sneakers</Nav.Link>
                    <Nav.Link href="/women">Women</Nav.Link>
                    <Nav.Link href="/men">Men</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )

}

export default Navigation;