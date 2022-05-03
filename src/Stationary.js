import React, { Component } from "react";
class Stationary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ["pen", "pencil", "Eraser", "pen"],
    };
  }
  render() {
    return (
      <>
        <div>
          {this.state.item.map((Data) => {
            return <li>{Data}</li>;
          })}
        </div>
      </>
    );
  }
}

export default Stationary;
