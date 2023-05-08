import Keydrown from 'keydrown';

export function getUserDirection() {
  const direction = {
    x: 0,
    y: 0,
  };

  if (Keydrown.LEFT.isDown()) {
    direction.x -= 1;
  }

  if (Keydrown.RIGHT.isDown()) {
    direction.x += 1;
  }

  if (Keydrown.UP.isDown()) {
    direction.y -= 1;
  }

  if (Keydrown.DOWN.isDown()) {
    direction.y += 1;
  }

  if (direction.x === 0 && direction.y === 0) {
    return null;
  }

  return Math.atan2(direction.x, direction.y);
}
