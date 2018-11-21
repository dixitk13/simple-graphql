import React from "react";
import "./todos.styles.scss";

export const TodosView = ({ todos, ...rest }) => {
  return (
    <div className="todos-view-container">
      <div className="todos-count">
        <div className="value">TODOS</div>
        <div className="todos-list">{todos}</div>
      </div>
      {/*<Counter {...rest} />*/}
    </div>
  );
};

const Counter = ({ value, increment, decrement }) => {
  return (
    <div className="simple-counter">
      <div className="value">{value}</div>
      <div className="action-holder">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrease</button>
      </div>
    </div>
  );
};
export default TodosView;
