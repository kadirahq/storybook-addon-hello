import React from 'react';
import addons from '@kadira/storybook-addons';
import HelloWorld from './containers/HelloWorld'
import { ADDON_ID, PANEL_ID } from '../shared';

// init function will be executed once when the storybook loads for the
// first time. This is a good place to add channel listeners and panels.
export function init() {
  addons.register(ADDON_ID, api => {
    // add 'Hello World' panel
    addons.addPanel(PANEL_ID, {
      title: 'Hello World',
      render: () => <HelloWorld />
    });
  });
}
