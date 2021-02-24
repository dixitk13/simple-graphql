import React from "react";
import "./shared.styles.scss";

// TODO make these JSX like Components
export const Remove = () => "❌";
export const View = () => "📂";
export const Done = () => "✅";
export const Pending = () => "⭕";
export const LeftIcon = () => "◀️";

export const Back = () => {
  return (
    <div className="shared-back-btn">
      <div>Back</div>
      <LeftIcon />
    </div>
  );
};
// export const completedIcon = status => (status ? done() : pending());

export const Completed = ({ flag, showText }) => {
  if (!showText) return flag ? <Done /> : <Pending />;
  if (flag)
    return (
      <p>
        <Done />
        Status: Compeleted!
      </p>
    );
  return (
    <p>
      <Pending />
      Status: Pending...
    </p>
  );
};

export const Spinner = ({ text }) => (
  <div className="shared-todo-loading">{text || "Loading..."}</div>
);
export const Header = ({ text }) => (
  <h1 className="shared-center-todo-header">{text}</h1>
);
