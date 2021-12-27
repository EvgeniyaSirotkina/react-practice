import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span style={{ padding: "0 5px" }}>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;