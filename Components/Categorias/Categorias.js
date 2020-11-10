import React from 'react';
import { Container, Segment, List, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { MainContainer, ItemsLista } from './EstilosCategorias';
import Link from 'next/link';

const Categorias = ({ listacategorias }) => {
  return (
    <MainContainer>
      <Segment>
        <Header style={{ padding: '1em 0em 0em 1em' }}>
          Todas las categorías
        </Header>
        <List style={{ padding: '1em' }}>
          {listacategorias.map((categoria) => (
            <ItemsLista key={categoria.catid}>
              <List.Item>
                <Link href='#'>
                  <a style={{ color: 'black' }}>{categoria.catnombre}</a>
                </Link>
              </List.Item>
            </ItemsLista>
          ))}
        </List>
      </Segment>
    </MainContainer>
  );
};

export default Categorias;
