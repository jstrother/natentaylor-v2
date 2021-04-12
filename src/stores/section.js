import { readable, writable } from 'svelte/store';

export const section = writable({
  name: 'Illustration',
  path: 'illustration'
});

export const menuList = readable([
  {
    name: 'Illustration',
    path: 'illustration'
  },
  {
    name: 'Character Design',
    path: 'characterDesign'
  },
  {
    name: 'Wonderful World of Corporate Synergy',
    path: 'wwcs'
  },
  {
    name: 'Holiday Art',
    path: 'holiday'
  },
  {
    name: 'Portraits',
    path: 'portraits'
  },
  {
    name: 'Games',
    path: 'games'
  },
  {
    name: 'Book Credits',
    path: 'books'
  }
]);
