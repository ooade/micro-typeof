<p align="center">
  <h3 align="center">Micro TypeOf</h3>
  <p align="center">
  <a href="https://www.npmjs.org/package/micro-typeof"><img src="https://img.shields.io/npm/v/micro-typeof.svg?style=flat-square" alt="npm"></a>
  <a href="https://travis-ci.org/ooade/micro-typeof"><img src="https://img.shields.io/travis/ooade/micro-typeof.svg?style=flat-square" alt="travis"></a>
  <a href="https://github.com/ooade/micro-typeof"><img src="https://img.shields.io/npm/dm/micro-typeof.svg?style=flat-square" alt="downloads/month"></a>
  <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PR(s)-welcome-brightgreen.svg?style=flat-square" alt="pullrequest"></a>
  <a href="http://www.firsttimersonly.com"><img src="https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square" alt="firsttimersonly"></a>
  </p>
</p>

## Installation

```sh
npm add micro-typeof
```

## Usage

```js
import typeOf from 'micro-typeof';

typeOf([0, 1]) // array
typeOf({ name: 'Ademola' }) // object
typeOf(Symbol('foo') // symbol
typeOf(() => {}) // function
```

## LICENSE

MIT
