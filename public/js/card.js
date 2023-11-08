// eslint-disable-next-line import/extensions
import cardInfoComponent from './cardInfo.js';

export default function cardComponent(data) {
  const container = document.querySelector('div.result-area');
  container.innerHTML = '';

  // this happens when there's no results
  if (data.length === 0) {
    container.innerHTML = `<h2 class="not-found">Not found any results!</h2>
    <h2>Change the search or be more specific</h2>
    `;
    return;
  }

  // here I build my component
  data.forEach((item) => {
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
}
