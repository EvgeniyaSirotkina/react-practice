import React from "react";

class FormWithRef extends React.Component {
  constructor() {
      super();
      this.state = {
        phone: "",
        card: "",
        message: ""
      };
      this.phoneRef = React.createRef();
      this.cardRef = React.createRef();
      this.messageRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState(()=> ({ [event.target.name]: event.target.value }), () => {
        if (this.state.phone.length === 7) {
            this.cardRef.current.focus();
        }

        if (this.state.card.length === 16) {
            this.messageRef.current.focus();
        }
    });
  };
  
  componentDidMount() {
    this.phoneRef.current.focus();
  }

  render() {
    const { phone, card, message } = this.state;

    return (
      <>
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={phone}
          onChange={this.handleChange}
          ref={this.phoneRef}
        />
        <br />
        <input
          type="text"
          name="card"
          placeholder="card"
          value={card}
          onChange={this.handleChange}
          ref={this.cardRef}
        />
        <br />
        <input
          type="text"
          name="message"
          placeholder="message"
          value={message}
          onChange={this.handleChange}
          ref={this.messageRef}
        />
      </>
    );
  }
}

export { FormWithRef };
