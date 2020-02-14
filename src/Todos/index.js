import React, { Component } from "react";

import TodosView from "./TodosView";
import { findAllTodos } from "./todos.graphql";

class Todos extends Component {
  state = {
    value: ""
  };

  onChecked = () => {
    // TODO: under-construction!
  };

  render() {
    return (
      <TodosView
        {...this.state}
        todosQuery={findAllTodos}
        onChecked={this.onChecked}
      />
    );
  }
}

export default Todos;
