import React from "react";

function Welcome(props) {
  let { name } = props;
  name = "steve";
  return <h1>Person Name: {name}</h1>;
}

export default Welcome;
