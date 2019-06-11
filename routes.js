'use strict';

const router = require('express').Router();

router.get('/c', (req,res) => {
  res.status(200).send('Route C');
});
  
router.get('/d', (error, req, res, next) => {
  res.status(500).send('issue');
  console.log('In the "/d" route');
  next(error);
});

module.exports = router;

