import React from 'react';
import addons from '@kadira/storybook-addons';
import HelloWorld from './containers/HelloWorld'

export function register() {
  addons.register('kadirahq/storybook-addon-hello', api => {
    addons.addPanel('kadirahq/storybook-addon-hello', {
      title: 'Hello World',
      render: () => <HelloWorld />
    });
  });
}
