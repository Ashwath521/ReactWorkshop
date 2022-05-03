//React components are also known as controlled components
// React components are also responsible to / manage interactions
// between form elements and user inputs
// Bind the Form state to the component State
// It State has to be modified only using setState()
// Single Source of truth
// Every state mutation will have an associate handler function
import React, { Component } from "react";

class FormControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  render() {
    return (
      <>
        <label>User Name:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.changeName(e)}
        />
      </>
    );
  }
}

export default FormControl;
