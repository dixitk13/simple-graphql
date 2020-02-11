import React from "react";
import "./tododetail.styles.scss";
import { Query } from "react-apollo";
import MarkDownView from "../MarkDown";

const TodoDetail = ({ id, todoDetailQuery }) => {
  console.log("todo detail ", typeof id, id);
  return (
    <Query query={todoDetailQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        if (error) console.log(error);
        if (loading || !data) return <div className="">Loading...</div>;
        const { todo } = data;
        return (
          <div className="todoDetail-view-container">
            <div className="lines-header">header</div>
            <MarkDownView lines={todo.lines} />
            <div className="date">Complete: {`${todo.completed}`}</div>
          </div>
        );
      }}
    </Query>
  );
};

export default TodoDetail;