'use strict';

module.exports = (error, req, res, next) => {
  console.error('Felipe broke in our server');
  console.error(error);
};
