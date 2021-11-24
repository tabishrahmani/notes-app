import React from 'react'
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <strong>NOTES</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link href="/">
              My Notes
              {/* FIXME: change link */}
            </Nav.Link>
            <NavDropdown title="admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">
                My Profile
                {/* FIXME: change link */}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Logout
                {/* FIXME: change link */}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
