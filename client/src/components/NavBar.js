import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg='light'
      expand='lg'
      style={{ position: "sticky", top: 0, zIndex: 1 }}
    >
      <Container fluid>
        <Navbar.Brand href='#'>Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-secondary'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
