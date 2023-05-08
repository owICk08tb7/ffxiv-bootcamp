import * as PIXI from 'pixi.js';

import { Arena } from 'src/graphics/Arena';
import { getUserDirection } from 'src/graphics/getUserDirection';
import { Player } from 'src/graphics/Player';

export class GraphicsManager {
  constructor(engine) {
    this.engine = engine;

    this.pixiApplication = new PIXI.Application({
      width: this.engine.state.arena.width,
      height: this.engine.state.arena.height,
    });

    this.arena = new Arena(this.engine.state.arena);
    this.player = new Player();

    this.pixiApplication.stage.addChild(
      this.arena.graphics,
      this.player.graphics,
    );

    this.pixiApplication.ticker.add(() => {
      this.update();
    });
  }

  get viewElement() {
    return this.pixiApplication.view;
  }

  handleKeys() {
    const angle = getUserDirection();

    if (angle !== null) {
      const speed = 5;
      const offsetX = speed * Math.sin(angle);
      const offsetY = speed * Math.cos(angle);

      this.engine.movePlayer(offsetX, offsetY);
    }
  }

  update() {
    this.handleKeys();

    this.player.x = this.engine.state.player.x;
    this.player.y = this.engine.state.player.y;
  }
}
