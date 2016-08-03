'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HELLO_MESSAGE_ID = exports.HELLO_PANEL_ID = exports.HELLO_ADDON_ID = undefined;
exports.hello = hello;
exports.register = register;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybookAddons = require('@kadira/storybook-addons');

var _storybookAddons2 = _interopRequireDefault(_storybookAddons);

var _HelloWorld = require('./containers/HelloWorld');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// addons, panels and events get unique names using a prefix
var HELLO_ADDON_ID = exports.HELLO_ADDON_ID = 'kadirahq/storybook-addon-hello';
var HELLO_PANEL_ID = exports.HELLO_PANEL_ID = HELLO_ADDON_ID + '/hello-panel';
var HELLO_MESSAGE_ID = exports.HELLO_MESSAGE_ID = HELLO_ADDON_ID + '/hello-message';

// hello function will return a function which will set the text inside
// the "Hello World" panel. The new text is sent using the channel.
function hello(text) {
  // get `channel` from the addon API
  var channel = _storybookAddons2.default.getChannel();
  // send the message using the channel
  channel.emit(HELLO_MESSAGE_ID, { text: 'Hello ' + text });
}

// register function will call addons.register to register an addon loader
// This is executed when importing `@kadira/storybook-addon-hello/register`
function register() {
  // addons.register can be used to register a new addon loader function.
  // Addon loader will receive `api` as an argument which can be used to
  // interact with the storybook manager. We're not using it in this addon.
  _storybookAddons2.default.register(HELLO_ADDON_ID, function (api) {
    // get `channel` from the addon API
    var channel = _storybookAddons2.default.getChannel();
    // addons.addPanel can be used to add a new panel to storybook manager
    // The `title` field will be used as the tab title and the `render` field
    // will be executed to render the tab content.
    _storybookAddons2.default.addPanel(HELLO_PANEL_ID, {
      title: 'Hello World',
      render: function render() {
        return _react2.default.createElement(_HelloWorld2.default, { channel: channel });
      }
    });
  });
}