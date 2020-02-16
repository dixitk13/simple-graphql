import React from "react";
import "./todoDetail.styles.scss";

import { Link } from "react-router-dom";
import { Query } from "react-apollo";

import MarkDownView from "../MarkDown";
import { Spinner, Completed, Header, Back } from "../shared";

const TodoDetailView = ({ id, todoDetailQuery }) => {
  return (
    <div className="todoDetail-view-container">
      <Query query={todoDetailQuery} variables={{ id }}>
        {({ loading, error, data }) => {
          if (error) console.log(error);
          if (loading || !data || !data.todo) return <Spinner />;

          const { todo } = data;
          const { lines, completed } = todo;
          return (
            <>
              <Header text="TODO Detail" />
              <Completed flag={completed} />
              <MarkDownView lines={lines} />
            </>
          );
        }}
      </Query>
      <Link className="back-btn" to={`/todos`}>
        <Back />
      </Link>
    </div>
  );
};

export default TodoDetailView;
