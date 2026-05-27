// src/main.js
import { Track } from './track.js';
import { setupInput } from './input.js';
import { drawUI } from './ui.js';
import { TRACKS } from './data.js';
import { createGrid } from './grid.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let currentTrackIndex = 0;
const trackMeta = TRACKS[currentTrackIndex];
const track = new Track(canvas, trackMeta);

const input = setupInput();

const { player, aiCars, aiControllers, allDrivers } = createGrid(track);
const playerInfo = allDrivers[0];

// camera + loop code stays like before, just use `player`, `aiCars`, `aiControllers`
