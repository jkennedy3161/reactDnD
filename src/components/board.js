import React, { Component, PropTypes } from 'react';
import Square from './square';
import Ticket from './ticket';

export default class Board extends Component {
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [ticketX, ticketY] = this.props.ticketPosition;
    const piece = (x === ticketX && y === ticketY) ?
      <Ticket /> :
      null;

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100px',
        height: '100px',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  ticketPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
};