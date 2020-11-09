import React from 'react';
import { Container, Segment, List, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { MainContainer } from './EstilosCategorias';

const Categorias = ({ listacategorias }) => {
  return (
    <MainContainer>
      <Segment>
        <Header>Categorias</Header>
        <List items={listacategorias} />
      </Segment>
    </MainContainer>
  );
};

export default Categorias;
