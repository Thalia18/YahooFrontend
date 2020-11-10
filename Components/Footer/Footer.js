import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { prueba, icono } from './EstilosFooter';
import 'bootstrap-css-only/css/bootstrap.min.css';
//import "mdbreact/dist/css/mdb.css";

const FooterPage = () => {
  return (
    <MDBFooter className='font-small pt-4 mt-4' style={prueba}>
      <MDBContainer fluid className='text-center text-md-left' style={prueba}>
        <MDBRow style={prueba}>
          <MDBCol md='4'>
            <h5 className='title'>Recursos</h5>
            <ul>
              <li className='list-unstyled'>
                <i className='code icon'></i>
                <a href=''>FrontEnd</a>
              </li>
              <li className='list-unstyled'>
                <i className='code icon'></i>
                <a href=''>BackEnd</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='4'>
            <h5 className='title'>Información general</h5>
            <ul>
              <li className='list-unstyled'>
                <a href='#!'>Acerca de nosotros</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Términos de uso</a>
              </li>
              <li className='list-unstyled'>
                <a href='#!'>Política de Privacidad</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md='4'>
            <h5 className='title'>Contacto</h5>
            <ul>
              <li className='list-unstyled'>
                <a href='BSPAT@abcd.com'>BSPAT@abcd.com</a>
              </li>
              <li className='list-unstyled'>+593 987654321</li>
              <li className='list-unstyled'>Quito-Ecuador</li>
            </ul>
          </MDBCol>
        </MDBRow>
        <MDBRow style={prueba}>
          <MDBCol md='3'></MDBCol>
          <MDBCol md='6'>
            <MDBRow style={prueba}>
              <MDBCol md='2'>
                <a href='https://www.linkedin.com/in/alejandro-manuel-vivanco-mosquera-646625116/'>
                  <i className='big linkedin icon'></i>
                </a>
              </MDBCol>
              <MDBCol md='2'>
                <a href='https://www.instagram.com/zapatathalia/'>
                  <i className='big instagram icon'></i>
                </a>
              </MDBCol>
              <MDBCol md='2'>
                <a href='https://www.facebook.com/santiago.cordova.165/'>
                  <i className='big facebook icon'></i>
                </a>
              </MDBCol>
              <MDBCol md='2'>
                <a href='https://twitter.com/login?lang=en'>
                  <i className='big twitter icon'></i>
                </a>
              </MDBCol>
              <MDBCol md='2'>
                <a href='https://www.youtube.com/channel/UCTte6DjiH7jKhmX0hIz0l_A'>
                  <i className='big youtube icon'></i>
                </a>
              </MDBCol>
              <MDBCol md='2'>
                <a href='https://www.facebook.com/santiago.cordova.165/'>
                  <i className='big github icon'></i>
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md='3'></MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className='footer-copyright text-center py-3' style={prueba}>
        <MDBContainer fluid style={prueba}>
          &copy; {new Date().getFullYear()} Copyright: <a href=''>BSPAT</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
