function ratingComponent(rating) {
  // this component make raating component
  const ratingArea = document.createElement('div');

  // dont make the component if rating is 0 or empty
  if (rating === '0' || rating === '') {
    return ratingArea;
  }

  // loop for make the five stars
  for (let i = 0; i < 5; i += 1) {
    const ratingStar = document.createElement('div');

    if (i < rating) {
      ratingStar.innerHTML = '&#9733;';
    } else {
      ratingStar.innerHTML = '&#9734';
    }

    ratingStar.classList.add('star');
    ratingArea.appendChild(ratingStar);
  }

  ratingArea.classList.add('card-area--rating');
  return ratingArea;
}

// this component make the card info component
// with the rating, title and price
// data is the data from the json file
// data is an object with the following structure:
// {
//   rating: '0.5',
//   title: 'title',
//   price: 'price'
// }
export default function cardInfoComponent(data) {
  const cardInfo = document.createElement('div');

  const title = document.createElement('h2');
  const rating = ratingComponent(data.rating);
  const price = document.createElement('p');

  title.innerHTML = data.title;
  title.classList.add('card-area--title');
  cardInfo.appendChild(title);

  cardInfo.appendChild(rating);

  price.innerHTML = data.price ? `$${data.price}` : '';
  price.classList.add('card-area--price');

  cardInfo.appendChild(price);

  cardInfo.classList.add('card-area--info');
  return cardInfo;
}
