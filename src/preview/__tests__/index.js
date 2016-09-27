import addons from '@kadira/storybook-addons';
import { EVENT_ID } from '../../shared';
import { init, hello } from '../';

describe('init', function () {
  it('should do nothing', function () {
    init();
  });
});

describe('hello', function () {
  it('hello should return a function', function () {
    expect(typeof hello('world')).toBe('function');
  });
});

describe('hello handler', function () {
  it('hello handler should emit event to channel', function () {
    const messages = [];
    addons._channel = {
      emit: (...args) => messages.push(args),
    };
    const random = Math.random().toString(16).slice(2);
    const handler = hello(random);
    handler();
    expect(messages).toEqual([ [EVENT_ID, {text: random}] ]);
  });
});
