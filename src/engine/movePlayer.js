import { clamp } from 'lodash';

export function movePlayer(state, offsetX, offsetY) {
  const newPosition = {
    x: clamp(state.player.x + offsetX, 0, state.arena.width),
    y: clamp(state.player.y + offsetY, 0, state.arena.height),
  };

  return {
    ...state,
    player: {
      ...state.player,
      ...newPosition,
    },
  };
}
