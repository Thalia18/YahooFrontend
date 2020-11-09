import React, { useState, useEffect } from 'react';
import Pregunta from '../../Components/Pregunta/Pregunta';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loader from '../../Components/Spinner/Spinner';
import ErrorPage from 'next/error';
import Categorias from '../../Components/Categorias/Categorias';
import Clasificacion from '../../Components/Clasificacion/Clasificacion';
//Styles
import { PreguntaIndexContainer } from '../../Components/Layout/EstilosGlobales';

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
  const {
    query: { user, category }, //obtiene los parametros de la url
  } = useRouter();
  const [error, seterror] = useState(null); //variable de estado error que contiene una variable y una funcion que setea valores a esa variable
  const [loading, setloading] = useState(false); //variabla de estado loadind que determina si el componente esta cargando
  const [pregunta, setpregunta] = useState({
    userid: '',
    catid: '',
    pregtexto: '',
    pregdetalle: '',
  });
  const handleChange = (e) => {
    //maneja el cambio en el componente hijo y setea los valores a las variables de estado
    setpregunta({
      ...pregunta,
      userid: parseInt(user),
      catid: parseInt(category),
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async (e) => {
    //maneja el click del button para hacer el post del formulario pregunta
    setloading(true);
    try {
      e.preventDefault();
      const response = await axios.post(
        'https://localhost:5001/api/pregunta',
        pregunta
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
    <PreguntaIndexContainer>
      <Categorias listacategorias={catNombres} />
      <Pregunta
        evento={handleChange}
        formValues={pregunta}
        buttonClick={onClickButton}
      />
      <Clasificacion listaClasificacion={puntajes.data} />
    </PreguntaIndexContainer>
  );
};

export default index;
