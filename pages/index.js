import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Components/Spinner/Spinner';
import ErrorPage from 'next/error';
import Categorias from '../Components/Categorias/Categorias';
import Clasificacion from '../Components/Clasificacion/Clasificacion';
import Link from 'next/link';
//Styles
import { PreguntaIndexContainer } from '../Components/Layout/EstilosGlobales';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export const getStaticProps = async () => {
  const { data: categorias } = await axios.get(
    `https://localhost:5001/api/categoria/`
  );
  const catNombres = categorias.map(({ catnombre }) => catnombre);

  const { data: puntajes } = await axios.get(
    'https://localhost:5001/api/customqueries/ordenarusuarios'
  );

  return {
    props: {
      catNombres,
      puntajes,
    },
  };
};

const index = ({ catNombres, puntajes }) => {
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando

  if (loading) return <Loader />;
  if (error) return <ErrorPage />;
  return (
    <PreguntaIndexContainer>
      <Categorias listacategorias={catNombres} />

      <Clasificacion listaClasificacion={puntajes.data} />
      <Link
        href={{
          pathname: '/pregunta',
          query: { user: '1', category: '2' },
        }}>
        <a>Segunda Pagina</a>
      </Link>
    </PreguntaIndexContainer>
  );
};

export default index;
