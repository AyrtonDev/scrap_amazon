/* eslint-disable import/extensions */
import loaderComponent from './loader.js';
import cardComponent from './card.js';

const button = document.getElementById('search-button');
const search = document.getElementById('search-input');
const current = document.querySelector('span.pagination-current');
const next = document.querySelector('button.pagination-next');
const prev = document.querySelector('button.pagination-prev');

async function navegation(term, page) {
  // this is a loader component
  window.scrollTo({ top: 0, auto: 'smooth' });
  loaderComponent(true);

  // this makes the request to the backend
  const response = await fetch(`http://localhost:3000/search?keyword=${term}&page=${page}`);

  const data = await response.json();

  // method for make my component
  cardComponent(data, page);

  setTimeout(() => loaderComponent(false), 1000);
}

// Here I control the pagination and events

let pageNumber = Number(current.textContent);

button.addEventListener('click', async () => {
  pageNumber = 1;
  navegation(search.value, pageNumber);
});

prev.addEventListener('click', () => {
  pageNumber -= 1;
  navegation(search.value, pageNumber);
});

next.addEventListener('click', () => {
  pageNumber += 1;
  navegation(search.value, pageNumber);
});
