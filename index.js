'use strict';

/**
 * Module dependencies.
 */

var fs = require('fs');
var chalk = require('chalk');
var delimiters = require('delimiter-regex');
var debug = require('debug')('engine:lodash');
var utils = require('engine-utils');
var _ = require('lodash');

/**
 * Lodash support.
 */

var engine = utils.fromStringRenderer('lodash');

/**
 * expose engine `defaults`
 */

engine.options = {
  dest: {ext: '.html'}
};

/**
 * Lodash string support. Render the given `str` and invoke the callback `callback(err, str)`.
 *
 * ```js
 * var engine = require('engine-lodash');
 * engine.render('<%= name %>', {name: 'Jon'}, function (err, content) {
 *   console.log(content); //=> 'Jon'
 * });
 * ```
 *
 * @param {String} `str`
 * @param {Object|Function} `options` or callback.
 *     @property {Object} `cache` enable template caching
 *     @property {String} `filename` filename required for caching
 * @param {Function} `callback`
 * @api public
 */

engine.render = function lodashRender(fn, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  options = options || {};
  if (typeof fn === 'string') {
    fn = engine.compile(fn, options);
  }

  try {
    // Pass file extension for use in assemble v0.6.x
    cb(null, engine.renderSync(fn, options));
  } catch (err) {
    console.log(chalk.red('%s'), err);
    cb(err);
  }
};

/**
 * Return a compiled function from the given template
 * `string` and `options`.
 *
 * @param  {String} `str` Template string to compile.
 * @param  {Object} `options` Options or settings to pass to lodash
 * @param  {Function} `cb` Callback function
 * @return {Function}
 */

engine.compile = function lodashCompile(str, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  if (typeof cb !== 'function') {
    cb = function (err, fn) {
      if (err) throw err;
      return fn;
    };
  }

  options = options || {};

  if (options.mixins) {
    _.mixin(options.mixins);
  }

  var delims = _.pick(options, ['interpolate', 'evaluate', 'escape']);
  var opts = _.omit(options, ['helpers', 'imports']);
  var fns = _.pick(options, ['helpers', 'imports']);

  var settings = {};
  if (options.delims) {
    delims = _.merge({}, delimsObject(options.delims), delims);
  }

  settings.imports = _.extend({}, fns.helpers, fns.imports);
  settings = _.extend({}, settings, delims);

  if (options.debugEngine) {
    var helpers = Object.keys(settings.imports);
    for (var key in opts) {
      if (helpers.indexOf(key) !== -1) {
        errorMessage(settings, options, key);
      }
    }
  }

  try {
    // Pass file extension for use in assemble v0.6.x
    return cb(null, _.template(str, settings));
  } catch (err) {
    console.log(chalk.red('%s'), err);
    return cb(err);
  }
};

/**
 * Render Lo-Dash or underscore templates synchronously.
 *
 * ```js
 * var engine = require('engine-lodash');
 * engine.renderSync('<%= name %>', {name: 'Jon'});
 * //=> 'Jon'
 * ```
 *
 * @param  {Object} `str` The string to render.
 * @param  {Object} `options` Object of options.
 *   @option {Object} `settings` Settings to pass to Lo-Dash.
 *   @option {Arrary} `delims` Template delimiters, generated by [delimiter-regex]
 *   @option {Object} `imports` Template helpers to pass to Lo-Dash.
 * @return {String} Rendered string.
 * @api public
 */

engine.renderSync = function lodashRenderSync(fn, options) {
  var context = _.extend({}, options);

  options = options || {};
  if (typeof fn === 'string') {
    context = _.omit(options, ['helpers', 'imports']);
    fn = engine.compile(fn, options);
  }

  try {
    // Pass file extension for use in assemble v0.6.x
    return fn(context);
  } catch (err) {
    console.log(chalk.red('%s'), err);
    return err;
  }
};

/**
 * Lodash file support. Render a file at the given `filepath` and callback `callback(err, str)`.
 *
 * ```js
 * var engine = require('engine-lodash');
 * engine.renderFile('foo/bar/baz.tmpl', {name: 'Jon'});
 * //=> 'Jon'
 * ```
 *
 * @param {String} `path`
 * @param {Object|Function} `options` or callback function.
 * @param {Function} `callback`
 * @api public
 */

engine.renderFile = function lodashRenderFile(filepath, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  try {
    return engine.render(fs.readFileSync(filepath, 'utf8'), options, cb);
  } catch (err) {
    console.log(chalk.red('%s'), err);

    cb(err);
    return;
  }
};

function delimsObject(delims) {
  var a = delims[0], b = delims[1];
  var res = {};

  res.interpolate = delimiters(a + '=', b);
  res.evaluate = delimiters(a, b);
  res.escape = delimiters(a + '-', b);
  return res;
}

/**
 * Error message displayed when `options.debugEngine`
 * is defined and an error is thrown.
 */

function errorMessage(settings, options, key) {
  console.log(chalk.yellow('[engine-lodash] property "' + key + '" is on both:'));
  console.log(chalk.yellow('  - settings.imports as a(n): ', typeof settings.imports[key]));
  console.log(chalk.yellow('  - options as a(n): ', typeof options[key]));
}

/**
 * Express support.
 */

engine.__express = engine.renderFile;

/**
 * Expose `engine`
 */

module.exports = engine;
