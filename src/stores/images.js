import { readable, writable } from 'svelte/store';
import { illustration } from './imagesLists/illustration';
import { characterDesign } from './imagesLists/characterDesign';
import { wwcs } from './imagesLists/wwcs';
import { holiday } from './imagesLists/holiday';
import { portraits } from './imagesLists/portraits';
import { games } from './imagesLists/games';
import { books } from './imagesLists/books';

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

export const fullSizeInfo = writable(
  {
    name: '',
    full: '',
    groupTitle: ''
  }
);
