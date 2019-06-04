'use strict';

const express = require('express');
let app = express();
const errorHandler = require('./middleware/errorHandler');
const unknown = require('./middleware/404');
const reqestTime = require('./middleware/time');
const cD = require('./routes');

const PORT = process.env.PORT || 3000;

let math = (number) => {
  return(req, res, next) => {
    req.number = number**2;
    next();
  };
};

let squared = math(3);

app.get('/', reqestTime, (req, res, next) => {
});

app.get('/a', (req,res) => {
  res.status(200).send('Route A');
});

app.get('/b', squared, (req,res) => {
  res.status(200).send(`${req.number} is the number of the day`);
});

app.use(cD);
app.use(unknown);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

