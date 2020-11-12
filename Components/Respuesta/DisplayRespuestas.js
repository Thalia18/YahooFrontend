import React from 'react';
import { Header, Container, List, Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  MainContainer,
  ListaItem,
} from '../Respuesta/EstilosDisplayRespuestas';
import Link from 'next/link';

const DisplayRespuestas = ({ respuestasPregunta, preguntaRespuesta }) => {
  var fech = preguntaRespuesta[0].pregfecha;
  var fecha = fech.substring(0, 10);

  var hora =
    preguntaRespuesta[0].preghora.hours +
    'h ' +
    preguntaRespuesta[0].preghora.minutes +
    'm ' +
    preguntaRespuesta[0].preghora.seconds +
    's';

  var fechahora = fecha + '\t' + hora;

  return (
    <MainContainer>
      <List>
        <List.Item key={preguntaRespuesta[0].pregid} style={ListaItem}>
          <Image
            avatar
            src={preguntaRespuesta[0].userfoto}
            style={{ width: 50, height: 50 }}
          />
          <List.Content>
            <Header style={{ marginBottom: '0.5em' }}>
              {preguntaRespuesta[0].pregtexto}
            </Header>
            <List.Description style={{ marginBottom: '1em' }}>
              {fechahora}
            </List.Description>
            <List.Description>
              {preguntaRespuesta[0].pregdetalle}
            </List.Description>
            <br />
            <Link href=''>
              <a>{preguntaRespuesta[0].usernick}</a>
            </Link>
          </List.Content>
        </List.Item>
      </List>

      <List>
        {respuestasPregunta.map((respuesta) => {
          var fechre = respuesta.respfecha;
          var fechare = fechre.substring(0, 10);

          var horare =
            respuesta.resphora.hours +
            'h ' +
            respuesta.resphora.minutes +
            'm ' +
            respuesta.resphora.seconds +
            's';

          var fechahorare = fechare + '\t' + horare;
          return (
            <List.Item key={respuesta.respid} style={ListaItem}>
              <List.Content>
                <Header
                  style={{
                    marginBottom: '0.5em',
                    fontWeight: 'normal',
                    fontSize: '15px',
                  }}>
                  <Image
                    avatar
                    src={respuesta.userfoto}
                    style={{ width: 35, height: 35 }}
                  />
                  {respuesta.usernick}
                </Header>
                <List.Description>{respuesta.resptexto}</List.Description>
                <br />
                {fechahorare}
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </MainContainer>
  );
};

export default DisplayRespuestas;
