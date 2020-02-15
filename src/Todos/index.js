import React from "react";

import TodosView from "./TodosView";
import { findAllTodos } from "./todos.graphql";

const Todos = () => {
  const [value, _] = useState('');

  onChecked = () => {
    // TODO: under-construction!
  };

  render() {
    return (
      <TodosView
        value={value}
        todosQuery={findAllTodos}
        onChecked={this.onChecked}
      />
    );
  }
}

export default Todos;
