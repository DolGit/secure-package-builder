'use strict';

exports.__esModule = true;
var babel = {
  presets: [['@babel/preset-env', {
    targets: {
      node: 'current'
    }
  }]]
};

exports.default = {
  presets: {
    babel: babel
  }
};
module.exports = exports['default'];