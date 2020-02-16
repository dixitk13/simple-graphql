import React from "react";
import "./markdown.styles.scss";

const MarkDownLines = ({ lines }) => {
  return (
    <div className="mark-down-lines-container">
      {lines.map((line, index) => (
        <RenderLine key={`line-${index}`} type={line.type} {...line} />
      ))}
    </div>
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
  return <div className="line">{text}</div>;
};

const CodeLine = ({ text }) => {
  return (
    <div className="code-line">
      <code>{text}</code>
    </div>
  );
};

const BoldLine = ({ text }) => {
  return <div className="bold-line">{text}</div>;
};

const ColorLine = ({ text, color }) => {
  return <div style={{ color }}>{text}</div>;
};

export default MarkDownLines;
