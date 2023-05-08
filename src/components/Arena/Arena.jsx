/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useLayoutEffect, useMemo, useRef } from 'react';

import { Engine } from 'src/engine/Engine';
import { GraphicsManager } from 'src/graphics/GraphicsManager';

export function Arena() {
  const engine = useMemo(() => new Engine());
  const graphics = useMemo(() => new GraphicsManager(engine));

  const arenaRef = useRef();

  const handleKeyDown = (event) => {
    // eslint-disable-next-line default-case
    switch (event.key) {
      case 'ArrowLeft':
        engine.movePlayer(-10, 0);
        break;
      case 'ArrowRight':
        engine.movePlayer(10, 0);
        break;
      case 'ArrowUp':
        engine.movePlayer(0, -10);
        break;
      case 'ArrowDown':
        engine.movePlayer(0, 10);
        break;
    }
  };

  useLayoutEffect(() => {
    arenaRef.current?.replaceChildren(graphics.viewElement);
  });

  return (
    <div
      ref={arenaRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    />
  );
}
