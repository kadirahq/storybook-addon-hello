import React, { Component } from 'react';
import { hello } from '../';

const style = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

export default class Preview extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.state = {next: 1};
  }

  update(n) {
    hello(n);
    this.setState({next: n + 1});
  }

  render() {
    return (
      <div style={style.wrapper}>
        <button onClick={() => this.update(this.state.next)} >
          Hello {this.state.next}
        </button>
      </div>
    );
  }
}
