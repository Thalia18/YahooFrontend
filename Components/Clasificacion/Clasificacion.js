import React from 'react';
import { Container, List, Image, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  MainContainer,
  ListItem,
  ContainerDescription,
} from './EstilosClasificacion';

const Clasificacion = ({ listaClasificacion }) => {
  return (
    <MainContainer>
      <Header>Tabla de clasificaciones</Header>
      <ContainerDescription>
        <p style={{ marginRight: 'auto', marginRight: '3em' }}>
          En todas las categorías
        </p>
        <p>Puntos</p>
      </ContainerDescription>
      <List ordered>
        {listaClasificacion.map((usuario) => (
          <List.Item key={usuario.id} style={ListItem}>
            <List.Content style={{ display: 'flex' }}>
              <Image avatar src={usuario.foto} />
              <List.Header style={{ marginRight: 'auto' }}>
                {usuario.nick}
              </List.Header>

              <List.Description>{usuario.puntaje}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </MainContainer>
  );
};

export default Clasificacion;
