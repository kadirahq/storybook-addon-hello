import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { sayHello } from '../src';

storiesOf('Button', module)
  .add('Hello World', () => (
    <button onClick={sayHello('World')}>Say "Hello World"</button>
  ))
  .add('Hello Earth', () => (
    <button onClick={sayHello('Earth')}>Say "Hello Earth"</button>
  ));
