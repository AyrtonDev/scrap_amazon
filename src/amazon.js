const axios = require('axios');
const cheerio = require('cheerio');
const { filterPrice, limitTitle } = require('./utils');

// Here is a the magic happens

async function searchAmazon(query) {
  try {
    // Axios makes the request to Amazon and passes the query
    // These headers are necessary to make this request
    // without them returning an error request with http status 503
    const response = await axios.get('https://www.amazon.com/s', {
      params: {
        'field-keywords': query,
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        Referer: 'https://www.amazon.com/',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        Accept: 'text/html',
      },
    });

    // load the response to cheerio

    const data = cheerio.load(response.data);
    const list = [];

    // get the info from the response

    data('.s-result-item').each((index, element) => {
      const title = data(element).find('.a-text-normal').html();
      const rating = data(element).find('.a-icon-alt').text();
      const wholePrice = data(element).find('.a-price-whole').text();
      const fractionPrice = data(element).find('.a-price-fraction').text();
      const urlImg = data(element).find('.s-image').attr('src');
      const urlProduct = data(element).find('.a-link-normal').attr('href');

      // processing to remove non-product information

      if (title !== '' && title !== null) {
        // method for format price
        const price = filterPrice(wholePrice + fractionPrice);
        // this method is very important
        const newTitle = limitTitle(title);
        // getting start rating
        const newRating = rating.split('')[0];

        // build the list for response
        list.push({
          title: newTitle, rating: newRating, price, urlImg, urlProduct,
        });
      }
    });

    return list;
  } catch (error) {
    // tratament basic for no break the server
    if (error.response.status === 503) {
      console.error('Some wrong with headers request');
      return 'Amazon is currently unavailable. Please try again later.';
    }

    console.error('Some wrong with server');
    return [];
  }
}

module.exports = searchAmazon;
