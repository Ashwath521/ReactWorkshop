import React, { Component } from "react";
class Greet extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "welcome visitor",
    };
  }

  inputNameEvent = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <div>
        Enter your name:
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.inputNameEvent(event)}
        />
        <h1>GoodMorning!!!{this.state.name}</h1>
      </div>
    );
  }
}

export default Greet;
