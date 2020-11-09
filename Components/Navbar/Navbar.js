import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "./EstilosNavbar";
const ComponentNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">BSPAT Answers</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
          <Button variant="outline-success">Preguntar</Button>
        </Form>
        <NavDropdown title="Notificaciones" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ComponentNavbar;
