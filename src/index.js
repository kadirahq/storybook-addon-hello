import React from 'react';
import addons from '@kadira/storybook-addons';
import HelloWorld from './containers/HelloWorld'

// addons, panels and events get unique names using a prefix
export const HELLO_ADDON_ID = 'kadirahq/storybook-addon-hello';
export const HELLO_PANEL_ID = `${HELLO_ADDON_ID}/hello-panel`;
export const HELLO_MESSAGE_ID = `${HELLO_ADDON_ID}/hello-message`;

// hello function will return a function which will set the text inside
// the "Hello World" panel. The new text is sent using the channel.
export function hello(text) {
  // get `channel` from the addon API
  const channel = addons.getChannel();
  // send the message using the channel
  channel.emit(HELLO_MESSAGE_ID, {text: `Hello ${text}`});
}

// register function will call addons.register to register an addon loader
// This is executed when importing `@kadira/storybook-addon-hello/register`
export function register() {
  // addons.register can be used to register a new addon loader function.
  // Addon loader will receive `api` as an argument which can be used to
  // interact with the storybook manager. We're not using it in this addon.
  addons.register(HELLO_ADDON_ID, api => {
    // get `channel` from the addon API
    const channel = addons.getChannel();
    // addons.addPanel can be used to add a new panel to storybook manager
    // The `title` field will be used as the tab title and the `render` field
    // will be executed to render the tab content.
    addons.addPanel(HELLO_PANEL_ID, {
      title: 'Hello World',
      render: () => <HelloWorld channel={channel} />
    });
  });
}
