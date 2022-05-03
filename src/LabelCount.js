import React, { Component } from "react";
import HocComponent from "./HocComponent";
class LabelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>
          <h1>Label Component</h1>
        </div>
        count-{this.props.Count}
        <label onMouseEnter={this.props.IncCnt}>Move the cursor here</label>
      </>
    );
  }
}

export default HocComponent(LabelComponent);
