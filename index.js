'use strict';

var repeat = require('repeat-string');

module.exports = function (str) {
  var day = (str === 'utc' || str === 'UTC')
    ? new Date().getUTCDate()
    : new Date().getDate();

  if (str === 'DD') {
    return repeat('0', 2 - String(day).length) + day;
  }
  return day;
};
