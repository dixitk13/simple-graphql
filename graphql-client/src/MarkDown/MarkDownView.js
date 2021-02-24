import React from "react";
import classNames from "classnames";

import { LineType } from "../constants";
import "./markdown.styles.scss";

const MarkDownView = ({ classes, lines, deleted }) => {
  return (
    <article
      className={classNames(`${classes} mark-down-lines-container`, {
        strike: deleted,
      })}
    >
      {lines?.map((line, index) => (
        <RenderLineView key={`line-${index}`} type={line.type} {...line} />
      ))}
    </article>
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
  return <p className="strike-line">{text}</p>;
};

const ItalicLineView = ({ text }) => {
  return <p className="italic-line">{text}</p>;
};

const LineView = ({ text }) => {
  return <p className="line">{text}</p>;
};

const CodeLineView = ({ text }) => {
  return (
    <p className="code-line">
      <code>{text}</code>
    </p>
  );
};

const BoldLineView = ({ text }) => {
  return <p className="bold-line">{text}</p>;
};

const ColorLineView = ({ text, color }) => {
  return <p style={{ color }}>{text}</p>;
};

export default MarkDownView;
