# month-day [![NPM version](https://badge.fury.io/js/month-day.svg)](http://badge.fury.io/js/month-day)

> Get the current day of the month, according to local time or UTC.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i month-day --save
```

## Usage

```js
var day = require('month-day');
```

Assuming it's 10:27 PM EST, on May 25, 2015:

```js
day()
//=> '25'

day('UTC')
//=> '26'
```

## Related projects

* [days](https://github.com/jonschlinkert/days): Days of the week.
* [iso-week](https://github.com/jonschlinkert/iso-week): Get the ISO week of the year.
* [month](https://github.com/datetime/month): Get the name or number of the current month or any month of the year.
* [months](https://github.com/jonschlinkert/months): Months of the year.
* [o-clock](https://github.com/jonschlinkert/o-clock): Simple utility for displaying the time in 12-hour clock format.
* [seconds](https://github.com/jonschlinkert/seconds): Get the number of seconds for a minute, hour, day and week.
* [weekday](https://github.com/jonschlinkert/weekday): Get the name and number of the current weekday. Or get the name of the… [more](https://github.com/jonschlinkert/weekday)
* [week](https://github.com/jonschlinkert/week): Get the current week number.
* [year](https://github.com/jonschlinkert/year): Simple utility to get the current year with 2 or 4 digits.

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/datetime/month-day/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 25, 2015._