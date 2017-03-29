/* eslint-disable no-console */

const express = require('express');
const app = express();
const PORT = 4000;

const path = require('path');

/*
app.get('/', (req, res) => {
  res.send('Hello World from Docker');
  console.log('Hello World from Docker');
});

app.get('/home', (req,res) => {
  res.send('Welcome Home From Docker');
});

*/
app.use('/', express.static(path.join(__dirname, 'public'))); // eslint-disable-line
// Html file served at http://localhost:4000/

app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});
