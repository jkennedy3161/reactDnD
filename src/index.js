import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';

ReactDOM.render(
  <Board ticketPosition={[4,7]} />,
  document.getElementById('app')
);