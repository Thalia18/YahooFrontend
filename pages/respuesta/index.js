import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../Components/Spinner/Spinner';
import ErrorPage from 'next/error';
import DisplayRespuestas from '../../Components/Respuesta/DisplayRespuestas';
import PreguntaUsuario from '../../Components/Respuesta/PreguntaUsuario';
import RespFav from '../../Components/Respuesta/RespFav';
//Styles

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getServerSideProps = async (ctx) => {
  const { data: respuestasPregunta } = await axios.get(
    `https://localhost:5001/api/customqueries/respPregunta/${ctx.query.pregid}`
  );
  const { data: preguntaRespuesta } = await axios.get(
    `https://localhost:5001/api/customqueries/pregResp/${ctx.query.pregid}`
  );
  const { data: respFav } = await axios.get(
    `https://localhost:5001/api/customqueries/respFav/${ctx.query.pregid}`
  );

  return {
    props: {
      respuestasPregunta,
      preguntaRespuesta,
      respFav,
    },
  };
};

const index = ({ respuestasPregunta, preguntaRespuesta, respFav }) => {
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <div>
      <PreguntaUsuario preguntaRespuesta={preguntaRespuesta} />
      <RespFav respFav={respFav} />
      <DisplayRespuestas respuestasPregunta={respuestasPregunta.data} />
    </div>
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
