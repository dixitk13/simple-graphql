import React from "react";
import { useMutation } from "react-apollo";

import { TodoItemView } from "./TodoItemView";
import { UPDATE_TODO } from "./todoItem.graphql";

export const TodoItem = ({ id, completed, deleted, ...rest }) => {
  const [updateTodo, { loading, error }] = useMutation(UPDATE_TODO);

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

  return (
    <TodoItemView
      error={error}
      loading={loading}
      id={id}
      completed={completed}
      deleted={deleted}
      toggleCheckedHandler={toggleCheckedHandler}
      toggleDeletedHandler={toggleDeletedHandler}
      {...rest}
    />
  );
};
