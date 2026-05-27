// src/grid.js
import { Car } from './car.js';
import { AIController } from './ai.js';
import { TEAMS } from './data.js';

const GRID_SPACING_X = 40;
const GRID_SPACING_Y = 60;

export function createGrid(track) {
  const allDrivers = [];

  TEAMS.forEach(team => {
    team.drivers.forEach(driver => {
      allDrivers.push({ team, driver });
    });
  });

  // player is first driver
  const playerInfo = allDrivers[0];
  const player = new Car(track.startX, track.startY, 0, 'player', playerInfo);

  const aiCars = [];
  const aiControllers = [];

  for (let i = 1; i < allDrivers.length; i++) {
    const row = Math.floor((i - 1) / 2);
    const col = (i - 1) % 2;

    const x = track.startX - GRID_SPACING_X / 2 + col * GRID_SPACING_X;
    const y = track.startY + (row + 1) * GRID_SPACING_Y;

    const info = allDrivers[i];
    const car = new Car(x, y, 0, 'ai', info);
    aiCars.push(car);
    aiControllers.push(new AIController(car, track));
  }

  return {
    player,
    aiCars,
    aiControllers,
    allDrivers,
  };
}
