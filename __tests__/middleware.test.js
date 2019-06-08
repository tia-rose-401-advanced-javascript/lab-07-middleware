'use strict';
const time = require('../middleware/time');
const supertest = require('supertest');
const mockRequest = supertest(time);

describe('middleware', () => {
  describe('time', () => {
    it('should run a console.log of new Date', () => {
      let mockTime = jest.spyOn(console, 'log');
      mockTime.mockImplementation(() => true);
      let req = {
        method: 'get',
        path: '/',
        requestTime: 'time'
      };
      let res = {};
      let next = jest.fn(() => true);

      time(req, res, next);

      expect(mockTime).toBeCalled();
    });
  });
});