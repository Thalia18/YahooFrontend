import React from "react";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Btn, NavBar } from "./EstilosNavbar";
import Link from "next/link";

const ComponentNavbar = () => {
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };

  return (
    <NavBar>
      <Navbar expand="lg">
        <Nav>
          <Navbar.Brand href="#home">BSPAT Answers</Navbar.Brand>
          <Nav.Link href="#home">Home</Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Nav>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-fill justify-content-center ">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Buscar"
                style={{ width: 350 }}
              />
              <Link href="../../pages/buscar/index">
                <Btn className="text-white" variant="outline-success">
                  Buscar
                </Btn>
              </Link>
            </Form>
          </Nav>
          <Nav className="text-white">
            {/* <Link> */}
            <Btn variant="outline-success">Admin</Btn>
            {/* </Link> */}

            {/* <Link> */}
            <Btn variant="outline-success">Sign in</Btn>
            {/* </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBar>
  );
};

export default ComponentNavbar;
