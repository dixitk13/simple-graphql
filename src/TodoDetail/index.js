import React, { Component } from "react";
import TodoDetailView from "./TodoDetailView";

import gql from "graphql-tag";

const todoDetailQuery = gql`
  query($id: Int!) {
    todo(id: $id) {
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

class TodoDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <TodoDetailView
        {...this.state}
        id={parseInt(id)}
        todoDetailQuery={todoDetailQuery}
      />
    );
  }
}

export default TodoDetail;
