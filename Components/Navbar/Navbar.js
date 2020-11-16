import React, { useState } from "react";
import { Navbar, FormControl, Nav, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Btn, NavBar } from "./EstilosNavbar";
import Link from "next/link";
import { Formik, Form, Field } from "formik";

function validateUsername(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

const ComponentNavbar = () => {
  const [busca, setBusca] = useState(String);
  const handleChange = (e) => {
    //maneja el cambio en el componente hijo y setea los valores a las variables de estado
    setBusca({});
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
            <Formik
              initialValues={{
                username: "",
                email: "",
              }}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {({ errors, touched, isValidating }) => (
                <Form inline>
                  <FormGroup>
                    <Field
                      type="text"
                      placeholder="Buscar"
                      className="form-control"
                      name="username"
                      style={{ width: 350 }}
                      onChange={(e) => setBusca(e.target.value)}
                      validate={validateUsername}
                    />
                    {errors.username && touched.username && (
                      <div>{errors.username}</div>
                    )}
                  </FormGroup>
                  <Link
                    href={{
                      pathname: "/buscar",
                      query: { busqueda: busca },
                    }}
                  >
                    <Btn variant="outline-success" type="submit">
                      Buscar
                    </Btn>
                  </Link>
                </Form>
              )}
            </Formik>
          </Nav>
          <Nav>
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
