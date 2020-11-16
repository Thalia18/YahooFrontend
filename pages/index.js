import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Components/Spinner/Spinner";
import ErrorPage from "next/error";
import Link from "next/link";
import DisplayPreguntas from "../Components/DisplayPreguntas/DisplayPreguntas";
import Cookies from "universal-cookie";
//Styles
import { PreguntaIndexContainer } from "../Components/Layout/EstilosGlobales";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const cookies = new Cookies();
export const getServerSideProps = async () => {
  const { data: preguntasAleatorias } = await axios.get(
    "https://localhost:5001/api/customqueries/getpreguntasaleatorias"
  );

  return {
    props: {
      preguntasAleatorias,
    },
  };
};

const index = ({ preguntasAleatorias }) => {
  console.log(cookies.get("cookie1"), "cookies 2");
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <>
      <PreguntaIndexContainer>
        <DisplayPreguntas preguntasAleatorias={preguntasAleatorias.data} />
      </PreguntaIndexContainer>
      <Link
        href={{
          pathname: "/pregunta",
          query: { user: "1", category: "2" },
        }}
      >
        <a>Segunda Pagina</a>
      </Link>
    </>
  );
};

export default index;
/*<Link
        href={{
          pathname: '/pregunta',
          query: { user: '1', category: '2' },
        }}>
        <a>Segunda Pagina</a>
      </Link>*/
