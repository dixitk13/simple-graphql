import React from "react";
import BoxView from "./BoxView";

const Box = () => {
  const defaultLines = {
    lines: [
      { text: "default text" },
      { text: "some more default text", type: "bold" }
    ],
    currentLine: ""
  };

  updateCurrentLine = event => {
    console.log(event);
  };

  addTodo = event => {
    console.log("add todo ", event);
  };

  return (
    <BoxView
      {...defaultLines}
      updateCurrentLine={this.updateCurrentLine}
      addTodo={this.addTodo}
    />
  );
};

export default Box;
