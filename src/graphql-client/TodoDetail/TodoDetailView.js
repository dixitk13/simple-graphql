import React from "react";
import "./todoDetail.styles.scss";

import { Query } from "react-apollo";

import MarkDownView from "../MarkDown";
import { Spinner, Completed, Header } from "../shared";

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
              <MarkDownView lines={lines} />
              <div className="date">
                <Completed flag={completed} />
                Complete: {`${completed}`}
              </div>
            </>
          );
        }}
      </Query>
    </div>
  );
};

export default TodoDetailView;
