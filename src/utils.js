function limitTitle(title) {
  // this method do the tratament of product title
  // some titles has HTML Entitie &nbsp;
  // where the false white spaces appear, this caused my site to break
  try {
    const withoutTag = title.replace(/<[^>]*>/g, '');
    const withoutWhiteSpaceHTML = withoutTag.replace(/&nbsp;/g, ' ');

    if (title.length > 103) {
      return `${withoutWhiteSpaceHTML.substring(0, 149)}...`;
    }
    return title;
  } catch (error) {
    console.error(error);

    return '';
  }
}

// some prices came with more than one price together, I used this method to format

function filterPrice(str) {
  const pieces = str.split('.');
  const price = pieces.slice(0, 2).join('.');

  return price;
}

module.exports = { limitTitle, filterPrice };
