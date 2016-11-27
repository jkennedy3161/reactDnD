let ticketPosition = [0, 0];
let observer = null;

var emitChange = () => {
  observer(ticketPosition);
};

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

export function moveTicket(toX, toY) {
  ticketPosition = [toX, toY];
  emitChange();
}