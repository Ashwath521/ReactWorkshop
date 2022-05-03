import React, { Component } from "react";

const HocComponent = (OriginalComponent) => {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
    IncrementCount() {
      this.setState(
        {
          count: this.state.count + 1,
        },
        () => {
          console.log("IncrementCount");
        }
      );
    }
    render() {
      return (
        <div>
          <h1>I am from base component</h1>
          <OriginalComponent
            Count={this.state.count}
            IncCnt={() => this.IncrementCount()}
          />
        </div>
      );
    }
  };
};

export default HocComponent;
