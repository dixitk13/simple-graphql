import React from "react";
// TODO make these JSX like Components
export const remove = () => "❌";
export const view = () => "📚";
export const done = () => "✅";
export const pending = () => "⏱️";

// export const completedIcon = status => (status ? done() : pending());

export const Completed = ({ flag }) => (flag ? done() : pending());

export const Spinner = ({ text }) => (
  <div className="todo-loading">{text || "Loading..."}</div>
);
export const Header = ({ text }) => (
  <div className="center-todo-header">{text}</div>
);
