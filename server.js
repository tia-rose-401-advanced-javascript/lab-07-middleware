'use strict';

const express = require('express');
let app = express();
const errorHandler = require('./middleware/errorHandler');
const unknown = require('./middleware/404');
const reqestTime = require('./middleware/time');

const PORT = process.env.PORT || 3000;


app.get('/', reqestTime, (req, res, next) => {
});

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
  res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
  res.status(200).send('Route C');
});

app.get('/d', (req, res, next) => {
  res.status(500).send('issue');
  console.log('In the "/d" route');
  next(errorHandler);
});

app.use(unknown);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

