import React from 'react';
import { Header, Container, List, Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  MainContainer,
  ListaItem,
  ListaItem1,
} from '../Respuesta/EstilosDisplayRespuestas';
import Link from 'next/link';
import { fechF } from '../../utils';

const PreguntaUsuario = ({ preguntaRespuesta }) => {
  return (
    <MainContainer>
      <List>
        {preguntaRespuesta.map((pregunta) => {
          var fechahora = fechF(pregunta.pregfecha, pregunta.preghora);

          return (
            <List.Item key={pregunta.pregid} style={ListaItem}>
              <Image
                avatar
                src={pregunta.userfoto}
                style={{ width: 50, height: 50 }}
              />
              <List.Content>
                <Header style={{ marginBottom: '0.5em' }}>
                  {pregunta.pregtexto}
                </Header>
                <List.Description style={{ marginBottom: '1em' }}>
                  {fechahora}
                </List.Description>
                <List.Description>{pregunta.pregdetalle}</List.Description>
                <br />
                <Link href=''>
                  <a>{pregunta.usernick}</a>
                </Link>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </MainContainer>
  );
};

export default PreguntaUsuario;
