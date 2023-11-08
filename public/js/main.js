/* eslint-disable import/extensions */
import cardComponent from './card.js';
import loaderComponent from './loader.js';

const button = document.getElementById('search-button');
const input = document.getElementById('search-input');

button.addEventListener('click', async () => {
  // this is a loader component
  loaderComponent(true);

  // this makes the request to the backend
  const response = await fetch(`http://localhost:3000/search?keyword=${input.value}`);

  const data = await response.json();

  // method for make my component
  cardComponent(data);

  setTimeout(() => loaderComponent(false), 1000);
});
