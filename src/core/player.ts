// usePlayer.ts
import { useState } from 'react';
import useKeyboardInput from '../interface/keyboard_input';

const usePlayer = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });

  const getPlayerPosition = () => playerPosition;

  const updatePlayerPosition = (keysPressed: Record<string, boolean>) => {
    let horizontalMovement = 0;
    let verticalMovement = 0;

    if (keysPressed['w']) {
      verticalMovement = -1;
    }
    if (keysPressed['s']) {
      verticalMovement = 1;
    }
    if (keysPressed['a']) {
      horizontalMovement = -1;
    }
    if (keysPressed['d']) {
      horizontalMovement = 1;
    }

    setPlayerPosition((prev) => ({
      x: prev.x + horizontalMovement,
      y: prev.y + verticalMovement,
    }));
  };

  useKeyboardInput(updatePlayerPosition);

  return { playerPosition, functions: {getPlayerPosition}};
};

export default usePlayer;
