import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
  Collapse,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar, Btn, Collap, NbLink, NvForm } from "./EstilosNavbar";
import Link from "next/link";
import { useRouter } from "next/router";

const ComponentNavbar = () => {
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };

  return (
    <NavBar>
      <Navbar expand="lg">
        <Navbar.Brand href="#home">BSPAT Answers</Navbar.Brand>
        <NbLink href="#home">Home</NbLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Collap>
          <Navbar.Collapse id="basic-navbar-nav">
            <NvForm>
              <Form inline onSubmit>
                <FormControl
                  type="text"
                  placeholder="Buscar"
                  className="fControl"
                />
                {/* <Link> */}
                <Btn variant="outline-success">Buscar</Btn>
                {/* </Link> */}
              </Form>
            </NvForm>
            {/* <Link> */}
            <Btn variant="outline-success">Admin</Btn>
            {/* </Link> */}

            {/* <Link> */}
            <Btn variant="outline-success">Sign in</Btn>
            {/* </Link> */}
          </Navbar.Collapse>
        </Collap>
      </Navbar>
    </NavBar>
  );
};

export default Navbar;
