import { Sprite } from 'pixi.js';

import arenaImage from 'src/assets/arena.jpg';

export class Arena {
  constructor({ height, width }) {
    this.height = height;
    this.width = width;
    this.render();
  }

  render() {
    if (!this.graphics) {
      this.graphics = Sprite.from(arenaImage);
      this.graphics.width = this.width;
      this.graphics.height = this.height;
    }
  }
}
