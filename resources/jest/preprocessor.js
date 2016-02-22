'use strict';

var babel = require('babel-core');

module.exports = {
  process: function process(src, filename) {
    var options = {
      presets: ['es2015', 'stage-1'],
      plugins: [
        'syntax-flow',
        'transform-flow-strip-types'
      ],
      filename: filename,
      compact: false
    };

    var result = babel.transform(src, options);

    return result.code;
  },
};
