import React, { useState } from "react";
import BoxView from "./BoxView";

const defaultState = {
  lines: [
    { text: "default text" },
    { text: "some more default text", type: "bold" }
  ]
};

const Box = () => {
  const [lines, setLines] = useState(defaultState);

  const [newLines, setNewLines] = useState([]);

  const updateCurrentLine = event => {
    console.log(event);
  };

  const addTodo = event => {
    console.log("add todo ", event);
  };

  return (
    <BoxView
      {...lines}
      updateCurrentLine={updateCurrentLine}
      addTodo={addTodo}
    />
  );
};

export default Box;
