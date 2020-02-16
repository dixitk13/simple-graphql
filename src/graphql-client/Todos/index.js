import React from "react";

import TodosView from "./TodosView";
import { findAllTodos } from "./todos.graphql";

const Todos = () => {
  return <TodosView todosQuery={findAllTodos} />;
};

export default Todos;
