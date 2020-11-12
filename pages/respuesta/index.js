import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../Components/Spinner/Spinner';
import ErrorPage from 'next/error';
import Link from 'next/link';
import DisplayRespuestas from '../../Components/Respuesta/DisplayRespuestas';
//Styles
import { PreguntaIndexContainer } from '../../Components/Layout/EstilosGlobales';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getServerSideProps = async (ctx) => {
  const { data: respuestasPregunta } = await axios.get(
    `https://localhost:5001/api/customqueries/respPregunta/${ctx.query.pregid}`
  );
  const { data: preguntaRespuesta } = await axios.get(
    `https://localhost:5001/api/customqueries/pregResp/${ctx.query.pregid}`
  );
  return {
    props: {
      respuestasPregunta,
      preguntaRespuesta,
    },
  };
};

const index = ({ respuestasPregunta, preguntaRespuesta }) => {
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <>
      <PreguntaIndexContainer>
        <DisplayRespuestas
          respuestasPregunta={respuestasPregunta.data}
          preguntaRespuesta={preguntaRespuesta}
        />
      </PreguntaIndexContainer>
      <Link
        href={{
          pathname: '/pregunta',
          query: { user: '1', category: '2' },
        }}>
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
