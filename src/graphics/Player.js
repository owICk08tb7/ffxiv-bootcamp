import * as PIXI from 'pixi.js';

import { config } from 'src/graphics/config';

export class Player {
  constructor() {
    this.render();
  }

  set x(newX) {
    this.graphics.x = newX - config.player.width / 2;
  }

  set y(newY) {
    this.graphics.y = newY - config.player.height / 2;
  }

  render() {
    if (!this.graphics) {
      this.graphics = new PIXI.Graphics();
      this.graphics.beginFill(config.player.color);
      this.graphics.drawRect(0, 0, config.player.width, config.player.height);
    }
  }
}
