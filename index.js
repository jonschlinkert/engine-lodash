'use strict';

/**
 * Module dependencies.
 */

var fs = require('fs');
var utils = require('engine-utils');
var delimsEscape = require('escape-delims');
var Delimiters = require('delims');
var delimiters = new Delimiters();
var _ = require('lodash');

/**
 * Lodash support.
 */

var engine = utils.fromStringRenderer('lodash');

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

engine.render = function render(str, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  var opts = options || {};
  if (!opts.noescape) {
    str = delimsEscape.escape(str);
  }

  var settings = _.merge({}, opts, opts.settings);
  settings.imports = opts.imports || opts.helpers || {};

  if (opts.mixins) {
    _.mixin(opts.mixins);
  }

  if (opts.delims) {
    _.merge(settings, delimiters.templates(opts.delims), opts);
  }

  try {
    var rendered = _.template(str, opts, settings);
    if (opts.delims) {
      rendered = delimsEscape.unescape(rendered);
    }

    // Pass file extension for use in assemble v0.6.x
    cb(null, rendered, '.html');
  } catch (err) {
    cb(err);
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
 *   @option {Object} `delims` Template delimiters, generated by [delims]
 *   @option {Object} `imports` Template helpers to pass to Lo-Dash.
 * @return {String} Rendered string.
 * @api public
 */

engine.renderSync = function renderSync(str, options) {
  var opts = _.merge({}, options);

  if (!opts.noescape) {
    str = delimsEscape.escape(str);
  }

  var settings = {};

  _.merge(settings, opts);
  _.merge(settings, opts.settings);
  settings.imports = opts.imports || opts.helpers || {};

  if (opts.mixins) {
    _.mixin(opts.mixins);
  }

  if (opts.delims) {
    var delims = delimiters.templates(opts.delims);
    _.merge(settings, delims, opts);
  }

  try {
    var rendered = _.template(str, opts, settings);
    if (opts.delims) {
      rendered = delimsEscape.unescape(rendered);
    }

    return rendered;
  } catch (err) {
    return err;
  }
};

/**
 * Lodash file support. Render a file at the given `filepath` and callback `callback(err, str)`.
 *
 * ```js
 * var engine = require('engine-lodash');
 * engine.renderSync('foo/bar/baz.tmpl', {name: 'Jon'});
 * //=> 'Jon'
 * ```
 *
 * @param {String} `path`
 * @param {Object|Function} `options` or callback function.
 * @param {Function} `callback`
 * @api public
 */

engine.renderFile = function renderFile(filepath, options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  try {
    var str = fs.readFileSync(filepath, 'utf8');
    engine.render(str, options, cb);
  } catch (err) {
    cb(err);
    return;
  }
};

/**
 * Express support.
 */

engine.__express = engine.renderFile;

/**
 * Expose `engine`
 */

module.exports = engine;