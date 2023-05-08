import * as PIXI from 'pixi.js';

import { config } from 'src/graphics/config';

export class Arena {
  constructor({ height, width }) {
    this.height = height;
    this.width = width;
    this.render();
  }

  render() {
    if (!this.graphics) {
      this.graphics = new PIXI.Graphics();
      this.graphics.beginFill(config.arena.color);
      this.graphics.drawRect(0, 0, this.width, this.height);
    }
  }
}
