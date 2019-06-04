'use strict';

module.exports = (req, res, next) => {
  console.log(new Date());
  next();
};