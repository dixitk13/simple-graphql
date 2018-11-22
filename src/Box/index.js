import React, { Component } from "react";
import BoxView from "./BoxView";

class Box extends Component {
  state = {
    lines: [],
    currentLine: ""
  };

  updateCurrentLine = event => {
    console.log(event);
  };

  render() {
    return (
      <BoxView {...this.state} updateCurrentLine={this.updateCurrentLine} />
    );
  }
}

export default Box;
