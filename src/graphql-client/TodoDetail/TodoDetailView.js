import React from "react";

import { Link } from "react-router-dom";

import MarkDownView from "../MarkDown";
import { Spinner, Completed, Header, Back } from "../shared";

import "./todoDetail.styles.scss";

const TodoDetailView = ({ todo, error, loading }) => {
  if (error) console.log(error);

  if (loading || !todo) return <Spinner />;

  const { lines, completed } = todo;

  return (
    <div className="todoDetail-view-container">
      <Header text="TODO Detail" />
      <div className="todo-detail-view">
        <Completed flag={completed} />
        <MarkDownView lines={lines} />
      </div>
      <Link className="back-btn" to={`/todos`}>
        <Back />
      </Link>
    </div>
  );
};

export default TodoDetailView;
