import React, { Component } from "react";
import TodosView from "./TodosView";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const TODOS_QUERY = gql`
  query todoRootQuery {
    todos {
      id
      name
    }
  }
`;

class Todos extends Component {
  state = {
    value: 0,
    todos: []
  };

  increment = () => this.setState(({ value }) => ({ value: value + 1 }));

  decrement = () => this.setState(({ value }) => ({ value: value - 1 }));

  render() {
    return (
      <TodosView
        {...this.state}
        todos={<TodosQuery query={TODOS_QUERY} />}
        decrement={this.decrement}
        increment={this.increment}
      />
    );
  }
}

const TodosQuery = ({ query }) => {
  return (
    <Query query={query}>
      {(loading, error, data) => {
        if (loading) return <div>Loading...</div>;
        if (error) console.log(error);

        console.log(data);
        return <h1>test</h1>;
      }}
    </Query>
  );
};

export default Todos;
