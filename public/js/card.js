/* eslint-disable import/extensions */
import cardInfoComponent from './cardInfo.js';

const pagination = document.querySelector('div.pagination-container');
const current = document.querySelector('span.pagination-current');
const next = document.querySelector('button.pagination-next');
const prev = document.querySelector('button.pagination-prev');

export default function cardComponent(data, page) {
  const container = document.querySelector('div.result-area');
  container.innerHTML = '';

  // this happens when there's no results
  if (data.products.length === 0) {
    pagination.classList.add('hidden');
    container.innerHTML = `<h2 class="not-found">Not found any results!</h2>
    <h2>Change the search or be more specific</h2>
    `;
    return;
  }

  // here I build my component
  data.products.forEach((item) => {
    // link to take to the amazon
    const link = document.createElement('a');
    // card element
    const card = document.createElement('div');
    // div for the image
    const divImg = document.createElement('div');
    // card info component
    const cardInfo = cardInfoComponent(item);

    // product img is the background image of the divImg
    divImg.style.backgroundImage = `url(${item.urlImg})`;
    divImg.classList.add('card-area--img');

    // final build

    card.appendChild(divImg);

    card.appendChild(cardInfo);

    card.classList.add('card-area');
    link.href = `https://www.amazon.com/${item.urlProduct}`;
    link.target = '_blank';
    link.appendChild(card);

    container.appendChild(link);
  });

  // here I set my pagination html
  pagination.classList.remove('hidden');
  prev.disabled = data.pagination.prev;
  current.innerHTML = page;
  next.disabled = data.pagination.next;
}
