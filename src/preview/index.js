import addons from '@kadira/storybook-addons';
import { EVENT_ID } from '../shared';

// init function will be executed once when the storybook loads for the
// first time. This is a good place to add global listeners on channel.
export function init() {
  const channel = addons.getChannel();
  // TODO handle story change events
}

// hello function will return a function which will set the text inside
// the "Hello World" panel. The new text is sent using the channel.
export function hello(text) {
  return function () {
    const channel = addons.getChannel();
    channel.emit(EVENT_ID, {text});
  };
}
