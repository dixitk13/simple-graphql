import React from "react";
import { useQuery } from "react-apollo";
import { useParams } from "react-router-dom";

import TodoDetailView from "./TodoDetailView";

import { FIND_TODO_BY_ID } from "./todoDetail.graphql";

const TodoDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(FIND_TODO_BY_ID, {
    variables: { id },
    wait: !id
  });

  if (error) console.log("TodoDetail error ", error);
  return <TodoDetailView loading={loading} todo={data && data.todo} />;
};

export default TodoDetail;
