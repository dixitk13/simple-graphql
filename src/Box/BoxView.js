import React from "react";
import "./box.styles.scss";
import MarkDown from "../MarkDown";
const BoxView = ({ lines, currentLine, updateCurrentLine }) => {
  return (
    <div className="box-view-container">
      <MarkDown lines={lines} />
      <input
        className="text-box"
        type="text"
        value={currentLine}
        onChange={updateCurrentLine}
      />
    </div>
  );
};

export default BoxView;
