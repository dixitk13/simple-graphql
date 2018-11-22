import { Fragment } from "react";
import React from "react";

const MarkDownLines = ({ lines }) => {
  return (
    <Fragment>
      {lines.map((line, index) => (
        <RenderLine key={`line-${index}`} type={line.type} {...line} />
      ))}
    </Fragment>
  );
};

const RenderLine = ({ type, ...rest }) => {
  switch (type) {
    case "bold":
      return <BoldLine {...rest} />;
    case "color":
      return <ColorLine {...rest} />;
    case "code":
      return <CodeLine {...rest} />;
    default:
      return <Line {...rest} />;
  }
};

const Line = ({ text }) => {
  return <span className="line">{text}</span>;
};

const CodeLine = ({ text }) => {
  return <code>{text}</code>;
};

const BoldLine = ({ text }) => {
  return <span className="bold-line">{text}</span>;
};

const ColorLine = ({ text, color }) => {
  return <span style={{ color }}>{text}</span>;
};

export default MarkDownLines;
