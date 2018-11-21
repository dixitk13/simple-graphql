import React, { Fragment } from "react";
import "./todos.styles.scss";

import { Query } from "react-apollo";

export const TodosView = ({ todosQuery, ...rest }) => {
  return (
    <div className="todos-view-container">
      <div className="todos-count">
        <div className="value">TODOS</div>
        <div className="todos-list">
          <TodosList todosQuery={todosQuery} />
        </div>
      </div>
      {/*<Counter {...rest} />*/}
    </div>
  );
};

const TodosList = ({ todosQuery }) => {
  return (
    <Query query={todosQuery}>
      {({ loading, error, data }) => {
        if (error) console.log(error);
        if (loading || !data) return <div>Loading...</div>;

        return (
          <Fragment>
            {data.todos.map((todo, index) => (
              <TodoItem key={`${todo.id}-${index}`} {...todo} />
            ))}
          </Fragment>
        );
      }}
    </Query>
  );
};

const TodoItem = ({ id, title, completed }) => {
  return <div className="todo-item">{title}</div>;
};

const Counter = ({ value, increment, decrement }) => {
  return (
    <div className="simple-counter">
      <div className="value">{value}</div>
      <div className="action-holder">
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrease</button>
      </div>
    </div>
  );
};
export default TodosView;
