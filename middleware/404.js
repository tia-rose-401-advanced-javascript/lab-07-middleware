'use strict';

module.exports = (req, res, next) => {
  console.log('Unknown Matt');
  res.status(404).send('Matt is confused');
  res.end();
};