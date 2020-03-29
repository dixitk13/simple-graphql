import React from "react";
import classNames from "classnames";

import { LineType } from "../constants";
import "./markdown.styles.scss";

const MarkDownView = ({ classes, lines, deleted }) => {
  return (
    <div
      className={classNames(`${classes} mark-down-lines-container`, {
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
    case LineType.BOLD:
      return <BoldLineView {...rest} />;
    case LineType.STRIKE:
      return <StrikeLineView {...rest} />;
    case LineType.ITALIC:
      return <ItalicLineView {...rest} />;
    case LineType.COLOR:
      return <ColorLineView {...rest} />;
    case LineType.CODE:
      return <CodeLineView {...rest} />;
    default:
      return <LineView {...rest} />;
  }
};

const StrikeLineView = ({ text }) => {
  return <div className="strike-line">{text}</div>;
};

const ItalicLineView = ({ text }) => {
  return <div className="italic-line">{text}</div>;
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
