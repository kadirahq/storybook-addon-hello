import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { hello } from '../preview';

storiesOf('Button', module)
  .add('Hello World', () => (
    <button onClick={hello('Hello World')}>Say "Hello World"</button>
  ))
  .add('Hello Earth', () => (
    <button onClick={hello('Hello Earth')}>Say "Hello Earth"</button>
  ));
