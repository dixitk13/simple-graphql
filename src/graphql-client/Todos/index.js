import React from "react";

import TodosView from "./TodosView";
import { FIND_ALL_TODOS } from "./todos.graphql";
import { useQuery } from "react-apollo";

const Todos = () => {
  const { loading, error, data } = useQuery(FIND_ALL_TODOS);

  return (
    <TodosView
      todos={data && data.findAllTodos}
      loading={loading}
      data={data}
      error={error}
    />
  );
};

export default Todos;
