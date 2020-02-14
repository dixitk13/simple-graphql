import React from "react";
import TodoDetailView from "./TodoDetailView";
import { useParams } from "react-router-dom";

import { todoDetailQuery } from "./todoDetail.graphql";

const TodoDetail = () => {
  const { id } = useParams();

  return <TodoDetailView id={parseInt(id)} todoDetailQuery={todoDetailQuery} />;
};

export default TodoDetail;
