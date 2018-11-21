import React, { Component } from "react";
import TodosView from "./TodosView";

import gql from "graphql-tag";

const todosQuery = gql`
  query {
    todos {
      id
      title
    }
  }
`;

class Todos extends Component {
  state = {
    value: 0
  };

  increment = () => this.setState(({ value }) => ({ value: value + 1 }));

  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    return (
      <TodosView
        {...this.state}
        todosQuery={todosQuery}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

export default Todos;
