import React from "react";
import classNames from "classnames";
import "./markdown.styles.scss";

const MarkDownView = ({ lines, deleted }) => {
  console.log(">>: MarkDownLines -> deleted", deleted);
  return (
    <div
      className={classNames("mark-down-lines-container", {
        strike: deleted
      })}
    >
      {lines &&
        lines.map((line, index) => (
          <RenderLineView key={`line-${index}`} type={line.type} {...line} />
        ))}
    </div>
  );
};

const RenderLineView = ({ type, ...rest }) => {
  switch (type) {
    case "bold":
      return <BoldLineView {...rest} />;
    case "color":
      return <ColorLineView {...rest} />;
    case "code":
      return <CodeLineView {...rest} />;
    default:
      return <LineView {...rest} />;
  }
};

const LineView = ({ text }) => {
  return <div className="line">{text}</div>;
};

const CodeLineView = ({ text }) => {
  return (
    <div className="code-line">
      <code>{text}</code>
    </div>
  );
};

const BoldLineView = ({ text }) => {
  return <div className="bold-line">{text}</div>;
};

const ColorLineView = ({ text, color }) => {
  return <div style={{ color }}>{text}</div>;
};

export default MarkDownView;
