import React from 'react';
import { render } from 'react-dom';
import Ticket from './components/ticket';
import Square from './components/square';

render(
  <Square black>
    <Ticket />
  </Square>,
  document.getElementById('app')
);