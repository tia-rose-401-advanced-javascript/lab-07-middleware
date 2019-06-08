'use strict';

const router = require('express').Router();



  router.get('/c', (req,res) => {
    res.status(200).send('Route C');
  });
  
  router.get('/d', (req, res, next) => {
    res.status(500).send('issue');
    console.log('In the "/d" route');
    next(errorHandler);
  });

  module.exports = router;

