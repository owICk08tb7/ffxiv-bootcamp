import EventEmitter from 'eventemitter3';

import { initialState } from 'src/engine/initialState';
import { movePlayer } from 'src/engine/movePlayer';

export class Engine {
  constructor() {
    this.state = initialState;
    this.events = new EventEmitter();
  }

  movePlayer(...args) {
    this.state = movePlayer(this.state, ...args);
  }
}
