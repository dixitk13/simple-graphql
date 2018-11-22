import React, { Fragment } from "react";
import "./box.styles.scss";

const BoxView = ({ lines, currentLine, updateCurrentLine }) => {
  return (
    <div className="box-view-container">
      <MarkDownLines lines={lines} />
      <input
        className="text-box"
        type="text"
        value={currentLine}
        onChange={updateCurrentLine}
      />
    </div>
  );
};

const MarkDownLines = ({ lines }) => {
  return (
    <Fragment>
      {lines.map(line => <RenderLine type={line.type} {...line} />)}
    </Fragment>
  );
};

const RenderLine = ({ type, ...rest }) => {
  switch (type) {
    case "text":
      return <Line {...rest} />;
    case "bold":
      return <BoldLine {...rest} />;
    default:
      return <div>Something went wrong.</div>;
  }
};

const Line = ({ text }) => {
  return <span className="line">{text}</span>;
};

// TODO: no strong
const BoldLine = ({ text }) => {
  return <span className="bold-line">{text}</span>;
};

export default BoxView;
