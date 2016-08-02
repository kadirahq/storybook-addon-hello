'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _HelloWorld = require('./containers/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register() {
  _storybookAddons2.default.register('kadirahq/storybook-addon-hello', function (api) {
    _storybookAddons2.default.addPanel('kadirahq/storybook-addon-hello', {
      title: 'Hello World',
      render: function render() {
        return _react2.default.createElement(_HelloWorld2.default, null);
      }
    });
  });
}