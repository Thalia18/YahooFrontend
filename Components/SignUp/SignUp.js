import React, { Component } from "react";
import { Form, Header, Icon } from "semantic-ui-react";
import { MainContainer } from "./EstilosSignUp";
import "semantic-ui-css/semantic.min.css";
const options = [
  { key: "Masculino", text: "Masculino", value: "Masculino" },
  { key: "Femenino", text: "Femenino", value: "Femenino" },
  { key: "Otro", text: "Otro", value: "Otro" },
];

const SignUp = ({ evento, formValues, buttonClick }) => {
  const handleOnChange = (e, data) => {
    formValues.usersexo = data.value;
  };
  return (
    <MainContainer>
      <Header as="h2" textAlign="center">
        <Icon circular inverted name="users" style={{ fontSize: "0.7em" }} />
        Sign-up
      </Header>
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Nombre"
            placeholder="Nombre"
            onChange={evento}
            name="usernombre"
            value={formValues.usernombre}
          />
          <Form.Input
            fluid
            label="Apellido"
            placeholder="Apellido"
            onChange={evento}
            name="userapellido"
            value={formValues.userapellido}
          />
          <Form.Input
            fluid
            label="Nickname"
            placeholder="Nickname"
            onChange={evento}
            name="usernick"
            value={formValues.usernick}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Fecha de nacimiento"
            placeholder="Fecha de nacimiento"
            onChange={evento}
            type="date"
            name="userfechanacimiento"
            value={formValues.userfechanacimiento}
          />

          <Form.Select
            fluid
            label="Género"
            options={options}
            placeholder="Género"
            onChange={handleOnChange}
            name="usersexo"
            selection
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Email"
            placeholder="Email"
            onChange={evento}
            type="email"
            name="useremail"
            value={formValues.useremail}
          />
          <Form.Input
            fluid
            label="Password"
            placeholder="Password"
            type="password"
            onChange={evento}
            name="userpass"
            value={formValues.userpass}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Foto"
            placeholder="Foto"
            onChange={evento}
            name="userfoto"
            value={formValues.userfoto}
          />
        </Form.Group>
        <Form.Checkbox label="I agree to the Terms and Conditions" />
        <Form.Button
          fluid
          size="large"
          style={{ backgroundColor: "#283049", color: "#FFF" }}
          onClick={buttonClick}
        >
          Registrarse
        </Form.Button>
      </Form>
    </MainContainer>
  );
};

export default SignUp;
