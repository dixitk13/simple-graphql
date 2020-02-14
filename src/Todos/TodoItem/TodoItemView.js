import React from "react";
import { Link } from "react-router-dom";

import { remove, view, pending, done } from "../../shared";
import MarkDown from "../../MarkDown";

// import classNames from "classnames";
/**
 *
 * // className={`todo-remove ${classNames({
 * //   "todo-complete": completed,
 * //   "todo-incomplete": !completed
 * // })}`}
 */

export const TodoItemView = ({ id, lines, completed, onChecked }) => {
  return (
    <div className="todo-item-container">
      <div
        onChange={() => onChecked(id, completed)}
        className="todo-status"
        type="checkbox"
      >
        {completed ? done() : pending()}
      </div>

      <div className="todo-title">
        <MarkDown lines={lines} />
      </div>
      <div className="todo-actions">
        <Link to={`/todos/${id}`} className="view">
          {view()}
        </Link>
        <div className="remove">{remove()}</div>
      </div>
    </div>
  );
};
