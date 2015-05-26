'use strict';

module.exports = function (str) {
  return (str === 'utc' || str === 'UTC')
    ? new Date().getUTCDate()
    : new Date().getDate();
};
