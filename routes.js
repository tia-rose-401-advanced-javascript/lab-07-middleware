'use strict';

const express = require('express');
let app = express();
const errorHandler = require('./middleware/errorHandler');

module.exports = (req, res, next) => {

  app.get('/c', (req,res) => {
    res.status(200).send('Route C');
  });
  
  app.get('/d', (req, res, next) => {
    res.status(500).send('issue');
    console.log('In the "/d" route');
    next(errorHandler);
  });

};