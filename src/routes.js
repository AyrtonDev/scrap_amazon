const { Router } = require('express');
const searchAmazon = require('./amazon');

// here has only two routes for all app

const router = Router();

router.get('/', (req, res) => {
  res.sendFile('index.html');
});

router.get('/search', async (req, res) => {
  try {
    const { keyword } = req.query;

    // this part I needed separete
    const result = await searchAmazon(keyword);

    return res.json(result);
  } catch (error) {
    return res.json('Some error was happens, please, try again!').status(500);
  }
});

module.exports = router;
