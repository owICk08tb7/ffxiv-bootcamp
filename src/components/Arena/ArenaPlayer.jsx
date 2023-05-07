import React from 'react';

import styles from 'src/components/Arena/Arena.module.scss';

export function ArenaPlayer({ position }) {
  return (
    <div
      className={styles.player}
      style={{
        top: position.y,
        left: position.x,
      }}
    />
  );
}
