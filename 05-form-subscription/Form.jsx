import React from "react";

class Form extends React.Component {
  state = {
    email: {
      value: "",
      isValid: false
    },
    subscription: false
  };

  validateEmail = () => {
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        this.state.email.value.toLocaleLowerCase()
      )
    ) {
      this.setState({
        email: { value: this.state.email.value, isValid: false }
      });
    } else {
      this.setState({
        email: { value: this.state.email.value, isValid: true }
      });
    }
  };

  handleEmail = (event) => {
    this.setState({ email: { value: event.target.value } });
  };

  handleCheckbox = (event) => {
    this.setState({ subscription: event.target.checked });
  };

  render() {
    const { handleSubmit } = this.props;
    const { email, subscription } = this.state;
    const formIsValid = email.isValid && subscription;

    return (
      <>
        <input
          name="email"
          placeholder="Email"
          value={email.value}
          onChange={this.handleEmail}
          onBlur={this.validateEmail}
          required
        />
        <br />
        {!this.state.email.isValid && this.state.email.value ? (
          <span
            style={{
              fontSize: "8",
              color: "red",
              margin: "2px 0"
            }}
          >
            Email is not valid
          </span>
        ) : null}
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            value={subscription}
            onChange={this.handleCheckbox}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button
          style={{
            margin: "10px 0"
          }}
          disabled={!formIsValid}
          onClick={() => handleSubmit(email.value)}
          title={
            !formIsValid
              ? "You need to input a valid email and agree with terms and conditions"
              : null
          }
        >
          Subscribe
        </button>
      </>
    );
  }
}

export { Form };
