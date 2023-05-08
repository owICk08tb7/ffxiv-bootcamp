import React, { useLayoutEffect, useMemo, useRef } from 'react';

import { Engine } from 'src/engine/Engine';
import { GraphicsManager } from 'src/graphics/GraphicsManager';

export function Arena() {
  const engine = useMemo(() => new Engine());
  const graphics = useMemo(() => new GraphicsManager(engine));

  const arenaRef = useRef();

  useLayoutEffect(() => {
    arenaRef.current?.replaceChildren(graphics.viewElement);
  });

  return (
    <div ref={arenaRef} />
  );
}
