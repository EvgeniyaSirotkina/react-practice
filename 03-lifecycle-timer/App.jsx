import React, { Component } from "react";

class App extends Component {
  state = {
    timerValue: 0,
    isCounting: false
  };

  componentDidMount() {
    console.log("componentDidMount");
    const userTimerValue = localStorage.getItem("timerValue");
    if (userTimerValue) {
      this.setState({ timerValue: +userTimerValue });
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    localStorage.setItem("timerValue", this.state.timerValue);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    this.handleStop();
  }

  handleStart = () => {
    this.setState({
      isCounting: true
    });

    this.timerId = setInterval(() => {
      this.setState({ timerValue: this.state.timerValue + 1 });
    }, 1000);
  };

  handleStop = () => {
    clearInterval(this.timerId);
    this.setState({ isCounting: false });
  };

  handleReset = () => {
    clearInterval(this.timerId);
    this.setState({
      timerValue: 0,
      isCounting: false
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>React Timer</h1>
        <h2>{this.state.timerValue}</h2>
        {this.state.isCounting ? (
          <button style={{ margin: "2px" }} onClick={this.handleStop}>
            Stop
          </button>
        ) : (
          <button style={{ margin: "2px" }} onClick={this.handleStart}>
            Start
          </button>
        )}
        <button style={{ margin: "2px" }} onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
