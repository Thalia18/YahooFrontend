import React, { useState, useEffect } from "react";
import SignUp from "../../Components/SignUp/SignUp";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../../Components/Spinner/Spinner";
import ErrorPage from "next/error";

//Styles
import { PreguntaIndexContainer } from "../../Components/Layout/EstilosGlobales";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const index = () => {
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando
  const [usuario, setUsuario] = useState({
    // userid: "",
    usernombre: "",
    userapellido: "",
    userfechanacimiento: "",
    usernick: "",
    userpass: "",
    usersexo: "",
    useremail: "",
    userfoto: "",
  });
  const handleChange = (e) => {
    //maneja el cambio en el componente hijo y setea los valores a las variables de estado
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async (e) => {
    //maneja el click del button para hacer el post del formulario pregunta
    setloading(true);
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://localhost:5001/api/usuario",
        usuario
      );
      setloading(false);
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };
  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <SignUp
      evento={handleChange}
      formValues={usuario}
      buttonClick={onClickButton}
    />
  );
};

export default index;
