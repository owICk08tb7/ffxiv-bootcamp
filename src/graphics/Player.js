import * as PIXI from 'pixi.js';

import { config } from 'src/graphics/config';

export class Player {
  constructor() {
    this.render();
  }

  set x(newX) {
    this.graphics.x = newX - config.player.radius;
  }

  set y(newY) {
    this.graphics.y = newY - config.player.radius;
  }

  render() {
    if (!this.graphics) {
      this.graphics = new PIXI.Graphics();
      this.graphics.beginFill(config.player.color);
      this.graphics.drawCircle(
        config.player.radius,
        config.player.radius,
        config.player.radius,
      );
    }
  }
}
