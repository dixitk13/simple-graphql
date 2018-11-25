import React from "react";
import "./box.styles.scss";

import MarkDown from "../MarkDown";

const BoxView = ({ lines, currentLine, addTodo, updateCurrentLine }) => {
  return (
    <div className="box-view-container">
      <div className="input-box">
        <MarkDown lines={lines} />
        <input
          className="text-box"
          type="text"
          value={currentLine}
          onChange={updateCurrentLine}
        />
      </div>
      <input
        type="button"
        className="add-button"
        value="Add"
        onClick={addTodo}
      />
    </div>
  );
};

export default BoxView;
