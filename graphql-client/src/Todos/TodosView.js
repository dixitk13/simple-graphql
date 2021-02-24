import React from "react";

import { TodoItem } from "./TodoItem";

import { Spinner, Header } from "../shared";
import "./todos.styles.scss";

export const TodosView = (props) => {
  return (
    <div className="todos-view-container">
      <Header text="MarkDown TO-DOs" />
      <div className="todos-list">
        <TodosList {...props} />
      </div>
    </div>
  );
};

const TodosList = ({ todos, loading, error, data }) => {
  if (error) console.log(error);
  if (loading || !data || !data.findAllTodos) return <Spinner />;
  return (
    <>
      {todos.map((todo, index) => (
        <TodoItem key={`${todo.id}-${index}`} {...todo} />
      ))}
      <div className="todo-placeholder" />
    </>
  );
};

export default TodosView;
