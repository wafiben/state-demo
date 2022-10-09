import React, { Component } from "react";

export default class App extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    if (this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
