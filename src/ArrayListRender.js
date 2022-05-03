import { React, Component } from "react";

class ArrayListRender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Stationary: ["pen", "pencil", "Erase", "Sharpner"],
    };
  }

  render() {
    const dataItem = this.state.Stationary.map((Item, index) => {
      return (
        <li key={index} style={{ color: "blue" }}>
          {index + 1}.{Item}
        </li>
      );
    });
    return (
      <>
        <div>{dataItem}</div>
      </>
    );
  }
}

export default ArrayListRender;
