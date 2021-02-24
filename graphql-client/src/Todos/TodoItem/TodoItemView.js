import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { Remove, View, Pending, Done } from "../../shared";
import MarkDown from "../../MarkDown";

export const TodoItemView = ({
  toggleCheckedHandler,
  toggleDeletedHandler,
  loading,
  error,
  id,
  lines,
  completed,
  deleted,
}) => {
  if (error) console.log("Error in Update");

  return (
    <div className="todo-item-container">
      <div className="todo-l1">
        <button
          onClick={toggleCheckedHandler}
          className={classNames("todo-status", { loading })}
        >
          {completed ? <Done /> : <Pending />}
        </button>

        <div className="todo-actions">
          <Link to={`/todos/${id}`} className="view">
            <View />
          </Link>
          <button className="remove" onClick={toggleDeletedHandler}>
            <Remove />
          </button>
        </div>
      </div>

      <div className="todo-l2">
        <MarkDown deleted={deleted} lines={lines} />
      </div>
    </div>
  );
};
