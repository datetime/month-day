'use strict';

/* deps: mocha */
var assert = require('assert');
var day = require('./');

describe('day()', function () {
  it('should return the current month day', function () {
    assert.equal(day(), new Date().getDate(), true);
  });

  it('should return the current UTC month day', function () {
    assert.equal(day('UTC'), new Date().getUTCDate(), true);
  });
});
