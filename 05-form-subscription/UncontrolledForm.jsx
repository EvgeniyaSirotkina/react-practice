import React from "react";

class UncontrolledForm extends React.Component {
  constructor() {
      super();

      this.phoneRef = React.createRef();
      this.cardRef = React.createRef();
      this.messageRef = React.createRef();
  }

  handleSubmit = (event) => {
      event.preventDefault();
      if (this.phoneRef.current.value.length < 7) {
        alert('Invalid phone number');
        return;
      }

      if (this.cardRef.current.value.length < 16) {
        alert('Invalid card number');
        return;
      }

      // send

      this.phoneRef.current.value = '';
      this.cardRef.current.value = '';
      this.messageRef.current.value = '';
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="phone"
          placeholder="phone"
          ref={this.phoneRef}
        />
        <br />
        <input
          type="text"
          name="card"
          placeholder="card"
          ref={this.cardRef}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="message"
          ref={this.messageRef}
        />
        <br />
        <button>Send</button>
      </form>
    );
  }
}

export { UncontrolledForm };
