import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import { observe } from './components/game';

const rootEl = document.getElementById('app');

observe(ticketPosition =>
  ReactDOM.render(
    <Board ticketPosition={ticketPosition} />,
    rootEl
  )
);