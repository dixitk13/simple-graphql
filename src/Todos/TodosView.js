import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import MarkDown from "../MarkDown";
import { Query } from "react-apollo";

import "./todos.styles.scss";

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
        if (loading || !data || !data.findAllTodos)
          return <div className="loading">Loading...</div>;

        const { findAllTodos: todos } = data;
        return (
          <Fragment>
            {todos.map((todo, index) => (
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
      <Link to={`/todos/${id}`} className="todo-detail">
        i
      </Link>
      <input
        type="button"
        value="x"
        className={`todo-remove ${classNames({
          "todo-complete": completed,
          "todo-incomplete": !completed
        })}`}
      />
    </div>
  );
};

export default TodosView;
