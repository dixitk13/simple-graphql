import React from "react";

import { TodoItemView } from "./TodoItem";
import { Query } from "react-apollo";

import "./todos.styles.scss";
import { Spinner, Header } from "../shared";

export const TodosView = ({ todosQuery }) => {
  return (
    <div className="todos-view-container">
      <Header text="MarkDown TO-DOs" />
      <div className="todos-list">
        <TodosList todosQuery={todosQuery} />
      </div>
    </div>
  );
};

const TodosList = ({ todosQuery }) => {
  return (
    <Query query={todosQuery}>
      {({ loading, error, data }) => {
        if (error) console.log(error);
        if (loading || !data || !data.findAllTodos) return <Spinner />;

        const { findAllTodos: todos } = data;

        return (
          <>
            {todos.map((todo, index) => (
              <TodoItemView key={`${todo.id}-${index}`} {...todo} />
            ))}
            <div className="todo-placeholder" />
          </>
        );
      }}
    </Query>
  );
};

export default TodosView;
