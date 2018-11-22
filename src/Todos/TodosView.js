import React, { Fragment } from "react";
import "./todos.styles.scss";

import { Query } from "react-apollo";

export const TodosView = ({ todosQuery, onChecked, ...rest }) => {
  return (
    <div className="todos-view-container">
      <div className="todos-count">
        <div className="header">MarkDown TO-DOs</div>
        <div className="todos-list">
          <TodosList onChecked={onChecked} todosQuery={todosQuery} />
        </div>
      </div>
    </div>
  );
};

const TodosList = ({ todosQuery, onChecked }) => {
  return (
    <Query query={todosQuery}>
      {({ loading, error, data }) => {
        if (error) console.log(error);
        if (loading || !data) return <div>Loading...</div>;

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

const TodoItem = ({ id, title, completed, onChecked }) => {
  return (
    <div className="todo-item-container">
      <input
        onChange={() => onChecked(id, completed)}
        className="todo-status"
        type="checkbox"
        checked={completed}
      />
      <div className="todo-title">{title}</div>
    </div>
  );
};

export default TodosView;
