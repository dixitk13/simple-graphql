import React from "react";
import "./box.styles.scss";

import MarkDown from "../MarkDown";

const BoxView = ({ lines, currentLine, addTodo, updateCurrentLine }) => {
  return (
    <div className="box-preview-container">
      <div className="box-lf-container preview-box">
        <MarkDown classes="box-left" lines={lines} />
        <div className="box-right block" />
      </div>
      <div className="box-lf-container box-view-container">
        <div className="box-left input-box">
          <input
            className="text-box"
            type="text"
            value={currentLine}
            onChange={updateCurrentLine}
          />
        </div>
        <input
          type="button"
          className="box-right add-button"
          value="Add"
          onClick={addTodo}
        />
      </div>
    </div>
  );
};

export default BoxView;
