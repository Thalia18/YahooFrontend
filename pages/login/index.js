import React, { useState, useEffect } from "react";
import Login from "../../Components/Login/Login";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../Components/Spinner/Spinner";
import ErrorPage from "next/error";
import Link from "next/link";
import Cookies from "universal-cookie";
//Styles
import { PreguntaIndexContainer } from "../../Components/Layout/EstilosGlobales";
import { isEmptyArray } from "formik";
import { render } from "react-dom";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const index = () => {
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando
  const [usuarioLogin, setUsuarioLogin] = useState({
    // userid: "",
    userpass: "",
    usernick: "",
  });
  const cookies = new Cookies();
  const [usuarioSignUp, setUsuarioSignUp] = useState({
    // userid: "",
    usernombre: "",
    userapellido: "",
    userfechanacimiento: "",
    usernick: "",
    userpass: "",
    usersexo: "",
    useremail: "",
    userfoto: "",
    userpuntaje: 20,
  });
  const handleChangeLogin = (e) => {
    //maneja el cambio en el componente hijo y setea los valores a las variables de estado
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSignUp = (e) => {
    //maneja el cambio en el componente hijo y setea los valores a las variables de estado
    setUsuarioSignUp({
      ...usuarioSignUp,
      [e.target.name]: e.target.value,
    });
  };
  const onClickButtonLogin = async (e) => {
    //maneja el click del button para hacer el post del formulario pregunta
    setloading(true);
    try {
      e.preventDefault();
      const response = await axios.get(
        `https://localhost:5001/api/customqueries/getUsuario/${usuarioLogin.usernick}/${usuarioLogin.userpass}`
      );
      if (Object.values(response.data) != 0) {
        cookies.set("cookie1", response.data, { path: "/" });
        window.location = "http://localhost:3000";
      } else {
        cookies.remove("cookie1");
      }
      console.log(cookies.get("cookie1"));
      setloading(false);
    } catch (error) {
      console.log(error);
      seterror(error);
      setloading(false);
    }
  };

  const onClickButtonSignUp = async (e) => {
    //maneja el click del button para hacer el post del formulario pregunta
    setloading(true);
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://localhost:5001/api/usuario",
        usuarioSignUp
      );
      setloading(false);
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  const onClickButtonLogout = async (e) => {
    cookies.remove("cookie1");
    window.location = "http://localhost:3000";
  };
  console.log(cookies.get("cookie1"), "cookie 1");

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <Login
      eventoLogin={handleChangeLogin}
      formValuesLogin={usuarioLogin}
      buttonClickLogin={onClickButtonLogin}
      eventoSignUp={handleChangeSignUp}
      formValuesSignUp={usuarioSignUp}
      buttonClickSignUp={onClickButtonSignUp}
      buttonClickLogout={onClickButtonLogout}
    />
  );
};

export default index;
