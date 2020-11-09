import React from 'react';
import { Container, List, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { MainContainer } from './EstilosClasificacion';

const Clasificacion = ({ listaClasificacion }) => {
  return (
    <MainContainer>
      <List ordered>
        {listaClasificacion.map((usuario) => (
          <List.Item key={usuario.userid}>
            <Image avatar src={usuario.userfoto} />
            <List.Content>
              <List.Header>
                {usuario.usernombre} {usuario.userapellido}
              </List.Header>
              {usuario.usernick}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </MainContainer>
  );
};

export default Clasificacion;
