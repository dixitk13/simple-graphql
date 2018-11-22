import React, { Component } from "react";
import TodosView from "./TodosView";

import gql from "graphql-tag";

const todosQuery = gql`
  query {
    todos {
      id
      lines {
        type
        color
        text
      }
      completed
    }
  }
`;

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
        todosQuery={todosQuery}
        onChecked={this.onChecked}
      />
    );
  }
}

export default Todos;
