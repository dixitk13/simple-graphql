import React from "react";
import "./todoDetail.styles.scss";

import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";

import MarkDownView from "../MarkDown";
import { Spinner, Completed, Header, Back } from "../shared";

const TodoDetailView = ({ id, todoDetailQuery }) => {
  const { loading, error, data } = useQuery(todoDetailQuery, {
    variables: { id }
  });
  if (error) console.log(error);
  const todo = data && data.todo;

  if (loading || !data || !data.todo) return <Spinner />;
  return (
    <div className="todoDetail-view-container">
      <Header text="TODO Detail" />
      <div className="todo-detail-view">
        <Completed flag={todo.completed} />
        <MarkDownView lines={todo.lines} />
      </div>
      <Link className="back-btn" to={`/todos`}>
        <Back />
      </Link>
    </div>
  );
};

export default TodoDetailView;
