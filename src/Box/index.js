import React, { Component } from "react";
import BoxView from "./BoxView";

class Box extends Component {
  state = {
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
    console.log("add todo");
  };

  render() {
    return (
      <BoxView
        {...this.state}
        updateCurrentLine={this.updateCurrentLine}
        addTodo={this.addTodo}
      />
    );
  }
}

export default Box;
