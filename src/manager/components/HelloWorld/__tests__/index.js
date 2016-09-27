import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../';

describe('Component: HelloWorld', function () {
  it('should render given text', function () {
    const comp = TestUtils.renderIntoDocument(<HelloWorld text="hello" />);
    const node = ReactDOM.findDOMNode(comp);
    expect(node.textContent).toEqual('hello');
  });
});
