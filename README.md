# engine-lodash [![NPM version](https://badge.fury.io/js/engine-lodash.svg)](http://badge.fury.io/js/engine-lodash)

> Lo-Dash engine, consolidate.js style but with enhancements. Works with Assemble, express.js, engine-cache or any application that follows consolidate.js conventions.

## Install
### Install with [npm](npmjs.org):

```bash
npm i engine-lodash --save-dev
```

## Usage

```js
var lodash = require('engine-lodash');
```

## API
### [.render](index.js#L39)

Lodash string support. Render the given `str` and invoke the callback `callback(err, str)`.

* `str` **{String}**    
* `options` **{Object|Function}**: or callback.    
* `callback` **{Function}**    

```js
var engine = require('engine-lodash');
engine.render('<%= name %>', {name: 'Jon'}, function (err, content) {
  console.log(content); //=> 'Jon'
});
```

### [.renderSync](index.js#L103)

Render Lo-Dash or underscore templates synchronously.

* `str` **{Object}**: The string to render.    
* `options` **{Object}**: Object of options.    
* `returns` **{String}**: Rendered string.  

```js
var engine = require('engine-lodash');
engine.renderSync('<%= name %>', {name: 'Jon'});
//=> 'Jon'
```

### [.renderFile](index.js#L144)

Lodash file support. Render a file at the given `filepath` and callback `callback(err, str)`.

* `path` **{String}**    
* `options` **{Object|Function}**: or callback function.    
* `callback` **{Function}**    

```js
var engine = require('engine-lodash');
engine.renderFile('foo/bar/baz.tmpl', {name: 'Jon'});
//=> 'Jon'
```


## Author
 
**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 
 
**Brian Woodward**
 
+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/doowb) 


## License
Copyright (c) 2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on February 01, 2015._


[delims]: https://github.com/jonschlinkert/delims "template delimiters"