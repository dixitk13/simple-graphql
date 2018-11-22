import React, { Fragment } from "react";
import "./todos.styles.scss";

import MarkDown from "../MarkDown";
import { Query } from "react-apollo";

export const TodosView = ({ todosQuery, onChecked, ...rest }) => {
  return (
    <div className="todos-view-container">
      <div className="header">MarkDown TO-DOs</div>
      <div className="todos-list">
        <TodosList onChecked={onChecked} todosQuery={todosQuery} />
      </div>
    </div>
  );
};

const TodosList = ({ todosQuery, onChecked }) => {
  return (
    <Query query={todosQuery}>
      {({ loading, error, data }) => {
        if (error) console.log(error);
        if (loading || !data)
          return <div className="todo-item-container loading">Loading...</div>;

        return (
          <Fragment>
            {data.todos.map((todo, index) => (
              <TodoItem
                key={`${todo.id}-${index}`}
                onChecked={onChecked}
                {...todo}
              />
            ))}
            <div className="todo-placeholder" />
          </Fragment>
        );
      }}
    </Query>
  );
};

const TodoItem = ({ id, lines, completed, onChecked }) => {
  return (
    <div className="todo-item-container">
      <input
        onChange={() => onChecked(id, completed)}
        className="todo-status"
        type="checkbox"
        checked={completed}
      />
      <div className="todo-title">
        <MarkDown lines={lines} />
      </div>
      <div className="todo-remove">x</div>
    </div>
  );
};

export default TodosView;
