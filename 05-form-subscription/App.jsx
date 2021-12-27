import React, { Component } from "react";
import { Form } from "./Form";

class App extends Component {
  state = {
    email: ""
  };

  handleSubmit = (email) => {
    this.setState({ email });
  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>React Forms</h1>
        <br />
        <Form handleSubmit={this.handleSubmit} />
        <br />
        {this.state.email ? (
          <h3>
            Your email {this.state.email} has been subscribed on our updates!
          </h3>
        ) : null}
      </div>
    );
  }
}

export default App;
