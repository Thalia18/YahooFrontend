import React from 'react';
import { Header, Container, List, Image, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  MainContainer,
  ListaItem,
} from '../DisplayPreguntas/EstilosDisplayPreguntas';
import Link from 'next/link';

const DisplayPreguntas = ({ preguntasAleatorias }) => {
  return (
    <MainContainer>
      <List>
        {preguntasAleatorias.map((pregunta) => (
          <List.Item key={pregunta.pregid} style={ListaItem}>
            <List.Icon>
              <i className='thumbs up icon'></i>
            </List.Icon>
            <List.Content>
              <Header style={{ marginBottom: '0.5em' }}>
                {pregunta.pregtexto}
              </Header>
              <List.Description>{pregunta.pregdetalle}</List.Description>
              <br />
              <Link href='#'>
                <a>{pregunta.catnombre}</a>
              </Link>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </MainContainer>
  );
};

export default DisplayPreguntas;
