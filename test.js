'use strict';

/* deps: mocha */
var assert = require('assert');
var repeat = require('repeat-string');
var day = require('./');

describe('day()', function () {
  it('should return the current month day', function () {
    assert.equal(day(), new Date().getDate(), true);
  });

  it('should return the current UTC month day', function () {
    assert.equal(day('UTC'), new Date().getUTCDate(), true);
  });

  it('should zero-fill the current day number', function () {
    assert.equal(typeof day('DD') === 'string', true);
    var date = new Date().getDate();
    var res = repeat('0', 2 - String(date).length) + date;
    assert.equal(day('DD'), res, true);
  });
});
