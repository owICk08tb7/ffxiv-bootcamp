/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { clamp } from 'lodash';
import React, { useState } from 'react';

import styles from 'src/components/Arena/Arena.module.scss';
import { ArenaPlayer } from 'src/components/Arena/ArenaPlayer';

export function Arena() {
  const [playerPosition, setPlayerPosition] = useState({ x: 300, y: 300 });

  const movePlayer = (offsetX, offsetY) => {
    const cappedPosition = {
      x: clamp(playerPosition.x + offsetX, 0, 580),
      y: clamp(playerPosition.y + offsetY, 0, 580),
    };
    setPlayerPosition(cappedPosition);
  };

  const handleKeyDown = (event) => {
    // eslint-disable-next-line default-case
    switch (event.key) {
      case 'ArrowLeft':
        movePlayer(-10, 0);
        break;
      case 'ArrowRight':
        movePlayer(10, 0);
        break;
      case 'ArrowUp':
        movePlayer(0, -10);
        break;
      case 'ArrowDown':
        movePlayer(0, 10);
        break;
    }
  };

  return (
    <div
      tabIndex={0}
      className={styles.container}
      onKeyDown={handleKeyDown}
    >
      <ArenaPlayer position={playerPosition} />
    </div>
  );
}
