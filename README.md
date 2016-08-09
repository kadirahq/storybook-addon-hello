# Hello World Addon

> **NOTE**
This is an example addon for Kadira Storybooks. Check the source code (and comments) to learn how to write addons. Also serves as a boilerplate for new addons.

The Hello World addon can be used to display a simple text message set by stories. This addon works with both [React Storybook](https://github.com/kadirahq/react-storybook) and [React Native Storybook](https://github.com/kadirahq/react-native-storybook).

![](docs/screenshot.png)

## Getting Started

First, install the addon

```shell
npm install -D @kadira/storybook-addon-hello
```

Add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import '@kadira/storybook-addon-hello/register';
```

Import the `sayHello` function and use it to create actions handlers. When creating action handlers, provide a string which should be visible on the panel.

```js
import { storiesOf } from '@kadira/storybook'
import { sayHello } from '@kadira/storybook-addon-hello'

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={ sayHello('Hello World') }>
      Hello World!
    </Button>
  ))
```
