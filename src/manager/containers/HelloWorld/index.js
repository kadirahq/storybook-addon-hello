import React, { Component } from 'react';
import addons from '@kadira/storybook-addons';
import HelloWorld from '../../components/HelloWorld/';
import { EVENT_ID } from '../../../shared';

export default class Container extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {text: ''};
    this.channel = addons.getChannel();
    this._listener = d => this.setState({text: d.text});
  }

  componentDidMount() {
    this.channel.on(EVENT_ID, this._listener);
  }

  componentWillUnmount() {
    this.channel.removeListener(EVENT_ID, this._listener);
  }

  render() {
    return <HelloWorld text={this.state.text} />;
  }
}
