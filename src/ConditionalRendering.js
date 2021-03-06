import { React, Component } from "react";

class TryConditionalRendering extends Component {
  render() {
    let value = 1;
    let myLayout = null;
    if (value == 1)
      myLayout = (
        <div style={{ color: "red" }}>
          <h1>Layout1</h1>
        </div>
      );
    else
      myLayout = (
        <div style={{ color: "green" }}>
          <h1>Layout2</h1>
        </div>
      );
    return (
      <>
        <div>
          <h1>{myLayout}</h1>
        </div>
      </>
    );
  }
}

export default TryConditionalRendering;
