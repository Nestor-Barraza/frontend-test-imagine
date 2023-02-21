import React from 'react';
import {  Alert, MenuCustom } from './components/index';
import './App.css';
import { openModalConfirm } from './components/alert/alertAction';

import { useState } from 'react';
import {
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Sidebar, Container
} from 'semantic-ui-react';
import RouterApp from './routes';

function App() {


   
 /*     <header className="App-header">
     <Button content='Test' onClick={()=> openModalConfirm('lol', 'heavy', 'prueba')}/>
   
  <Alert/>
   </header> */

  return (
    <Container fluid className="App">
    
     <RouterApp/>
    </Container>
  );
}

export default App;

