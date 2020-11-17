import Link from "next/link";
import React from "react";
import {
  Form,
  Grid,
  Header,
  Icon,
  Modal,
  Button,
  Tab,
} from "semantic-ui-react";
import { MainContainer, MainContainerS } from "./EstilosLogin";
const options = [
  { key: "Masculino", text: "Masculino", value: "Masculino" },
  { key: "Femenino", text: "Femenino", value: "Femenino" },
  { key: "Otro", text: "Otro", value: "Otro" },
];
function LoginForm({
  eventoLogin,
  formValuesLogin,
  buttonClickLogin,
  eventoSignUp,
  formValuesSignUp,
  buttonClickSignUp,
  buttonClickLogout,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOnChange = (e, data) => {
    formValuesSignUp.usersexo = data.value;
  };
  function validateNick(value) {
    let error;
    if (!value) {
      error = "Campo requerido";
    } else if (!/^[A-Z%+][A-Z0-9%+]{0,254}$/i.test(value)) {
      error = "Nickname no puede contener -_. o empezar con números";
    }
    return error;
  }
  function validateRequired(value) {
    let error;
    if (!value) error = "Campo requerido";
    return error;
  }
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Campo requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Email inválido";
    }
    return error;
  }
  function validateFoto(value) {
    let error;
    if (!value) {
      error = "Campo requerido";
    } else if (
      !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(
        value
      )
    ) {
      error = "Email inválido";
    }
    return error;
  }
  const panes = [
    {
      menuItem: { key: "Login", icon: "users", content: "Login" },
      render: () => (
        <Tab.Pane style={{ backgroundColor: " #dae5ed" }}>
          <MainContainer style={{ margin: "auto" }}>
            <Grid>
              <Grid.Column style={{ maxWidth: 600 }}>
                <Header as="h2" textAlign="center">
                  <Icon
                    circular
                    inverted
                    name="users"
                    style={{ fontSize: "0.7em" }}
                  />
                  Log-in
                </Header>
                <Form size="large">
                  {/* <Segment stacked> */}
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Nickname"
                      placeholder="Nickname"
                      onChange={eventoLogin}
                      type="nick"
                      name="usernick"
                      value={formValuesLogin.usernick}
                      error={validateNick(formValuesLogin.usernick)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Contraseña"
                      placeholder="Contraseña"
                      type="password"
                      onChange={eventoLogin}
                      name="userpass"
                      value={formValuesLogin.userpass}
                      error={validateRequired(formValuesLogin.userpass)}
                    />
                  </Form.Group>
                  <Form.Button
                    fluid
                    size="large"
                    style={{ backgroundColor: "#283049", color: "#FFF" }}
                    onClick={buttonClickLogin}
                  >
                    Login
                  </Form.Button>
                  {/* </Segment> */}
                </Form>
              </Grid.Column>
            </Grid>
          </MainContainer>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: "SignUp", icon: "users", content: "SignUp" },
      render: () => (
        <Tab.Pane style={{ backgroundColor: " #dae5ed" }}>
          <MainContainerS style={{ margin: "auto" }}>
            <Grid>
              <Grid.Column style={{ maxWidth: 700 }}>
                <Header as="h2" textAlign="center">
                  <Icon
                    circular
                    inverted
                    name="users"
                    style={{ fontSize: "0.7em" }}
                  />
                  Sign-up
                </Header>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Nombre"
                      placeholder="Nombre"
                      onChange={eventoSignUp}
                      name="usernombre"
                      value={formValuesSignUp.usernombre}
                      error={validateRequired(formValuesSignUp.usernombre)}
                    />
                    <Form.Input
                      fluid
                      label="Apellido"
                      placeholder="Apellido"
                      onChange={eventoSignUp}
                      name="userapellido"
                      value={formValuesSignUp.userapellido}
                      error={validateRequired(formValuesSignUp.userapellido)}
                    />
                    <Form.Input
                      fluid
                      label="Nickname"
                      placeholder="Nickname"
                      onChange={eventoSignUp}
                      name="usernick"
                      value={formValuesSignUp.usernick}
                      error={validateNick(formValuesSignUp.usernick)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Fecha de nacimiento"
                      placeholder="Fecha de nacimiento"
                      onChange={eventoSignUp}
                      type="date"
                      name="userfechanacimiento"
                      value={formValuesSignUp.userfechanacimiento}
                      required
                    />

                    <Form.Select
                      fluid
                      label="Género"
                      options={options}
                      placeholder="Género"
                      onChange={handleOnChange}
                      name="usersexo"
                      selection
                      required
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Email"
                      placeholder="Email"
                      onChange={eventoSignUp}
                      type="email"
                      name="useremail"
                      value={formValuesSignUp.useremail}
                      error={validateEmail(formValuesSignUp.useremail)}
                    />
                    <Form.Input
                      fluid
                      label="Contraseña"
                      placeholder="Contraseña"
                      type="password"
                      onChange={eventoSignUp}
                      name="userpass"
                      value={formValuesSignUp.userpass}
                      error={validateRequired(formValuesSignUp.userpass)}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      label="Foto"
                      placeholder="Foto"
                      onChange={eventoSignUp}
                      name="userfoto"
                      value={formValuesSignUp.userfoto}
                      error={validateFoto(formValuesSignUp.userfoto)}
                    />
                  </Form.Group>
                  <Form.Button
                    fluid
                    size="large"
                    style={{ backgroundColor: "#283049", color: "#FFF" }}
                    onClick={buttonClickSignUp}
                  >
                    Registrarse
                  </Form.Button>
                </Form>
              </Grid.Column>
            </Grid>
          </MainContainerS>
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div>
      <Button onClick={buttonClickLogout}>Logout</Button>
      <Modal
        closeIcon
        open={open}
        basic
        dimmer="blurring"
        size="small"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={<Button>Login</Button>}
      >
        <Tab
          menu={{
            style: { backgroundColor: "#283049" },
            inverted: true,
            attached: false,
            tabular: false,
          }}
          panes={panes}
        />
      </Modal>
    </div>
  );
}

export default LoginForm;
