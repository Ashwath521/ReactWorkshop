import React, { Component } from "react";
import HocComponent from "./HocComponent";

export class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <h1>ButtonComponent</h1>
        </div>
        count-{this.props.Count}
        <button onClick={this.props.IncCnt}>Increment</button>
      </>
    );
  }
}

export default HocComponent(ButtonComponent);
