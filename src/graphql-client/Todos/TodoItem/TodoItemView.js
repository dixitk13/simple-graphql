import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import classNames from "classnames";

import { Remove, View, Pending, Done } from "../../shared";
import MarkDown from "../../MarkDown";

import { UpdateChecked } from "./todoItem.graphql";

export const TodoItemView = ({ id, lines, completed, deleted }) => {
  const [updateTodo, { loading, error: mutationError }] = useMutation(
    UpdateChecked
  );

  const toggleCheckedHandler = () => {
    updateTodo({
      variables: { updateInput: { id, deleted, completed: !completed } }
    });
  };

  const toggleDeletedHandler = () => {
    updateTodo({
      variables: { updateInput: { id, completed, deleted: !deleted } }
    });
  };

  if (mutationError) console.log("Error in Update");

  return (
    <div className="todo-item-container">
      <div
        onClick={toggleCheckedHandler}
        className={classNames("todo-status", { loading })}
      >
        {completed ? <Done /> : <Pending />}
      </div>

      <div className="todo-title">
        <MarkDown deleted={deleted} lines={lines} />
      </div>
      <div className="todo-actions">
        <Link to={`/todos/${id}`} className="view">
          <View />
        </Link>
        <div className="remove" onClick={toggleDeletedHandler}>
          <Remove />
        </div>
      </div>
    </div>
  );
};
