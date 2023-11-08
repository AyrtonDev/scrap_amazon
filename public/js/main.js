// eslint-disable-next-line import/no-relative-packages, import/extensions
import cardComponent from './card.js';

const button = document.getElementById('search-button');
const input = document.getElementById('search-input');

button.addEventListener('click', async () => {
  // this makes the request to the backend
  const response = await fetch(`http://localhost:3000/search?term=${input.value}`);

  const data = await response.json();

  // method for make my component
  cardComponent(data);
});
