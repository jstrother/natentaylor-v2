import { readable } from 'svelte/store';
import { illustration } from './images/illustration';
import { characterDesign } from './images/characterDesign';
import { wwcs } from './images/wwcs';
import { holiday } from './images/holiday';
import { portraits } from './images/portraits';
import { games } from './images/games';
import { books } from './images/books';

export const imagesList = readable(
  [
    illustration,
    characterDesign,
    wwcs,
    holiday,
    portraits,
    games,
    books,
  ]
);
