module.exports = {
  begin: 3,
  type: 'declaration',
  name: '_',
  value: 'require(\'lodash\')',
  string: '_',
  original: 'var _ = require(\'lodash\');',
  line: NaN
} {
  type: 'comment',
  begin: 6,
  end: 37,
  string: '/**\n * Initialize a new `Options` cache.\n *\n * **Example:**\n *\n * In your application:\n *\n * ```js\n * var util = require(\'util\');\n * var Options = require(\'options-cache\');\n *\n * function App(options) {\n *   Options.call(this, options);\n * }\n * util.inherits(App, Options);\n *\n * App.prototype.foo = function(value) {\n *   this.enable(value);\n * };\n *\n * App.prototype.bar = function(value) {\n *   if (this.enabled(value)) {\n *     // do something\n *   }\n * };\n * ```\n *\n * @class Options\n * @param {Object} `options`\n * @constructor\n * @api public\n */',
  line: NaN
} {
  begin: 6,
  type: 'declaration',
  name: 'Options',
  value: 'module.exports = function(options) {',
  string: '/**\n * Initialize a new `Options` cache.\n *\n * **Example:**\n *\n * In your application:\n *\n * ```js\n * var util = require(\'util\');\n * var Options = require(\'options-cache\');\n *\n * function App(options) {\n *   Options.call(this, options);\n * }\n * util.inherits(App, Options);\n *\n * App.prototype.foo = function(value) {\n *   this.enable(value);\n * };\n *\n * App.prototype.bar = function(value) {\n *   if (this.enabled(value)) {\n *     // do something\n *   }\n * };\n * ```\n *\n * @class Options\n * @param {Object} `options`\n * @constructor\n * @api public\n */',
  original: 'var Options = module.exports = function(options) {',
  end: 37,
  heading: '',
  description: '\n\n**Example:**\n\nIn your application:\n\n```js\nvar util = require(\'util\');\nvar Options = require(\'options-cache\');\n\nfunction App(options) {\n  Options.call(this, options);\n}\nutil.inherits(App, Options);\n\nApp.prototype.foo = function(value) {\n  this.enable(value);\n};\n\nApp.prototype.bar = function(value) {\n  if (this.enabled(value)) {\n    // do something\n  }\n};\n```',
  class: 'Options',
  param: '{Object} `options`',
  constructor: true,
  api: 'public',
  lead: 'Initialize a new `Options` cache.',
  params: [{
    type: 'Object',
    name: 'options',
    description: ''
  }],
  line: NaN
} {
  begin: 40,
  type: 'property',
  receiver: 'this',
  name: 'options',
  value: 'options || {}',
  string: 'this.options',
  original: 'this.options = options || {};',
  line: NaN
} {
  type: 'comment',
  begin: 44,
  end: 61,
  string: '/**\n * ## .option\n *\n * Set or get an option.\n *\n * ```js\n * app.option(\'a\', true)\n * app.option(\'a\')\n * // => true\n * ```\n *\n * @method option\n * @param {String} `key`\n * @param {*} `value`\n * @return {*}\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  line: NaN
} {
  begin: 44,
  type: 'method',
  constructor: 'Options',
  name: 'option',
  string: '/**\n * ## .option\n *\n * Set or get an option.\n *\n * ```js\n * app.option(\'a\', true)\n * app.option(\'a\')\n * // => true\n * ```\n *\n * @method option\n * @param {String} `key`\n * @param {*} `value`\n * @return {*}\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  original: 'Options.prototype.option = function(key, value) {',
  end: 61,
  heading: {
    level: 2,
    text: '.option'
  },
  description: '\n\n```js\napp.option(\'a\', true)\napp.option(\'a\')\n// => true\n```',
  method: 'option',
  param: ['{String} `key`', '{*} `value`'],
  return :['{*}', '{Object} `Options`to enable chaining'],
  api: 'public',
  lead: 'Set or get an option.',
  returns: [{
      type: undefined,
      name: undefined,
      description: '{*}'
    },
    {
      type: 'Object',
      name: 'Options',
      description: 'to enable chaining'
    }],
  params: [{
      type: 'String',
      name: 'key',
      description: ''
    },
    {
      type: '*',
      name: 'value',
      description: ''
    }],
  line: NaN,
  title: '## .option'
} {
  type: 'comment',
  begin: 75,
  end: 89,
  string: '/**\n * ## .set\n *\n * Assign `value` to `key` or return the value of `key`.\n *\n * ```js\n * app.set(\'foo\', true)\n * ```\n *\n * @method set\n * @param {String} `key`\n * @param {*} `value` The value to set.\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  line: NaN
} {
  begin: 75,
  type: 'method',
  constructor: 'Options',
  name: 'set',
  string: '/**\n * ## .set\n *\n * Assign `value` to `key` or return the value of `key`.\n *\n * ```js\n * app.set(\'foo\', true)\n * ```\n *\n * @method set\n * @param {String} `key`\n * @param {*} `value` The value to set.\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  original: 'Options.prototype.set = function(key, value) {',
  end: 89,
  heading: {
    level: 2,
    text: '.set'
  },
  description: '\n\n```js\napp.set(\'foo\', true)\n```',
  method: 'set',
  param: ['{String} `key`', '{*} `value` The value to set.'],
  return :'{Object} `Options`to enable chaining',
  api: 'public',
  lead: 'Assign `value` to `key` or return the value of `key`.',
  returns: [{
    type: 'Object',
    name: 'Options',
    description: 'to enable chaining'
  }],
  params: [{
      type: 'String',
      name: 'key',
      description: ''
    },
    {
      type: '*',
      name: 'value',
      description: 'The value to set.'
    }],
  line: NaN,
  title: '## .set'
} {
  type: 'comment',
  begin: 97,
  end: 111,
  string: '/**\n * ## .get\n *\n * Return the stored value of `key`.\n *\n * ```js\n * app.set(\'foo\', true)\n * app.get(\'foo\')\n * //=> true\n * ```\n *\n * @method get\n * @param {String} `key`\n * @api public\n */',
  line: NaN
} {
  begin: 97,
  type: 'method',
  constructor: 'Options',
  name: 'get',
  string: '/**\n * ## .get\n *\n * Return the stored value of `key`.\n *\n * ```js\n * app.set(\'foo\', true)\n * app.get(\'foo\')\n * //=> true\n * ```\n *\n * @method get\n * @param {String} `key`\n * @api public\n */',
  original: 'Options.prototype.get = function(key) {',
  end: 111,
  heading: {
    level: 2,
    text: '.get'
  },
  description: '\n\n```js\napp.set(\'foo\', true)\napp.get(\'foo\')\n//=> true\n```',
  method: 'get',
  param: '{String} `key`',
  api: 'public',
  lead: 'Return the stored value of `key`.',
  params: [{
    type: 'String',
    name: 'key',
    description: ''
  }],
  line: NaN,
  title: '## .get'
} {
  type: 'comment',
  begin: 118,
  end: 136,
  string: '/**\n * ## .enabled\n *\n * Check if `key` is enabled (truthy).\n *\n * ```js\n * app.enabled(\'foo\')\n * // => false\n *\n * app.enable(\'foo\')\n * app.enabled(\'foo\')\n * // => true\n * ```\n *\n * @method enabled\n * @param {String} `key`\n * @return {Boolean}\n * @api public\n */',
  line: NaN
} {
  begin: 118,
  type: 'method',
  constructor: 'Options',
  name: 'enabled',
  string: '/**\n * ## .enabled\n *\n * Check if `key` is enabled (truthy).\n *\n * ```js\n * app.enabled(\'foo\')\n * // => false\n *\n * app.enable(\'foo\')\n * app.enabled(\'foo\')\n * // => true\n * ```\n *\n * @method enabled\n * @param {String} `key`\n * @return {Boolean}\n * @api public\n */',
  original: 'Options.prototype.enabled = function(key) {',
  end: 136,
  heading: {
    level: 2,
    text: '.enabled'
  },
  description: '\n\n```js\napp.enabled(\'foo\')\n// => false\n\napp.enable(\'foo\')\napp.enabled(\'foo\')\n// => true\n```',
  method: 'enabled',
  param: '{String} `key`',
  return :'{Boolean}',
  api: 'public',
  lead: 'Check if `key` is enabled (truthy).',
  returns: [{
    type: undefined,
    name: undefined,
    description: '{Boolean}'
  }],
  params: [{
    type: 'String',
    name: 'key',
    description: ''
  }],
  line: NaN,
  title: '## .enabled'
} {
  type: 'comment',
  begin: 143,
  end: 161,
  string: '/**\n * ## .disabled\n *\n * Check if `key` is disabled (falsey).\n *\n * ```js\n * app.disabled(\'foo\')\n * // => true\n *\n * app.enable(\'foo\')\n * app.disabled(\'foo\')\n * // => false\n * ```\n *\n * @method disabled\n * @param {String} `key`\n * @return {Boolean}\n * @api public\n */',
  line: NaN
} {
  begin: 143,
  type: 'method',
  constructor: 'Options',
  name: 'disabled',
  string: '/**\n * ## .disabled\n *\n * Check if `key` is disabled (falsey).\n *\n * ```js\n * app.disabled(\'foo\')\n * // => true\n *\n * app.enable(\'foo\')\n * app.disabled(\'foo\')\n * // => false\n * ```\n *\n * @method disabled\n * @param {String} `key`\n * @return {Boolean}\n * @api public\n */',
  original: 'Options.prototype.disabled = function(key) {',
  end: 161,
  heading: {
    level: 2,
    text: '.disabled'
  },
  description: '\n\n```js\napp.disabled(\'foo\')\n// => true\n\napp.enable(\'foo\')\napp.disabled(\'foo\')\n// => false\n```',
  method: 'disabled',
  param: '{String} `key`',
  return :'{Boolean}',
  api: 'public',
  lead: 'Check if `key` is disabled (falsey).',
  returns: [{
    type: undefined,
    name: undefined,
    description: '{Boolean}'
  }],
  params: [{
    type: 'String',
    name: 'key',
    description: ''
  }],
  line: NaN,
  title: '## .disabled'
} {
  type: 'comment',
  begin: 168,
  end: 183,
  string: '/**\n * ## .enable\n *\n * Enable `key`.\n *\n * **Example**\n *\n * ```js\n * app.enable(\'foo\')\n * ```\n *\n * @method enable\n * @param {String} `key`\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  line: NaN
} {
  begin: 168,
  type: 'method',
  constructor: 'Options',
  name: 'enable',
  string: '/**\n * ## .enable\n *\n * Enable `key`.\n *\n * **Example**\n *\n * ```js\n * app.enable(\'foo\')\n * ```\n *\n * @method enable\n * @param {String} `key`\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  original: 'Options.prototype.enable = function(key) {',
  end: 183,
  heading: {
    level: 2,
    text: '.enable'
  },
  description: '\n\n**Example**\n\n```js\napp.enable(\'foo\')\n```',
  method: 'enable',
  param: '{String} `key`',
  return :'{Object} `Options`to enable chaining',
  api: 'public',
  lead: 'Enable `key`.',
  returns: [{
    type: 'Object',
    name: 'Options',
    description: 'to enable chaining'
  }],
  params: [{
    type: 'String',
    name: 'key',
    description: ''
  }],
  line: NaN,
  title: '## .enable'
} {
  type: 'comment',
  begin: 190,
  end: 205,
  string: '/**\n * ## .disable\n *\n * Disable `key`.\n *\n * **Example**\n *\n * ```js\n * app.disable(\'foo\')\n * ```\n *\n * @method disable\n * @param {String} `key` The option to disable.\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  line: NaN
} {
  begin: 190,
  type: 'method',
  constructor: 'Options',
  name: 'disable',
  string: '/**\n * ## .disable\n *\n * Disable `key`.\n *\n * **Example**\n *\n * ```js\n * app.disable(\'foo\')\n * ```\n *\n * @method disable\n * @param {String} `key` The option to disable.\n * @return {Object} `Options`to enable chaining\n * @api public\n */',
  original: 'Options.prototype.disable = function(key) {',
  end: 205,
  heading: {
    level: 2,
    text: '.disable'
  },
  description: '\n\n**Example**\n\n```js\napp.disable(\'foo\')\n```',
  method: 'disable',
  param: '{String} `key` The option to disable.',
  return :'{Object} `Options`to enable chaining',
  api: 'public',
  lead: 'Disable `key`.',
  returns: [{
    type: 'Object',
    name: 'Options',
    description: 'to enable chaining'
  }],
  params: [{
    type: 'String',
    name: 'key',
    description: 'The option to disable.'
  }],
  line: NaN,
  title: '## .disable'
};