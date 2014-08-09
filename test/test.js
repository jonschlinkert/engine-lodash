/*!
 * engine-cache <https://github.com/jonschlinkert/engine-cache>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var should = require('should');
var lodash = require('..');

describe('engines', function() {

  it('should render content with lodash.', function(done) {
    var ctx = {name: 'Jon Schlinkert'};

    lodash.render('<%= name %>', ctx, function (err, content) {
      content.should.equal('Jon Schlinkert');
      done();
    });
  });

  it('should use custom delimiters: swig.', function(done) {
    var ctx = {name: 'Jon Schlinkert', delims: ['{%', '%}']};

    lodash.render('{%= name %}', ctx, function (err, content) {
      content.should.equal('Jon Schlinkert');
      done();
    });
  });

  it('should use custom delimiters: hbs.', function(done) {
    var ctx = {name: 'Jon Schlinkert', delims: ['{{', '}}']};

    lodash.render('{{= name }}', ctx, function (err, content) {
      content.should.equal('Jon Schlinkert');
      done();
    });
  });

  it('should use helpers registered on the imports property.', function(done) {
    var ctx = {
      name: 'Jon Schlinkert',
      imports: {
        include: function(name) {
          var filepath = path.join('test/fixtures', name);
          return fs.readFileSync(filepath, 'utf8');
        },
        upper: function(str) {
          return str.toUpperCase()
        }
      }
    };

    lodash.render('<%= upper(include("content.tmpl")) %>', ctx, function (err, content) {
      content.should.equal('JON SCHLINKERT');
      done();
    });
  });
});
