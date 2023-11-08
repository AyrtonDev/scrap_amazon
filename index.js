const express = require('express');
const routes = require('./src/routes');

// Here it starts the app

const app = express();
const port = 3000;

// I declared the pages static for easier access

app.use(express.static('public'));
app.use(routes);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`The server was started in: http://localhost:${port}`));
