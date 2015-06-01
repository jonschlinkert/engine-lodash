# engine-lodash [![NPM version](https://badge.fury.io/js/engine-lodash.svg)](http://badge.fury.io/js/engine-lodash)  [![Build Status](https://travis-ci.org/jonschlinkert/engine-lodash.svg)](https://travis-ci.org/jonschlinkert/engine-lodash)

> Lo-Dash engine, consolidate.js style but with enhancements. Works with Assemble, express.js, engine-cache or any application that follows consolidate.js conventions.

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i engine-lodash --save
```

## Usage

```js
var lodash = require('engine-lodash');
```

## API

### [.render](index.js#L53)

Lodash string support. Render the given `str` and invoke the callback `callback(err, str)`.

**Params**

* `str` **{String}**
* `options` **{Object|Function}**: or callback.
* `callback` **{Function}**

**Example**

```js
var engine = require('engine-lodash');
engine.render('<%= name %>', {name: 'Jon'}, function (err, content) {
  console.log(content); //=> 'Jon'
});
```

### [.renderSync](index.js#L145)

Render Lo-Dash or underscore templates synchronously.

**Params**

* `str` **{Object}**: The string to render.
* `options` **{Object}**: Object of options.
* `returns` **{String}**: Rendered string.

**Example**

```js
var engine = require('engine-lodash');
engine.renderSync('<%= name %>', {name: 'Jon'});
//=> 'Jon'
```

### [.renderFile](index.js#L178)

Lodash file support. Render a file at the given `filepath` and callback `callback(err, str)`.

**Params**

* `path` **{String}**
* `options` **{Object|Function}**: or callback function.
* `callback` **{Function}**

**Example**

```js
var engine = require('engine-lodash');
engine.renderFile('foo/bar/baz.tmpl', {name: 'Jon'});
//=> 'Jon'
```

## Related projects

* [engine-cache](https://github.com/jonschlinkert/engine-cache): express.js inspired template-engine manager.
* [helper-cache](https://github.com/jonschlinkert/helper-cache): Easily register and get helper functions to be passed to any template engine or node.js… [more](https://github.com/jonschlinkert/helper-cache)
* [template-helpers](https://github.com/jonschlinkert/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://github.com/jonschlinkert/template-helpers)
* [template](https://github.com/jonschlinkert/template): Render templates using any engine. Supports, layouts, pages, partials and custom template types. Use template… [more](https://github.com/jonschlinkert/template)

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

* [github/doowb](https://github.com/doowb)
* [twitter/doowb](http://twitter.com/doowb)

## License

Copyright © 2014-2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 01, 2015._
