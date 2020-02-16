import React, { useState } from "react";

import TodosView from "./TodosView";
import { findAllTodos } from "./todos.graphql";

const Todos = () => {
  const [value] = useState("");

  const onChecked = () => {
    // TODO: under-construction!
  };

  return (
    <TodosView value={value} todosQuery={findAllTodos} onChecked={onChecked} />
  );
};

export default Todos;
